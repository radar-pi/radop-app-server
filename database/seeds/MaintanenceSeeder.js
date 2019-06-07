'use strict'

/*
|--------------------------------------------------------------------------
| MaintanenceSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')
class MaintanenceSeeder {
  async run () {
    function randomDate (start, end) {
      const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString('pt-BR')
      return date
    }

    function randomTime (start, end) {
      const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleTimeString()
      return date
    }

    const now = new Date().toISOString()

    await Database.table('maintenances').insert([
      {
        user_id: 1,
        date: randomDate(new Date(2019, 1, 1), new Date()),
        time: randomTime(new Date(2019, 1, 1), new Date()),
        reason: 'Manutenção de rotina',
        radar_id: 1,
        created_at: now,
        updated_at: now
      },
      {
        user_id: 2,
        date: randomDate(new Date(2019, 1, 1), new Date()),
        time: randomTime(new Date(2019, 1, 1), new Date()),
        reason: 'Manutenção de rotina',
        radar_id: 2,
        created_at: now,
        updated_at: now
      },
      {
        user_id: 3,
        date: randomDate(new Date(2019, 1, 1), new Date()),
        time: randomTime(new Date(2019, 1, 1), new Date()),
        reason: 'Manutenção de rotina',
        radar_id: 3,
        created_at: now,
        updated_at: now
      },
      {
        user_id: 1,
        date: randomDate(new Date(2019, 1, 1), new Date()),
        time: randomTime(new Date(2019, 1, 1), new Date()),
        reason: 'Manutenção de rotina',
        radar_id: 4,
        created_at: now,
        updated_at: now
      },
      {
        user_id: 1,
        date: randomDate(new Date(2019, 1, 1), new Date()),
        time: randomTime(new Date(2019, 1, 1), new Date()),
        reason: 'Manutenção de rotina',
        radar_id: 5,
        created_at: now,
        updated_at: now
      },
      {
        user_id: 2,
        date: randomDate(new Date(2019, 1, 1), new Date()),
        time: randomTime(new Date(2019, 1, 1), new Date()),
        reason: 'Manutenção de rotina',
        radar_id: 1,
        created_at: now,
        updated_at: now
      },
      {
        user_id: 2,
        date: randomDate(new Date(2019, 1, 1), new Date()),
        time: randomTime(new Date(2019, 1, 1), new Date()),
        reason: 'Manutenção de rotina',
        radar_id: 2,
        created_at: now,
        updated_at: now
      },
      {
        user_id: 3,
        date: randomDate(new Date(2019, 1, 1), new Date()),
        time: randomTime(new Date(2019, 1, 1), new Date()),
        reason: 'Manutenção de rotina',
        radar_id: 3,
        created_at: now,
        updated_at: now
      }
    ])
  }
}

module.exports = MaintanenceSeeder
