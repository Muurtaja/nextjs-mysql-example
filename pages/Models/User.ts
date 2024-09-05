import { Model } from "objection";
import knexConfig from "../../knexfile";
import knex, { Knex } from "knex";

if (typeof window === 'undefined') {
  const knexInstance: Knex = knex(knexConfig.development);
  Model.knex(knexInstance);
}

class User extends Model {
  static get tableName() {
    return 'users';
  }
}

export default User;