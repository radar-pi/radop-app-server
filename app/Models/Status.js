'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Status extends Model {
  radar () {
    return this.belongsTo('App/Model/Radar')
  }
}

module.exports = Status
