// Règles métier pures (sans stockage ni interface) : validation, tirage, classement.
export const MAX_DUELS = 500; // plafond d'une session, modifiable ici
export const PRESETS = [10, 20, 50, 100];
export const PROVISIONAL = 5; // en dessous de 5 réponses dans un thème, le classement est « provisoire »
export const MAX = { name: 40, desc: 200, label: 40 };

export type Prop = { id: number; label: string; emoji: string };
export type Stat = Prop & { theme: string; shown: number; picked: number };
export type Ranked = Stat & { rank: number; rate: number };

export const clean = (s: string) => s.trim().replace(/\s+/g, ' ');
/** Identité d'une proposition ou d'un thème : espaces et casse ignorés, accents conservés. */
export const keyOf = (s: string) => clean(s).toLocaleLowerCase('fr');
/** Recherche tolérante (casse et accents ignorés). */
export const matches = (s: string, q: string) => {
  const f = (x: string) => keyOf(x).normalize('NFD').replace(/[̀-ͯ]/g, '');
  return f(s).includes(f(q));
};

export function checkTheme(name: string, desc: string, taken: string[]): string | null {
  const n = clean(name);
  if (!n) return 'Le nom est obligatoire.';
  if (n.length > MAX.name) return `Le nom ne doit pas dépasser ${MAX.name} caractères.`;
  if (clean(desc).length > MAX.desc) return `La description ne doit pas dépasser ${MAX.desc} caractères.`;
  if (taken.map(keyOf).includes(keyOf(n))) return 'Un thème porte déjà ce nom.';
  return null;
}

export function checkDuel(a: string, b: string): string | null {
  const [x, y] = [clean(a), clean(b)];
  if (!x || !y) return 'Le texte des deux propositions est obligatoire.';
  if (x.length > MAX.label || y.length > MAX.label) return `Une proposition ne doit pas dépasser ${MAX.label} caractères.`;
  if (keyOf(x) === keyOf(y)) return 'Les deux propositions doivent être différentes.';
  return null;
}

/** Valide le nombre de duels saisi. En cas de dépassement du contenu disponible, `n` propose le maximum possible. */
export function parseCount(input: string, available: number): { n?: number; error?: string } {
  if (!/^\d+$/.test(input.trim())) return { error: 'Saisis un nombre entier.' };
  const n = Number(input);
  if (n < 1) return { error: 'Le nombre de duels doit être au moins 1.' };
  if (n > MAX_DUELS) return { error: `Une session compte au plus ${MAX_DUELS} duels.` };
  if (n > available) return { n: available, error: `Ces thèmes ne contiennent que ${available} duels différents : pas de répétition possible.` };
  return { n };
}

/** Tire n duels distincts : les moins vus d'abord, puis ordre aléatoire. */
export function draw(duels: { id: number; seen: number }[], n: number, rnd = Math.random): number[] {
  const shuffle = <T,>(a: T[]) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  return shuffle(shuffle([...duels]).sort((x, y) => x.seen - y.seen).slice(0, n)).map(d => d.id);
}

/** Classe par taux de sélection puis nombre de sélections ; les égalités partagent le même rang (1, 1, 3). */
export function rank(stats: Stat[]): Ranked[] {
  const cmp = (x: Stat, y: Stat) => y.picked * x.shown - x.picked * y.shown || y.picked - x.picked;
  const out: Ranked[] = [];
  [...stats]
    .sort((x, y) => cmp(x, y) || x.label.localeCompare(y.label, 'fr'))
    .forEach((x, i, s) => out.push({ ...x, rate: Math.round((100 * x.picked) / x.shown), rank: i && !cmp(s[i - 1], x) ? out[i - 1].rank : i + 1 }));
  return out;
}

/** Regroupe les statistiques par thème ; `answers` = nombre de réponses du thème (2 présentations par réponse). */
export function byTheme(stats: Stat[]) {
  const m = new Map<string, Stat[]>();
  stats.forEach(s => m.set(s.theme, [...(m.get(s.theme) ?? []), s]));
  return [...m].map(([theme, list]) => ({ theme, answers: list.reduce((n, s) => n + s.shown, 0) / 2, ranking: rank(list) }));
}
