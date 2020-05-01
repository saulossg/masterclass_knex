// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: "../src/database/mydb.db"
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/database/seeds`
    }
  },
};
