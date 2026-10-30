import { byTheme, checkDuel, checkTheme, draw, keyOf, matches, MAX_DUELS, parseCount, rank, type Stat } from '../src/logic';

const st = (id: number, label: string, shown: number, picked: number, theme = 't'): Stat => ({ id, label, emoji: '', theme, shown, picked });

test('normalisation : casse et espaces ignorés, accents conservés ; recherche sans accents', () => {
  expect(keyOf('  Chat   Noir ')).toBe(keyOf('chat noir'));
  expect(keyOf('Été')).not.toBe(keyOf('Ete'));
  expect(matches('Mode/Beauté', 'beaute')).toBe(true);
  expect(matches('Sport', 'voy')).toBe(false);
});

test('validation des thèmes', () => {
  expect(checkTheme('  ', '', [])).toMatch(/obligatoire/);
  expect(checkTheme('x'.repeat(41), '', [])).toMatch(/40/);
  expect(checkTheme('Sport', '', ['sport'])).toMatch(/déjà/);
  expect(checkTheme('Sports', '', ['Sport'])).toBeNull(); // noms proches autorisés
});

test('validation des duels : textes obligatoires et différents', () => {
  expect(checkDuel('Chat', '')).toMatch(/obligatoire/);
  expect(checkDuel('Chat', ' chat ')).toMatch(/différentes/);
  expect(checkDuel('Chat', 'Chien')).toBeNull();
});

test('nombre de duels : entier, positif, plafonné, compatible avec le contenu', () => {
  expect(parseCount('20', 50)).toEqual({ n: 20 });
  expect(parseCount('0', 50).error).toBeDefined();
  expect(parseCount('-3', 50).error).toBeDefined();
  expect(parseCount('2.5', 50).error).toBeDefined();
  expect(parseCount('abc', 50).error).toBeDefined();
  expect(parseCount(String(MAX_DUELS + 1), 9999).error).toMatch(/au plus/);
  expect(parseCount('100', 42)).toEqual({ n: 42, error: expect.stringMatching(/42 duels/) });
});

test('tirage : sans doublon, plafonné au contenu, les moins vus d’abord', () => {
  const duels = Array.from({ length: 30 }, (_, i) => ({ id: i, seen: i < 10 ? 0 : 5 }));
  const p = draw(duels, 10);
  expect(new Set(p).size).toBe(10);
  expect(p.every(id => id < 10)).toBe(true);
  expect(draw(duels, 100)).toHaveLength(30);
});

test('classement : taux, départage par sélections, égalités au même rang, pas de taux sans présentation', () => {
  const r = rank([st(1, 'Chien', 10, 6), st(2, 'Chat', 10, 8), st(3, 'Panda', 10, 4), st(4, 'Lion', 5, 3), st(5, 'Tigre', 5, 3), st(6, 'Ours', 1, 1)]);
  expect(r.map(x => [x.rank, x.label, x.rate])).toEqual([
    [1, 'Ours', 100], [2, 'Chat', 80], [3, 'Chien', 60], [4, 'Lion', 60], [4, 'Tigre', 60], [6, 'Panda', 40],
  ]);
  expect(r.every(x => x.shown > 0)).toBe(true);
});

test('regroupement par thème et nombre de réponses', () => {
  const g = byTheme([st(1, 'A', 3, 2, 'x'), st(2, 'B', 3, 1, 'x'), st(3, 'C', 1, 1, 'y'), st(4, 'D', 1, 0, 'y')]);
  expect(g.map(x => [x.theme, x.answers])).toEqual([['x', 3], ['y', 1]]);
});
