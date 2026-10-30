import { mkdtempSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';
import * as db from '../src/db';
import { byTheme } from '../src/logic';
import { THEMES } from '../src/seed';
import { open } from '../test/sqlite';

let close: () => void;
const fresh = async (path?: string) => {
  const o = open(path);
  close = o.close;
  await db.init(o.db);
};
const play = async (themes: string[], n: number, pick: (s: db.Step) => number = s => s.a.id) => {
  const id = await db.startSession(themes, n);
  const steps = await db.loadSession(id);
  for (const [i, s] of steps.entries()) await db.answer(id, i, s, pick(s));
  await db.finish(id);
  return id;
};
beforeEach(() => fresh());
afterEach(() => close());

test('contenu prédéfini : 13 thèmes de Liste.docx, chacun avec des duels', async () => {
  const themes = await db.listThemes();
  expect(themes.map(t => t.name).sort()).toEqual(THEMES.map(t => t[1]).sort());
  expect(themes.length).toBe(13);
  expect(themes.every(t => t.n >= 10 && t.origin === 'pre')).toBe(true);
});

test('thème perso : création, doublon refusé, modification, suppression', async () => {
  const id = await db.saveTheme(null, '  Musique ', 'Styles');
  await expect(db.saveTheme(null, 'musique', '')).rejects.toThrow(/déjà/);
  await expect(db.saveTheme(null, '', '')).rejects.toThrow(/obligatoire/);
  await db.saveTheme(id, 'Musiques', 'Genres');
  expect(await db.getTheme(id)).toMatchObject({ name: 'Musiques', description: 'Genres', origin: 'user', n: 0 });
  await db.deleteTheme(id);
  expect(await db.getTheme(id)).toBeNull();
  await db.deleteTheme('nature'); // un thème prédéfini ne se supprime pas
  expect(await db.getTheme('nature')).not.toBeNull();
});

test('duel perso : création, validation, doublon, modification, changement de thème, suppression', async () => {
  const t = await db.saveTheme(null, 'Musique', '');
  await db.saveDuel(null, t, { label: 'Rock', emoji: '🎸' }, { label: 'Jazz', emoji: '🎷' });
  await expect(db.saveDuel(null, t, { label: 'jazz', emoji: '' }, { label: 'rock', emoji: '' })).rejects.toThrow(/existe déjà/);
  await expect(db.saveDuel(null, t, { label: 'Rock', emoji: '' }, { label: 'rock', emoji: '' })).rejects.toThrow(/différentes/);
  const [d] = await db.listDuels(t);
  expect(d).toMatchObject({ origin: 'user', a: { label: 'Rock', emoji: '🎸' }, b: { label: 'Jazz', emoji: '🎷' } });
  await db.saveDuel(d.id, t, { label: 'Rock', emoji: '🤘' }, { label: 'Classique', emoji: '🎻' });
  expect(await db.getDuel(d.id)).toMatchObject({ a: { emoji: '🤘' }, b: { label: 'Classique' } });
  await db.saveDuel(d.id, 'nature', { label: 'Rock', emoji: '' }, { label: 'Classique', emoji: '' });
  expect((await db.getDuel(d.id))?.theme).toBe('nature');
  await db.deleteDuel(d.id);
  expect(await db.getDuel(d.id)).toBeNull();
});

test('un duel prédéfini ne se modifie ni ne se supprime', async () => {
  const [d] = await db.listDuels('nature');
  await db.deleteDuel(d.id);
  await db.saveDuel(d.id, 'nature', { label: 'X', emoji: '' }, { label: 'Y', emoji: '' });
  expect(await db.getDuel(d.id)).toEqual(d);
});

test('session : sans doublon, réponses enregistrées, retour arrière sans double comptage, reprise, fin', async () => {
  const id = await db.startSession(['nature', 'sport'], 15);
  const steps = await db.loadSession(id);
  expect(steps).toHaveLength(15);
  expect(new Set(steps.map(s => s.duel)).size).toBe(15);
  for (let i = 0; i < 5; i++) await db.answer(id, i, steps[i], steps[i].a.id);
  await db.answer(id, 2, steps[2], steps[2].b.id); // retour sur le 3e duel : la réponse est remplacée
  expect(await db.activeSession()).toMatchObject({ id, done: 5, total: 15 });
  const resumed = await db.loadSession(id); // reprise après interruption
  expect(resumed.slice(0, 5).map(s => s.choice)).toEqual([0, 1, 2, 3, 4].map(i => (i === 2 ? steps[i].b.id : steps[i].a.id)));
  expect(resumed.findIndex(s => s.choice == null)).toBe(5);
  const stats = await db.stats(id);
  expect(stats.reduce((n, s) => n + s.shown, 0)).toBe(10);
  expect(stats.reduce((n, s) => n + s.picked, 0)).toBe(5);
  await db.finish(id);
  expect(await db.activeSession()).toBeNull();
  expect((await db.getSession(id))?.state).toBe('done');
});

test('nouvelle session : la précédente est interrompue, ses réponses restent comptées', async () => {
  const a = await db.startSession(['nature'], 3);
  const [s] = await db.loadSession(a);
  await db.answer(a, 0, s, s.a.id);
  await db.startSession(['sport'], 3);
  expect((await db.getSession(a))?.state).toBe('abandoned');
  expect((await db.stats()).reduce((n, x) => n + x.picked, 0)).toBe(1);
});

test('tirage : les duels déjà vus passent après les nouveaux', async () => {
  const total = (await db.listThemes()).find(t => t.id === 'nature')!.n;
  const first = await play(['nature'], 5);
  const seen = new Set((await db.loadSession(first)).map(s => s.duel));
  const next = await db.loadSession(await db.startSession(['nature'], total - 5));
  expect(next.some(s => seen.has(s.duel))).toBe(false);
});

test('classement cumulé par thème : calculé depuis les réponses, portée session vs cumul', async () => {
  const chat = (s: db.Step) => ([s.a, s.b].find(p => p.label === 'Chat') ?? s.a).id;
  const s1 = await play(['nature'], 13, chat);
  await play(['nature'], 13, chat);
  const nature = byTheme(await db.stats()).find(g => g.theme === 'nature')!;
  expect(nature.answers).toBe(26);
  expect(nature.ranking[0]).toMatchObject({ label: 'Chat', rank: 1, shown: 4, picked: 4, rate: 100 });
  expect(byTheme(await db.stats(s1)).find(g => g.theme === 'nature')!.answers).toBe(13);
});

test('historique conservé après modification ou suppression d’un duel ou d’un thème', async () => {
  const t = await db.saveTheme(null, 'Musique', '');
  await db.saveDuel(null, t, { label: 'Rock', emoji: '🎸' }, { label: 'Jazz', emoji: '🎷' });
  const [d] = await db.listDuels(t);
  const s = await play([t], 1);
  await db.saveDuel(d.id, t, { label: 'Pop', emoji: '' }, { label: 'Jazz', emoji: '' });
  expect((await db.stats(s)).map(x => x.label).sort()).toEqual(['Jazz', 'Rock']);
  await db.deleteTheme(t);
  const rows = await db.stats(s);
  expect(rows.map(x => [x.label, x.deleted])).toEqual(expect.arrayContaining([['Rock', 1], ['Jazz', 1]]));
  expect((await db.themeNames()).get(t)).toBe('Musique');
  expect(await db.loadSession(s)).toHaveLength(1);
  await db.clearHistory(); // l'effacement de l'historique fait disparaître le thème supprimé
  expect(await db.stats()).toEqual([]);
  expect((await db.themeNames()).has(t)).toBe(false);
});

test('session reprise après suppression d’un duel encore à jouer : il est retiré du plan', async () => {
  const t = await db.saveTheme(null, 'Musique', '');
  await db.saveDuel(null, t, { label: 'Rock', emoji: '' }, { label: 'Jazz', emoji: '' });
  await db.saveDuel(null, t, { label: 'Pop', emoji: '' }, { label: 'Rap', emoji: '' });
  const id = await db.startSession([t], 2);
  const steps = await db.loadSession(id);
  await db.answer(id, 0, steps[0], steps[0].a.id);
  await db.deleteDuel(steps[1].duel!);
  expect(await db.loadSession(id)).toHaveLength(1);
});

test('persistance après fermeture et migration sans perte', async () => {
  close();
  const path = join(mkdtempSync(join(tmpdir(), 'tot-')), 'test.db');
  await fresh(path);
  const t = await db.saveTheme(null, 'Musique', '');
  await play(['nature'], 4);
  close();
  await fresh(path); // réouverture : pas de réinitialisation
  expect(await db.getTheme(t)).toMatchObject({ name: 'Musique' });
  expect(await db.listSessions()).toHaveLength(1);
  expect((await db.listThemes()).length).toBe(14);
});

test('effacer toutes les données : retour au contenu prédéfini', async () => {
  await db.saveTheme(null, 'Musique', '');
  await play(['nature'], 2);
  await db.clearAll();
  expect((await db.listThemes()).length).toBe(13);
  expect(await db.listSessions()).toEqual([]);
});
