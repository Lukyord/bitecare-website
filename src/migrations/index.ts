import * as migration_20241226_062605_migration from './20241226_062605_migration';

export const migrations = [
  {
    up: migration_20241226_062605_migration.up,
    down: migration_20241226_062605_migration.down,
    name: '20241226_062605_migration'
  },
];
