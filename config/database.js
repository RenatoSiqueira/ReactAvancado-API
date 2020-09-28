const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL)

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: config.host || '127.0.0.1',
        port: config.port || 5432,
        database: config.database || 'postgres',
        username: config.user || 'postgres',
        password: config.password || 'docker',
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
