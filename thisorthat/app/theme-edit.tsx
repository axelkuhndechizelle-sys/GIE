import { useEffect, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { getTheme, saveTheme } from '../src/db';
import { MAX } from '../src/logic';
import { Btn, Field, Page, T } from '../src/ui';

export default function ThemeEdit() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [error, setError] = useState('');
  useEffect(() => void (id && getTheme(id).then(t => t && (setName(t.name), setDesc(t.description)))), [id]);
  const save = () => saveTheme(id ?? null, name, desc).then(nid => (id ? router.back() : router.replace(`/theme?id=${nid}`)), e => setError(e.message));
  return (
    <Page title={id ? 'Modifier le thème' : 'Nouveau thème'}>
      <Field label="Nom (obligatoire)" value={name} onChangeText={v => (setError(''), setName(v))} maxLength={MAX.name} placeholder="Ex. : Musique" />
      <Field label="Description (facultative)" value={desc} onChangeText={setDesc} maxLength={MAX.desc} multiline />
      {!!error && <T kind="error">{error}</T>}
      <Btn title="Enregistrer" onPress={save} />
    </Page>
  );
}
