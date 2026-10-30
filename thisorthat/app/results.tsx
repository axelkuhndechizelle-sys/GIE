import { StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { getSession, listSessions, listThemes, startSession, stats, themeNames } from '../src/db';
import { byTheme, PROVISIONAL } from '../src/logic';
import { Btn, C, Item, Loader, Page, T, useLoad } from '../src/ui';

const date = (iso: string) => new Date(iso).toLocaleString('fr-FR', { dateStyle: 'short', timeStyle: 'short' });
const plural = (n: number, w: string) => `${n} ${w}${n > 1 ? 's' : ''}`;
const STATE = { active: 'en cours', done: 'terminée', abandoned: 'interrompue' };

export default function Results() {
  const sid = Number(useLocalSearchParams<{ session?: string }>().session) || undefined;
  const title = sid ? 'Résultats de la session' : 'Classements';
  const { data, error } = useLoad(() => Promise.all([stats(sid), sid ? getSession(sid) : null, sid ? [] : listSessions(), themeNames()]), [sid]);
  if (!data) return <Loader title={title} error={error} />;
  const [rows, session, sessions, names] = data;
  const groups = byTheme(rows).sort((x, y) => y.answers - x.answers);
  const total = groups.reduce((n, g) => n + g.answers, 0);
  const replay = async () => {
    const themes: string[] = JSON.parse(session!.themes);
    const live = (await listThemes()).filter(t => themes.includes(t.id));
    const id = await startSession(live.map(t => t.id), Math.min(session!.requested, live.reduce((n, t) => n + t.n, 0)));
    router.replace(`/duel?id=${id}`);
  };
  return (
    <Page title={title}>
      <T kind="muted">
        {sid ? `Portée : uniquement cette session (${session ? date(session.started_at) : '?'}), ${plural(total, 'duel')} réalisé${total > 1 ? 's' : ''}.`
          : `Portée : cumul de toutes tes réponses, ${plural(total, 'duel')} au total.`}{' '}
        Taux = sélections ÷ présentations × 100. Les égalités partagent le même rang.
      </T>
      {!groups.length && <T kind="muted">Classement indisponible : aucune réponse enregistrée pour l’instant. Joue une session pour voir tes préférences.</T>}
      {groups.map(g => (
        <Item key={g.theme} title={`${names.get(g.theme) ?? 'Thème'}${rows.find(r => r.theme === g.theme)?.deleted ? ' (supprimé)' : ''} · ${plural(g.answers, 'réponse')}`}
          sub={g.answers < PROVISIONAL ? 'Classement provisoire : peu de réponses dans ce thème.' : undefined}>
          {g.ranking.map(r => (
            <View key={r.id} style={st.line} accessible accessibilityLabel={`${r.rank}e, ${r.label} : ${r.rate} %, ${plural(r.picked, 'sélection')} sur ${plural(r.shown, 'présentation')}`}>
              <Text style={st.rank}>{r.rank}.</Text>
              <View style={{ flex: 1 }}>
                <T>{r.emoji ? `${r.emoji} ${r.label}` : r.label}</T>
                <T kind="muted">{plural(r.picked, 'sélection')} sur {plural(r.shown, 'présentation')}</T>
              </View>
              <Text style={st.rate}>{r.rate} %</Text>
            </View>
          ))}
        </Item>
      ))}
      {sid ? (
        <>
          {session?.themes && <Btn title="Rejouer avec les mêmes thèmes" onPress={() => void replay().catch(() => router.replace('/play'))} />}
          <Btn kind="secondary" title="Changer de thèmes" onPress={() => router.replace('/play')} />
          <Btn kind="secondary" title="Voir les classements cumulés" onPress={() => router.push('/results')} />
        </>
      ) : (
        <>
          <T kind="h2">Sessions précédentes</T>
          {!sessions.length && <T kind="muted">Aucune session pour l’instant.</T>}
          {sessions.map(x => (
            <Item key={x.id} title={`${date(x.started_at)} · ${x.done} / ${x.total} duels`} onPress={() => router.push(`/results?session=${x.id}`)}
              sub={`${STATE[x.state]} · ${(JSON.parse(x.themes) as string[]).map(t => names.get(t) ?? '?').join(', ')}`} />
          ))}
        </>
      )}
      <Btn kind="secondary" title="Accueil" onPress={() => router.dismissTo('/')} />
    </Page>
  );
}

const st = StyleSheet.create({
  line: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 6, borderTopWidth: 1, borderTopColor: C.bg },
  rank: { width: 28, fontSize: 16, fontWeight: '700', color: C.muted },
  rate: { fontSize: 17, fontWeight: '800', color: C.primary },
});
