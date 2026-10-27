// Composants d'interface communs. Contrastes WCAG AA : textes ≥ 4,5:1, bordures des champs et boutons ≥ 3:1.
import { Children, useCallback, useState, type ReactNode } from 'react';
import { Alert, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View, type TextInputProps } from 'react-native';
import { Stack, useFocusEffect } from 'expo-router';
import { EMOJIS } from './seed';

export const C = { bg: '#F6F7FB', card: '#FFFFFF', text: '#1B1E28', muted: '#555B6A', primary: '#3F37C9', soft: '#ECEBFC', danger: '#B3261E', line: '#878D9C' };

/** Charge des données à chaque affichage de l'écran (retour compris). */
export function useLoad<T>(fn: () => Promise<T>, deps: unknown[] = []) {
  const [s, set] = useState<{ data?: T; error?: string }>({});
  const load = useCallback(() => void fn().then(data => set({ data }), e => set({ error: String(e?.message ?? e) })), deps);
  useFocusEffect(load);
  return { ...s, reload: load };
}

export const confirm = (title: string, msg: string, ok: string, onOk: () => void) =>
  Platform.OS === 'web'
    ? window.confirm(`${title}\n\n${msg}`) && onOk()
    : Alert.alert(title, msg, [{ text: 'Annuler', style: 'cancel' }, { text: ok, style: 'destructive', onPress: onOk }]);

export const Page = ({ title, children, scroll = true }: { title: string; children: ReactNode; scroll?: boolean }) => (
  <>
    <Stack.Screen options={{ title }} />
    {scroll ? (
      <ScrollView style={s.page} contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">{children}</ScrollView>
    ) : (
      <View style={[s.page, s.content, { flex: 1 }]}>{children}</View>
    )}
  </>
);

export const Loader = ({ title, error }: { title: string; error?: string }) => (
  <Page title={title}>
    <Text style={error ? s.error : s.muted}>{error ? `Lecture impossible : ${error}` : 'Chargement…'}</Text>
  </Page>
);

/** Typographie française : espace insécable avant « : ; ? ! » et après « pour éviter un signe seul en début de ligne. */
const nb = (x: ReactNode) => (typeof x === 'string' ? x.replace(/ ([:;?!»])/g, '\u00A0$1').replace(/« /g, '«\u00A0') : x);

export const T = ({ children, kind = 'body' }: { children: ReactNode; kind?: 'h1' | 'h2' | 'body' | 'muted' | 'error' }) => (
  <Text style={s[kind]} accessibilityRole={kind.startsWith('h') ? 'header' : undefined}>{Children.map(children, nb)}</Text>
);

export const Row = ({ children }: { children: ReactNode }) => <View style={s.row}>{children}</View>;

export const Btn = ({ title, onPress, kind = 'primary', disabled, grow }: { title: string; onPress: () => void; kind?: 'primary' | 'secondary' | 'danger'; disabled?: boolean; grow?: boolean }) => (
  <Pressable accessibilityRole="button" accessibilityState={{ disabled }} disabled={disabled} onPress={onPress}
    style={({ pressed }) => [s.btn, s[kind], grow && { flexGrow: 1 }, (pressed || disabled) && { opacity: disabled ? 0.45 : 0.8 }]}>
    <Text style={[s.btnText, kind === 'secondary' && { color: C.primary }]}>{title}</Text>
  </Pressable>
);

export const Chip = ({ label, on, onPress, disabled }: { label: string; on: boolean; onPress: () => void; disabled?: boolean }) => (
  <Pressable accessibilityRole="checkbox" accessibilityState={{ checked: on, disabled }} disabled={disabled} onPress={onPress}
    style={[s.chip, on && s.chipOn, disabled && { opacity: 0.45 }]}>
    <Text style={[s.body, on && { color: C.primary, fontWeight: '700' }]}>{on ? '✓ ' : ''}{label}</Text>
  </Pressable>
);

/** Ligne cliquable d'une liste (thème, duel, session). */
export const Item = ({ title, sub, onPress, children }: { title: string; sub?: string; onPress?: () => void; children?: ReactNode }) => (
  <Pressable accessibilityRole={onPress ? 'button' : undefined} disabled={!onPress} onPress={onPress}
    style={({ pressed }) => [s.item, pressed && { opacity: 0.8 }]}>
    <Text style={[s.body, { fontWeight: '600' }]}>{nb(title)}</Text>
    {!!sub && <Text style={s.muted}>{nb(sub)}</Text>}
    {children}
  </Pressable>
);

export const Field = ({ label, ...p }: TextInputProps & { label: string }) => (
  <View style={{ gap: 6 }}>
    <Text style={s.label}>{label}</Text>
    <TextInput accessibilityLabel={label} placeholderTextColor={C.muted} style={s.input} {...p} />
  </View>
);

/** Choix d'un emoji dans une grille intégrée (aucune dépendance externe). « Aucun » laisse le texte seul. */
export const EmojiGrid = ({ value, onChange }: { value: string; onChange: (e: string) => void }) => (
  <View style={s.grid}>
    {['', ...EMOJIS].map(e => (
      <Pressable key={e || '-'} accessibilityRole="button" accessibilityLabel={e ? `Emoji ${e}` : 'Aucun emoji'}
        accessibilityState={{ selected: e === value }} onPress={() => onChange(e)} style={[s.cell, e === value && s.chipOn]}>
        <Text style={e ? { fontSize: 26 } : s.muted}>{e || 'Aucun'}</Text>
      </Pressable>
    ))}
  </View>
);

export const s = StyleSheet.create({
  page: { backgroundColor: C.bg },
  content: { padding: 16, paddingBottom: 40, gap: 12, width: '100%', maxWidth: 640, alignSelf: 'center' },
  h1: { fontSize: 28, fontWeight: '800', color: C.text },
  h2: { fontSize: 20, fontWeight: '700', color: C.text, marginTop: 8 },
  body: { fontSize: 16, color: C.text },
  muted: { fontSize: 14, color: C.muted },
  error: { fontSize: 15, color: C.danger, fontWeight: '600' },
  label: { fontSize: 14, fontWeight: '600', color: C.text },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  btn: { minHeight: 48, borderRadius: 12, paddingHorizontal: 18, justifyContent: 'center', alignItems: 'center', borderWidth: 1.5, borderColor: C.primary },
  primary: { backgroundColor: C.primary },
  secondary: { backgroundColor: C.card },
  danger: { backgroundColor: C.danger, borderColor: C.danger },
  btnText: { fontSize: 16, fontWeight: '700', color: '#FFFFFF' },
  chip: { minHeight: 44, paddingHorizontal: 14, borderRadius: 22, borderWidth: 1.5, borderColor: C.line, backgroundColor: C.card, justifyContent: 'center' },
  chipOn: { borderColor: C.primary, backgroundColor: C.soft },
  item: { padding: 14, borderRadius: 12, backgroundColor: C.card, borderWidth: 1, borderColor: C.line, gap: 4 },
  input: { minHeight: 48, borderWidth: 1.5, borderColor: C.line, borderRadius: 12, paddingHorizontal: 14, fontSize: 16, color: C.text, backgroundColor: C.card },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  cell: { minWidth: 48, height: 48, borderRadius: 10, borderWidth: 1.5, borderColor: C.line, backgroundColor: C.card, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4 },
});
