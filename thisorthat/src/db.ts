// Accès aux données (SQLite local). Les écrans n'écrivent jamais de SQL : ils passent par ces fonctions.
import type { SQLiteDatabase } from 'expo-sqlite';
import { checkDuel, checkTheme, clean, draw, keyOf, type Prop, type Stat } from './logic';
import { parseDuels, THEMES } from './seed';

export type DB = Pick<SQLiteDatabase, 'execAsync' | 'runAsync' | 'getAllAsync' | 'getFirstAsync' | 'withTransactionAsync'>;
export type Theme = { id: string; name: string; description: string; origin: 'pre' | 'user'; n: number };
export type DuelRow = { id: number; theme: string; origin: 'pre' | 'user'; a: Prop; b: Prop };
export type Step = { duel: number | null; a: Prop; b: Prop; choice?: number };
export type Session = { id: number; started_at: string; state: 'active' | 'done' | 'abandoned'; themes: string; requested: number; total: number; done: number };

let db: DB;
const now = () => new Date().toISOString();
const marks = (n: number) => Array(n).fill('?').join();

// Une entrée par version du schéma, jamais modifiée une fois publiée : on en ajoute une (même vide) pour toute évolution.
// Chaque mise à jour s'exécute une fois, dans une transaction, puis réinsère le contenu prédéfini manquant.
const MIGRATIONS = [
  `CREATE TABLE theme(id TEXT PRIMARY KEY, name TEXT NOT NULL, description TEXT NOT NULL DEFAULT '', origin TEXT NOT NULL,
     created_at TEXT NOT NULL, updated_at TEXT NOT NULL, deleted_at TEXT);
   CREATE TABLE proposition(id INTEGER PRIMARY KEY, theme_id TEXT NOT NULL REFERENCES theme, label TEXT NOT NULL,
     emoji TEXT NOT NULL DEFAULT '', key TEXT NOT NULL, UNIQUE(theme_id, key));
   CREATE TABLE duel(id INTEGER PRIMARY KEY, theme_id TEXT NOT NULL REFERENCES theme, a INTEGER NOT NULL REFERENCES proposition,
     b INTEGER NOT NULL REFERENCES proposition, origin TEXT NOT NULL, created_at TEXT NOT NULL, updated_at TEXT NOT NULL,
     UNIQUE(a, b), CHECK(a <> b));
   CREATE TABLE session(id INTEGER PRIMARY KEY, started_at TEXT NOT NULL, ended_at TEXT, themes TEXT NOT NULL,
     requested INTEGER NOT NULL, plan TEXT NOT NULL, state TEXT NOT NULL);
   CREATE TABLE answer(id INTEGER PRIMARY KEY, session_id INTEGER NOT NULL REFERENCES session ON DELETE CASCADE, pos INTEGER NOT NULL,
     duel_id INTEGER REFERENCES duel ON DELETE SET NULL, a INTEGER NOT NULL REFERENCES proposition, b INTEGER NOT NULL REFERENCES proposition,
     choice INTEGER NOT NULL REFERENCES proposition, answered_at TEXT NOT NULL, UNIQUE(session_id, pos));
   CREATE INDEX answer_duel ON answer(duel_id);`,
];

export async function init(d: DB) {
  db = d;
  await db.execAsync('PRAGMA foreign_keys = ON; PRAGMA journal_mode = WAL;');
  const v = (await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version'))?.user_version ?? 0;
  if (v >= MIGRATIONS.length) return;
  await db.withTransactionAsync(async () => {
    for (const m of MIGRATIONS.slice(v)) await db.execAsync(m);
    await seed();
    await db.execAsync(`PRAGMA user_version = ${MIGRATIONS.length}`);
  });
}

async function seed() {
  const t = now();
  for (const [id, name, duels] of THEMES) {
    await db.runAsync(`INSERT OR IGNORE INTO theme(id, name, origin, created_at, updated_at) VALUES(?, ?, 'pre', ?, ?)`, id, name, t, t);
    for (const [a, b] of parseDuels(duels))
      await db.runAsync(`INSERT OR IGNORE INTO duel(theme_id, a, b, origin, created_at, updated_at) VALUES(?, ?, ?, 'pre', ?, ?)`,
        id, await prop(id, a.label, a.emoji, true), await prop(id, b.label, b.emoji, true), t, t);
  }
}

/** Retrouve (même thème + même libellé normalisé) ou crée une proposition ; un emoji saisi remplace l'ancien. */
async function prop(theme: string, label: string, emoji: string, keep = false) {
  const r = await db.getFirstAsync<{ id: number }>(
    `INSERT INTO proposition(theme_id, label, emoji, key) VALUES(?, ?, ?, ?) ON CONFLICT(theme_id, key)
     DO UPDATE SET emoji = CASE WHEN ? OR excluded.emoji = '' THEN emoji ELSE excluded.emoji END RETURNING id`,
    theme, clean(label), emoji, keyOf(label), keep ? 1 : 0);
  return r!.id;
}

/** Supprime les propositions qui ne servent plus (ni duel ni historique) et les thèmes supprimés devenus vides. */
async function prune() {
  await db.execAsync(`DELETE FROM proposition WHERE id NOT IN (SELECT a FROM duel UNION SELECT b FROM duel UNION SELECT a FROM answer UNION SELECT b FROM answer);
    DELETE FROM theme WHERE deleted_at IS NOT NULL AND id NOT IN (SELECT theme_id FROM proposition);`);
}

// ---- Thèmes ----
export async function listThemes(): Promise<Theme[]> {
  const rows = await db.getAllAsync<Theme>(`SELECT t.id, t.name, t.description, t.origin, COUNT(d.id) n FROM theme t
    LEFT JOIN duel d ON d.theme_id = t.id WHERE t.deleted_at IS NULL GROUP BY t.id`);
  return rows.sort((x, y) => x.name.localeCompare(y.name, 'fr'));
}

export const getTheme = (id: string) => db.getFirstAsync<Theme>(`SELECT t.id, t.name, t.description, t.origin, COUNT(d.id) n
  FROM theme t LEFT JOIN duel d ON d.theme_id = t.id WHERE t.id = ? AND t.deleted_at IS NULL GROUP BY t.id`, id);

/** Crée (id null) ou modifie un thème personnel ; renvoie son id. Lève une erreur lisible si la saisie est invalide. */
export async function saveTheme(id: string | null, name: string, desc: string) {
  const taken = await db.getAllAsync<{ name: string }>('SELECT name FROM theme WHERE deleted_at IS NULL AND id IS NOT ?', id);
  const err = checkTheme(name, desc, taken.map(t => t.name));
  if (err) throw new Error(err);
  const t = now();
  if (id) await db.runAsync(`UPDATE theme SET name = ?, description = ?, updated_at = ? WHERE id = ? AND origin = 'user'`, clean(name), clean(desc), t, id);
  else {
    id = 'u' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    await db.runAsync(`INSERT INTO theme(id, name, description, origin, created_at, updated_at) VALUES(?, ?, ?, 'user', ?, ?)`, id, clean(name), clean(desc), t, t);
  }
  return id;
}

/** Supprime un thème personnel et ses duels. L'historique des réponses est conservé (thème marqué « supprimé »). */
export async function deleteTheme(id: string) {
  await db.withTransactionAsync(async () => {
    await db.runAsync(`DELETE FROM duel WHERE theme_id = (SELECT id FROM theme WHERE id = ? AND origin = 'user')`, id);
    await db.runAsync(`UPDATE theme SET deleted_at = ? WHERE id = ? AND origin = 'user'`, now(), id);
  });
  await prune();
}

// ---- Duels ----
const PROPS = 'pa.id aid, pa.label al, pa.emoji ae, pb.id bid, pb.label bl, pb.emoji be';
type PropRow = { aid: number; al: string; ae: string; bid: number; bl: string; be: string };
const pair = (r: PropRow) => ({ a: { id: r.aid, label: r.al, emoji: r.ae }, b: { id: r.bid, label: r.bl, emoji: r.be } });
const DUELS = `SELECT d.id, d.theme_id theme, d.origin, ${PROPS} FROM duel d JOIN proposition pa ON pa.id = d.a JOIN proposition pb ON pb.id = d.b`;
const toDuel = (r: PropRow & Omit<DuelRow, 'a' | 'b'>): DuelRow => ({ id: r.id, theme: r.theme, origin: r.origin, ...pair(r) });

export const listDuels = async (theme: string) =>
  (await db.getAllAsync<PropRow & DuelRow>(`${DUELS} WHERE d.theme_id = ? ORDER BY d.origin DESC, d.id DESC`, theme)).map(toDuel);

export const getDuel = async (id: number) => {
  const r = await db.getFirstAsync<PropRow & DuelRow>(`${DUELS} WHERE d.id = ?`, id);
  return r && toDuel(r);
};

/** Crée (id null) ou modifie un duel personnel. Lève une erreur lisible si la saisie est invalide ou en double. */
export async function saveDuel(id: number | null, theme: string, a: Omit<Prop, 'id'>, b: Omit<Prop, 'id'>) {
  const err = checkDuel(a.label, b.label);
  if (err) throw new Error(err);
  await db.withTransactionAsync(async () => {
    const [pa, pb] = [await prop(theme, a.label, a.emoji), await prop(theme, b.label, b.emoji)];
    if (await db.getFirstAsync('SELECT 1 FROM duel WHERE ((a = ? AND b = ?) OR (a = ? AND b = ?)) AND id IS NOT ?', pa, pb, pb, pa, id))
      throw new Error('Ce duel existe déjà dans ce thème.');
    if (id) await db.runAsync(`UPDATE duel SET theme_id = ?, a = ?, b = ?, updated_at = ? WHERE id = ? AND origin = 'user'`, theme, pa, pb, now(), id);
    else await db.runAsync(`INSERT INTO duel(theme_id, a, b, origin, created_at, updated_at) VALUES(?, ?, ?, 'user', ?, ?)`, theme, pa, pb, now(), now());
  });
  await prune();
}

export async function deleteDuel(id: number) {
  await db.runAsync(`DELETE FROM duel WHERE id = ? AND origin = 'user'`, id);
  await prune();
}

// ---- Sessions et réponses ----
/** Démarre une session (la session en cours éventuelle est marquée abandonnée, ses réponses restent comptées). */
export async function startSession(themes: string[], n: number) {
  const duels = await db.getAllAsync<{ id: number; seen: number }>(`SELECT d.id, COUNT(an.id) seen FROM duel d
    LEFT JOIN answer an ON an.duel_id = d.id WHERE d.theme_id IN (${marks(themes.length)}) GROUP BY d.id`, ...themes);
  const plan = draw(duels, n);
  if (!plan.length) throw new Error('Aucun duel disponible pour ces thèmes.');
  let id = 0;
  await db.withTransactionAsync(async () => {
    await db.runAsync(`UPDATE session SET state = 'abandoned', ended_at = ? WHERE state = 'active'`, now());
    id = (await db.runAsync(`INSERT INTO session(started_at, themes, requested, plan, state) VALUES(?, ?, ?, ?, 'active')`,
      now(), JSON.stringify(themes), n, JSON.stringify(plan))).lastInsertRowId;
  });
  return id;
}

const SESSIONS = `SELECT s.id, s.started_at, s.state, s.themes, s.requested, json_array_length(s.plan) total, COUNT(an.id) done
  FROM session s LEFT JOIN answer an ON an.session_id = s.id`;
export const activeSession = () => db.getFirstAsync<Session>(`${SESSIONS} WHERE s.state = 'active' GROUP BY s.id`);
export const getSession = (id: number) => db.getFirstAsync<Session>(`${SESSIONS} WHERE s.id = ? GROUP BY s.id`, id);
export const listSessions = () => db.getAllAsync<Session>(`${SESSIONS} GROUP BY s.id HAVING done > 0 ORDER BY s.id DESC LIMIT 100`);

/** Étapes d'une session : réponses déjà données (copie exacte de ce qui a été montré) puis duels restants encore existants. */
export async function loadSession(id: number): Promise<Step[]> {
  const s = await db.getFirstAsync<{ plan: string }>('SELECT plan FROM session WHERE id = ?', id);
  if (!s) throw new Error('Session introuvable.');
  const done = await db.getAllAsync<PropRow & { duel: number | null; choice: number }>(`SELECT an.duel_id duel, an.choice, ${PROPS}
    FROM answer an JOIN proposition pa ON pa.id = an.a JOIN proposition pb ON pb.id = an.b WHERE an.session_id = ? ORDER BY an.pos`, id);
  const rest: number[] = JSON.parse(s.plan).slice(done.length);
  const live = new Map((await db.getAllAsync<PropRow & DuelRow>(`${DUELS} WHERE d.id IN (${marks(rest.length)})`, ...rest)).map(r => [r.id, r]));
  return [
    ...done.map(r => ({ duel: r.duel, choice: r.choice, ...pair(r) })),
    ...rest.filter(d => live.has(d)).map(d => ({ duel: d, ...pair(live.get(d)!) })),
  ];
}

/** Enregistre (ou remplace, sans double comptage) la réponse donnée à la position `pos` d'une session. */
export const answer = (session: number, pos: number, s: Step, choice: number) =>
  db.runAsync(`INSERT INTO answer(session_id, pos, duel_id, a, b, choice, answered_at) VALUES(?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(session_id, pos) DO UPDATE SET choice = excluded.choice, answered_at = excluded.answered_at`,
    session, pos, s.duel, s.a.id, s.b.id, choice, now());

export const finish = (session: number) => db.runAsync(`UPDATE session SET state = 'done', ended_at = ? WHERE id = ?`, now(), session);

// ---- Statistiques ----
/** Présentations et sélections par proposition, pour une session ou en cumul. */
export function stats(session?: number) {
  const w = session ? 'WHERE session_id = ?' : '';
  return db.getAllAsync<Stat & { themeName: string; deleted: number }>(`SELECT p.id, p.theme_id theme, t.name themeName,
    t.deleted_at IS NOT NULL deleted, p.label, p.emoji, COUNT(*) shown, SUM(x.c) picked
    FROM (SELECT a pid, choice = a c FROM answer ${w} UNION ALL SELECT b, choice = b FROM answer ${w}) x
    JOIN proposition p ON p.id = x.pid JOIN theme t ON t.id = p.theme_id GROUP BY p.id`, ...(session ? [session, session] : []));
}

export const themeNames = async () =>
  new Map((await db.getAllAsync<{ id: string; name: string }>('SELECT id, name FROM theme')).map(t => [t.id, t.name]));

// ---- Effacement ----
export async function clearHistory() {
  await db.execAsync('DELETE FROM answer; DELETE FROM session;');
  await prune();
}

/** Remet l'appli à zéro : supprime créations et historique, puis recharge le contenu prédéfini. */
export async function clearAll() {
  await db.withTransactionAsync(async () => {
    await db.execAsync('DELETE FROM answer; DELETE FROM session; DELETE FROM duel; DELETE FROM proposition; DELETE FROM theme;');
    await seed();
  });
}
