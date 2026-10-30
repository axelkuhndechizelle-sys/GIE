import { router, useLocalSearchParams } from 'expo-router';
import { deleteTheme, getTheme, listDuels } from '../src/db';
import { Btn, confirm, Item, Loader, Page, Row, T, useLoad } from '../src/ui';

const side = (p: { emoji: string; label: string }) => (p.emoji ? `${p.emoji} ${p.label}` : p.label);

export default function Theme() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, error } = useLoad(() => Promise.all([getTheme(id), listDuels(id)]), [id]);
  if (!data) return <Loader title="Thème" error={error} />;
  const [theme, duels] = data;
  if (!theme) return <Loader title="Thème" error="ce thème n’existe plus." />;
  const user = theme.origin === 'user';
  const remove = () => confirm(`Supprimer « ${theme.name} » ?`,
    `Le thème et ses ${duels.length} duels seront supprimés. Les résultats déjà enregistrés restent dans tes classements, marqués « supprimé ».`,
    'Supprimer', () => void deleteTheme(id).then(() => router.back()));
  return (
    <Page title={theme.name}>
      <T kind="muted">{user ? 'Thème personnel' : 'Thème prédéfini (non modifiable)'}{theme.description ? ` · ${theme.description}` : ''}</T>
      {user && (
        <Row>
          <Btn grow kind="secondary" title="Modifier" onPress={() => router.push(`/theme-edit?id=${id}`)} />
          <Btn grow kind="danger" title="Supprimer" onPress={remove} />
        </Row>
      )}
      <Btn title="Ajouter un duel" onPress={() => router.push(`/duel-edit?theme=${id}`)} />
      <T kind="h2">Duels ({duels.length})</T>
      {!duels.length && <T kind="muted">Aucun duel dans ce thème. Ajoute le premier pour pouvoir y jouer.</T>}
      {duels.map(d => (
        <Item key={d.id} title={`${side(d.a)}  ou  ${side(d.b)}`} sub={d.origin === 'user' ? 'Perso · toucher pour modifier' : undefined}
          onPress={d.origin === 'user' ? () => router.push(`/duel-edit?id=${d.id}`) : undefined} />
      ))}
    </Page>
  );
}
