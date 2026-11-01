import { useState } from 'react';
import { router } from 'expo-router';
import { listThemes } from '../src/db';
import { matches } from '../src/logic';
import { Btn, Field, Item, Loader, Page, T, useLoad } from '../src/ui';

export default function Themes() {
  const { data, error } = useLoad(listThemes);
  const [q, setQ] = useState('');
  if (!data) return <Loader title="Thèmes et duels" error={error} />;
  const shown = data.filter(t => matches(t.name, q));
  const section = (title: string, list: typeof data, empty: string) => (
    <>
      <T kind="h2">{title}</T>
      {!list.length && <T kind="muted">{empty}</T>}
      {list.map(t => (
        <Item key={t.id} title={`${t.name} · ${t.n} duel${t.n > 1 ? 's' : ''}`} sub={t.description} onPress={() => router.push(`/theme?id=${t.id}`)} />
      ))}
    </>
  );
  return (
    <Page title="Thèmes et duels">
      <Btn title="Créer un thème" onPress={() => router.push('/theme-edit')} />
      <Field label="Rechercher un thème" value={q} onChangeText={setQ} placeholder="Ex. : Voyage" />
      {section('Mes thèmes', shown.filter(t => t.origin === 'user'), q ? 'Aucun thème personnel ne correspond.' : 'Aucun thème personnel pour l’instant.')}
      {section('Thèmes prédéfinis', shown.filter(t => t.origin === 'pre'), 'Aucun thème prédéfini ne correspond.')}
      <T kind="muted">Tu peux aussi ajouter tes propres duels à un thème prédéfini.</T>
    </Page>
  );
}
