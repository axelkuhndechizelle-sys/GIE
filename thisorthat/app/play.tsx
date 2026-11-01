import { useState } from 'react';
import { router } from 'expo-router';
import { activeSession, listThemes, startSession } from '../src/db';
import { matches, parseCount, PRESETS } from '../src/logic';
import { Btn, Chip, Field, Loader, Page, Row, T, useLoad } from '../src/ui';

export default function Play() {
  const { data, error } = useLoad(() => Promise.all([listThemes(), activeSession()]));
  const [sel, setSel] = useState<string[]>([]);
  const [q, setQ] = useState('');
  const [count, setCount] = useState('10');
  const [fail, setFail] = useState('');
  if (!data) return <Loader title="Jouer" error={error} />;
  const [themes, active] = data;
  const playable = themes.filter(t => t.n > 0).map(t => t.id);
  const available = themes.filter(t => sel.includes(t.id)).reduce((n, t) => n + t.n, 0);
  const res = sel.length ? parseCount(count, available) : { error: 'Sélectionne au moins un thème.', n: undefined };
  const shown = themes.filter(t => matches(t.name, q));
  const start = (n: number) => startSession(sel, n).then(id => router.replace(`/duel?id=${id}`), e => setFail(e.message));
  return (
    <Page title="Jouer">
      <T kind="h2">Thèmes</T>
      {themes.length > 8 && <Field label="Rechercher un thème" value={q} onChangeText={setQ} placeholder="Ex. : Sport" />}
      <Row>
        <Btn grow kind="secondary" title="Tout sélectionner" onPress={() => setSel(playable)} />
        <Btn grow kind="secondary" title="Aucun" disabled={!sel.length} onPress={() => setSel([])} />
      </Row>
      <Row>
        {shown.map(t => (
          <Chip key={t.id} label={`${t.name}${t.origin === 'user' ? ' · Perso' : ''} (${t.n})`} on={sel.includes(t.id)} disabled={!t.n}
            onPress={() => setSel(sel.includes(t.id) ? sel.filter(x => x !== t.id) : [...sel, t.id])} />
        ))}
      </Row>
      {!themes.length ? <T kind="muted">Aucun thème. Crée le tien pour commencer.</T> : !shown.length && <T kind="muted">Aucun thème ne correspond à « {q} ».</T>}
      <T kind="muted">{sel.length} thème{sel.length > 1 ? 's' : ''} sélectionné{sel.length > 1 ? 's' : ''} · {available} duels disponibles. Le nombre entre parenthèses indique les duels de chaque thème.</T>
      <T kind="h2">Nombre de duels</T>
      <Row>{PRESETS.map(n => <Chip key={n} label={String(n)} on={count === String(n)} onPress={() => setCount(String(n))} />)}</Row>
      <Field label="Nombre personnalisé" value={count} onChangeText={setCount} keyboardType="number-pad" maxLength={4} />
      {!!res.error && <T kind="error">{res.error}</T>}
      {!!fail && <T kind="error">{fail}</T>}
      {active && <T kind="muted">Une session est en cours ({active.done} / {active.total}) : en lancer une nouvelle l’arrêtera, ses réponses restent comptées.</T>}
      {res.error && res.n ? <Btn title={`Jouer les ${res.n} duels disponibles`} onPress={() => start(res.n!)} />
        : <Btn title="Lancer" disabled={!res.n} onPress={() => start(res.n!)} />}
      <Btn kind="secondary" title="Créer un thème" onPress={() => router.push('/theme-edit')} />
    </Page>
  );
}
