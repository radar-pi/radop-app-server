'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MaintenanceSchema extends Schema {
  up () {
    this.create('maintenances', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('date').notNullable()
      table.time('time').notNullable()
      table.text('reason').notNullable()
      table.decimal('latitude', 9, 6).notNullable()
      table.decimal('longitude', 9, 6).notNullable()
      table.string('radar').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('maintenances')
  }
}

module.exports = MaintenanceSchema
