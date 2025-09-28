// inicializar db
export async function initializeDatabase(db) {
    await db.execAsync(`
            CREATE TABLE IF NOT EXISTS patients(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL
            );
        `);

  await db.execAsync(`ALTER TABLE patients ADD COLUMN address TEXT;`).catch(() => {});
  await db.execAsync(`ALTER TABLE patients ADD COLUMN phone TEXT;`).catch(() => {});
  await db.execAsync(`ALTER TABLE patients ADD COLUMN birthdate TEXT;`).catch(() => {});
}
