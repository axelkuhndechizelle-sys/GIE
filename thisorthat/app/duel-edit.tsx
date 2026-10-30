import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { deleteDuel, getDuel, listThemes, saveDuel } from '../src/db';
import { MAX } from '../src/logic';
import { Btn, Chip, confirm, EmojiGrid, Field, Loader, Page, Row, s, T, useLoad } from '../src/ui';

export default function DuelEdit() {
  const params = useLocalSearchParams<{ id?: string; theme?: string }>();
  const id = Number(params.id) || null;
  const { data: themes, error: loadError } = useLoad(listThemes);
  const [theme, setTheme] = useState(params.theme ?? '');
  const [props, setProps] = useState([{ label: '', emoji: '' }, { label: '', emoji: '' }]);
  const [open, setOpen] = useState(-1); // grille d'emojis ouverte (0 ou 1)
  const [error, setError] = useState('');
  useEffect(() => void (id && getDuel(id).then(d => d && (setTheme(d.theme), setProps([d.a, d.b])))), [id]);
  if (!themes) return <Loader title="Duel" error={loadError} />;
  const set = (i: number, v: Partial<(typeof props)[0]>) => (setError(''), setProps(props.map((p, j) => (j === i ? { ...p, ...v } : p))));
  const save = () => (theme ? saveDuel(id, theme, props[0], props[1]).then(() => router.back(), e => setError(e.message)) : setError('Choisis un thème.'));
  const remove = () => confirm('Supprimer ce duel ?', 'Il ne sera plus proposé. Les réponses déjà données restent dans tes classements.', 'Supprimer',
    () => void deleteDuel(id!).then(() => router.back()));
  return (
    <Page title={id ? 'Modifier le duel' : 'Nouveau duel'}>
      <T kind="h2">Thème</T>
      <Row>{themes.map(t => <Chip key={t.id} label={t.name} on={theme === t.id} onPress={() => (setError(''), setTheme(t.id))} />)}</Row>
      {props.map((p, i) => (
        <View key={i} style={{ gap: 8 }}>
          <T kind="h2">Proposition {i + 1}</T>
          <Field label="Texte (obligatoire)" value={p.label} onChangeText={label => set(i, { label })} maxLength={MAX.label} placeholder={i ? 'Ex. : Chien' : 'Ex. : Chat'} />
          <Pressable accessibilityRole="button" accessibilityLabel={`Choisir l’emoji de la proposition ${i + 1}`} onPress={() => setOpen(open === i ? -1 : i)} style={[s.cell, { alignSelf: 'flex-start', paddingHorizontal: 12 }]}>
            <Text style={s.body}>{p.emoji ? `${p.emoji}  Changer l’emoji` : 'Choisir un emoji (facultatif)'}</Text>
          </Pressable>
          {open === i && <EmojiGrid value={p.emoji} onChange={emoji => (set(i, { emoji }), setOpen(-1))} />}
        </View>
      ))}
      <T kind="muted">Un texte déjà utilisé dans ce thème désigne la même proposition : ses résultats sont regroupés.</T>
      {!!error && <T kind="error">{error}</T>}
      <Btn title="Enregistrer" onPress={save} />
      {id && <Btn kind="danger" title="Supprimer le duel" onPress={remove} />}
    </Page>
  );
}
