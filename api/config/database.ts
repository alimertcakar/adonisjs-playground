/**
 * Config source: https://git.io/JesV9
 *
 * Feel free to let us know via PR, if you find something broken in this config
 * file.
 */

import Env from '@ioc:Adonis/Core/Env';
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database';

const databaseConfig: DatabaseConfig = {
  /*
  |--------------------------------------------------------------------------
  | Connection
  |--------------------------------------------------------------------------
  |
  | The primary connection for making database queries across the application
  | You can use any key from the `connections` object defined in this same
  | file.
  |
  */
  connection: Env.get('DB_CONNECTION', 'pg'),

  connections: {
    /*
    |--------------------------------------------------------------------------
    | PostgreSQL config
    |--------------------------------------------------------------------------
    |
    | Configuration for PostgreSQL database. Make sure to install the driver
    | from npm when using this connection
    |
    | npm i pg
    |
    */
    pg: {
      client: 'pg',
      connection: {
        host: Env.get('PG_HOST', 'database'), // localhost for localhost dev,  service name "database" as in docker-compose for working with docker
        port: Env.get('PG_PORT', 5432),
        user: Env.get('PG_USER', 'user'),
        password: Env.get('PG_PASSWORD', 'pass'),
        database: Env.get('PG_DB_NAME', 'adonis'),
      },
      migrations: {
        naturalSort: true,
      },
      healthCheck: false,
      debug: false,
      pool: {
        min: 2,
        max: 20,
      },
    },
  },
};

export default databaseConfig;
