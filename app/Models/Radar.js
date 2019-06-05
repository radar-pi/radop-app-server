'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

const Database = use('Database')

class Radar extends Model {
  user () {
    return this.belongsTo('App/Model/User')
  }

  maintenances () {
    return this.hasMany('App/Models/Maintenance')
  }

  static scopeNearBy (query, latitude, longitude, distance) {
    const haversine = `(6371 * acos(cos(radians(${latitude}))
      * cos(radians(latitude))
      * cos(radians(longitude)
      - radians(${longitude}))
      + sin(radians(${latitude}))
      * sin(radians(latitude))))`       

    return query
      .select('*', Database.raw(`${haversine} as distance`))
      .whereRaw(`${haversine} < ${distance}`)
  }
}

module.exports = Radar
