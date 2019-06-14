'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatusSchema extends Schema {
  up () {
    this.create('statuses', (table) => {
      table.increments()
      table
        .integer('radar_id')
        .unsigned()
        .references('id')
        .inTable('radars')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.date('date').notNullable()
      table.time('time').notNullable()
      table.boolean('camera').notNullable()
      table.boolean('radar').notNullable()
      table.boolean('rasp').notNullable()
      table.boolean('usrp').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('statuses')
  }
}

module.exports = StatusSchema
