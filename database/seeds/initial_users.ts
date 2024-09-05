import knex, { Knex } from 'knex';

exports.seed = async function (knex: Knex) {
  try {
    await knex('users').del();
    return await knex('users').insert([
      { name: 'John Doe', email: 'john@example.com' },
      { name: 'Jane Doe', email: 'jane@example.com' },
      { name: 'Murtaja Ahmed', email: 'murtaja@example.com' },
      { name: 'Ahmed Noyeem', email: 'ahmed@example.com' },
      { name: 'Noyeem Murtaja', email: 'noyeem@example.com' },
      { name: 'Nomi Ahmed', email: 'nomi@example.com' },
      { name: 'Shuvro Ahmed', email: 'shuvro@example.com' },
      { name: 'Nomist Aja', email: 'nomist@example.com' },
      { name: 'Demo User', email: 'demo@example.com' },
      { name: 'Test User', email: 'test@example.com' },
    ]);
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};
