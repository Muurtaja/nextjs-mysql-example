import * as dotenv from 'dotenv';
dotenv.config();

console.log(process.env.MYSQL_HOST);
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
      directory: './pages/database/migrations'
    },
    seeds: {
      directory: './pages/database/seeds'
    }
  }
};
export default knexConfig;
