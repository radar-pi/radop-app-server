'use strict'

const Maintenance = use('App/Models/Maintenance')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with maintenances
 */
class MaintenanceController {
  /**
   * Show a list of all maintenances.
   * GET maintenances
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const maintenances = Maintenance.all()

    return maintenances
  }

  /**
   * Create/save a new maintenance.
   * POST maintenances
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request }) {
    const { id } = auth.user
    const data = request.only([
      'date',
      'time',
      'reason',
      'latitude',
      'longitude',
      'radar_id'
    ])

    const maintenance = await Maintenance.create({ ...data, user_id: id })

    return maintenance
  }

  /**
   * Display a single maintenance.
   * GET maintenances/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const maintenance = await Maintenance.findOrFail(params.id)

    return maintenance
  }

  /**
   * Update maintenance details.
   * PUT or PATCH maintenances/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const maintenance = await Maintenance.findOrFail(params.id)

    const data = request.only([
      'date',
      'time',
      'reason',
    ])

    maintenance.merge(data)

    await maintenance.save()

    return maintenance
  }

  /**
   * Delete a maintenance with id.
   * DELETE maintenances/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ auth, params, response }) {
    const maintenance = await Maintenance.findOrFail(params.id)

    if (maintenance.user_id !== auth.user.id) {
      return response.status(401).send({error: 'Not authorized'})
    }

    await maintenance.delete()
  }
}

module.exports = MaintenanceController
