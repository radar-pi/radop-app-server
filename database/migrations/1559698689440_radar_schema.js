'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RadarSchema extends Schema {
  up () {
    this.create('radars', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE').notNullable()
      table.string('name', 200).notNullable().unique()
      table.decimal('latitude', 9, 6).notNullable()
      table.decimal('longitude', 9, 6).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('radars')
  }
}

module.exports = RadarSchema
