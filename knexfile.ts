import * as dotenv from 'dotenv';
dotenv.config();

const connection = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME
};
const knexConfig = {
  development: {
    client: 'mysql2',
    connection: connection,
    migrations: {
      tableName: 'migrations',
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};
export default knexConfig;
