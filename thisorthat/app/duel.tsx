import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { answer, finish, loadSession, type Step } from '../src/db';
import type { Prop } from '../src/logic';
import { Btn, C, Loader, Page, Row, T } from '../src/ui';

const Card = ({ p, on, onPress }: { p: Prop; on: boolean; onPress: () => void }) => (
  <Pressable accessibilityRole="button" accessibilityLabel={p.label} accessibilityState={{ selected: on }} onPress={onPress}
    style={({ pressed }) => [st.card, on && st.on, pressed && { opacity: 0.85 }]}>
    {!!p.emoji && <Text style={st.emoji} accessibilityElementsHidden importantForAccessibility="no">{p.emoji}</Text>}
    <Text style={[st.label, !p.emoji && { fontSize: 26 }]} numberOfLines={3}>{p.label}</Text>
  </Pressable>
);

export default function Duel() {
  const id = Number(useLocalSearchParams<{ id: string }>().id);
  const [steps, setSteps] = useState<Step[]>();
  const [pos, setPos] = useState(0);
  const busy = useRef(false); // une seule réponse validée à la fois, même en cas de double appui
  const [error, setError] = useState('');
  const end = () => finish(id).then(() => router.replace(`/results?session=${id}`), e => setError(e.message));

  useEffect(() => {
    loadSession(id).then(all => {
      const next = all.findIndex(x => x.choice == null);
      next < 0 ? end() : (setSteps(all), setPos(next));
    }, e => setError(e.message));
  }, [id]);

  const choose = async (choice: number) => {
    if (busy.current || !steps) return;
    busy.current = true;
    try {
      await answer(id, pos, steps[pos], choice); // enregistré avant de passer au duel suivant
      const all = steps.map((x, i) => (i === pos ? { ...x, choice } : x));
      const next = all.findIndex(x => x.choice == null);
      setSteps(all);
      setError('');
      next < 0 ? await end() : setPos(next);
    } catch {
      setError('Ta réponse n’a pas pu être enregistrée. Réessaie.');
    } finally {
      busy.current = false;
    }
  };

  if (!steps) return <Loader title="Duel" error={error} />;
  const cur = steps[pos];
  return (
    <Page title="Duel" scroll={false}>
      <View style={st.bar} accessibilityRole="progressbar" accessibilityValue={{ min: 0, max: steps.length, now: pos + 1 }}>
        <View style={[st.fill, { width: `${((pos + 1) / steps.length) * 100}%` }]} />
      </View>
      <T kind="h2">{pos + 1} / {steps.length}</T>
      <Card p={cur.a} on={cur.choice === cur.a.id} onPress={() => choose(cur.a.id)} />
      <Text style={st.or}>OU</Text>
      <Card p={cur.b} on={cur.choice === cur.b.id} onPress={() => choose(cur.b.id)} />
      {!!error && <T kind="error">{error}</T>}
      {cur.choice != null && <T kind="muted">Ta réponse est surlignée : touche-la pour la garder, ou l’autre pour la changer.</T>}
      <Row>
        <Btn grow kind="secondary" title="Précédent" disabled={!pos} onPress={() => setPos(pos - 1)} />
        <Btn grow kind="secondary" title="Quitter" onPress={() => router.back()} />
      </Row>
      <T kind="muted">Chaque choix est enregistré : tu peux quitter et reprendre plus tard depuis l’accueil.</T>
    </Page>
  );
}

const st = StyleSheet.create({
  bar: { height: 8, borderRadius: 4, backgroundColor: C.line, overflow: 'hidden' },
  fill: { height: 8, backgroundColor: C.primary },
  card: { flex: 1, minHeight: 120, borderRadius: 20, borderWidth: 2, borderColor: C.line, backgroundColor: C.card, alignItems: 'center', justifyContent: 'center', padding: 16, gap: 8 },
  on: { borderColor: C.primary, backgroundColor: C.soft, borderWidth: 3 },
  emoji: { fontSize: 64, lineHeight: 80 },
  label: { fontSize: 22, fontWeight: '700', color: C.text, textAlign: 'center' },
  or: { textAlign: 'center', fontSize: 16, fontWeight: '800', color: C.muted, letterSpacing: 2 },
});
