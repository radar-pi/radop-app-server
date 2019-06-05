'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

const Hash = use('Hash')

class UserSeeder {
  async run () {
    const encryptedPassword = await Hash.make('123456')

    const now = new Date().toISOString()

    await Database.table('users').insert([
      {
        username: 'mantenedor',
        email: 'mantenedor@email.com',
        password: encryptedPassword,
        created_at: now,
        updated_at: now
      },
      {
        username: 'admin',
        email: 'admin@email.com',
        password: encryptedPassword,
        created_at: now,
        updated_at: now
      },
      {
        username: 'funcionario',
        email: 'funcionario@email.com',
        password: encryptedPassword,
        created_at: now,
        updated_at: now
      },
    ])
  }
}

module.exports = UserSeeder
