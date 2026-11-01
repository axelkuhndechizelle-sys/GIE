import { Stack } from 'expo-router';
import { SQLiteProvider } from 'expo-sqlite';
import { Text } from 'react-native';
import { useState } from 'react';
import { init } from '../src/db';
import { C, s } from '../src/ui';

export default function Layout() {
  const [error, setError] = useState('');
  if (error) return <Text style={[s.error, { padding: 24 }]}>Impossible d’ouvrir les données de l’appli : {error}</Text>;
  return (
    <SQLiteProvider databaseName="thisorthat.db" onInit={init} onError={e => setError(e.message)}>
      <Stack screenOptions={{ headerStyle: { backgroundColor: C.card }, headerTintColor: C.text, headerBackTitle: 'Retour', contentStyle: { backgroundColor: C.bg } }} />
    </SQLiteProvider>
  );
}
