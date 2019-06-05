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
      table.date('date').notNullable()
      table.time('time').notNullable()
      table.text('reason').notNullable()
      table
        .integer('radar_id')
        .unsigned()
        .references('id')
        .inTable('radars')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('maintenances')
  }
}

module.exports = MaintenanceSchema
