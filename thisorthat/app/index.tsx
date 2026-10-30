import { router } from 'expo-router';
import { activeSession } from '../src/db';
import { Btn, Page, T, useLoad } from '../src/ui';

export default function Home() {
  const { data: active } = useLoad(activeSession);
  return (
    <Page title="Thisorthat">
      <T kind="h1">Ceci ou cela ?</T>
      <T kind="muted">Choisis entre deux propositions et découvre ton classement par thème.</T>
      {active && <Btn title={`Reprendre la session (${active.done} / ${active.total})`} onPress={() => router.push(`/duel?id=${active.id}`)} />}
      <Btn title="Jouer" kind={active ? 'secondary' : 'primary'} onPress={() => router.push('/play')} />
      <Btn title="Thèmes et duels" kind="secondary" onPress={() => router.push('/themes')} />
      <Btn title="Classements" kind="secondary" onPress={() => router.push('/results')} />
      <Btn title="Paramètres" kind="secondary" onPress={() => router.push('/settings')} />
    </Page>
  );
}
