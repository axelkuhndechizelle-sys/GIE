import { useState } from 'react';
import Constants from 'expo-constants';
import { clearAll, clearHistory } from '../src/db';
import { LEGAL } from '../src/legal';
import { Btn, confirm, Page, T } from '../src/ui';

export default function Settings() {
  const [done, setDone] = useState('');
  const run = (title: string, msg: string, fn: () => Promise<void>, ok: string) =>
    confirm(title, msg, 'Effacer', () => void fn().then(() => setDone(ok), e => setDone(`Échec : ${e.message}`)));
  return (
    <Page title="Paramètres">
      {LEGAL.map(([title, text]) => (
        <T key={title} kind="body">
          <T kind="h2">{title}{'\n'}</T>
          {text}
        </T>
      ))}
      <T kind="h2">Effacer mes données</T>
      <Btn kind="secondary" title="Effacer l’historique" onPress={() => run('Effacer l’historique ?', 'Toutes tes sessions, réponses et classements seront supprimés. Tes thèmes et duels sont conservés.', clearHistory, 'Historique effacé.')} />
      <Btn kind="danger" title="Effacer toutes mes données" onPress={() => run('Effacer toutes tes données ?', 'Tes thèmes, duels, sessions et classements seront supprimés. Seul le contenu prédéfini sera conservé.', clearAll, 'Toutes tes données ont été effacées.')} />
      {!!done && <T kind="muted">{done}</T>}
      <T kind="muted">Version {Constants.expoConfig?.version}</T>
    </Page>
  );
}
