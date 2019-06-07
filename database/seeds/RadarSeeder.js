'use strict'

/*
|--------------------------------------------------------------------------
| RadarSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class RadarSeeder {
  async run () {
    const now = new Date().toISOString()

    await Database.table('radars').insert([
      {
        user_id: 1,
        name: 'Radar FGA X',
        latitude: -15.9893124,
        longitude: -48.0451505,
        created_at: now,
        updated_at: now
      },
      {
        user_id: 1,
        name: 'Radar FGA Y',
        latitude: -15.9896282,
        longitude: -48.0456347,
        created_at: now,
        updated_at: now
      },
      {
        user_id: 2,
        name: 'Radar Palácio do Planalto',
        latitude: -15.7990437,
        longitude: -47.8629629,
        created_at: now,
        updated_at: now
      },
      {
        user_id: 3,
        name: 'Radar Terminal BRT',
        latitude: -15.9912653,
        longitude: -48.049781,
        created_at: now,
        updated_at: now
      },
      {
        user_id: 3,
        name: 'Radar IFG Gama',
        latitude: -15.992957,
        longitude: -48.0484954,
        created_at: now,
        updated_at: now
      }
    ])
  }
}

module.exports = RadarSeeder
