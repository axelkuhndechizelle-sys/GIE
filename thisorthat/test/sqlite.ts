// Adaptateur de test : expose l'API d'expo-sqlite utilisée par src/db.ts au-dessus du SQLite intégré à Node (node:sqlite).
import type { DB } from '../src/db';

export function open(path = ':memory:') {
  const { DatabaseSync } = (process as any).getBuiltinModule('node:sqlite');
  const d = new DatabaseSync(path);
  const q = (sql: string, p: unknown[]) => d.prepare(sql) as { run: Function; all: Function; get: Function };
  const db = {
    execAsync: async (sql: string) => void d.exec(sql),
    runAsync: async (sql: string, ...p: unknown[]) => {
      const r = q(sql, p).run(...p);
      return { changes: Number(r.changes), lastInsertRowId: Number(r.lastInsertRowid) };
    },
    getAllAsync: async (sql: string, ...p: unknown[]) => q(sql, p).all(...p),
    getFirstAsync: async (sql: string, ...p: unknown[]) => q(sql, p).get(...p) ?? null,
    withTransactionAsync: async (task: () => Promise<void>) => {
      d.exec('BEGIN');
      try { await task(); d.exec('COMMIT'); } catch (e) { d.exec('ROLLBACK'); throw e; }
    },
  };
  return { db: db as unknown as DB, close: () => d.close() };
}
