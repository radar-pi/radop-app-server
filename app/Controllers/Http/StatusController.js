'use strict'

const Status = use('App/Models/Status')
const Database = use ('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with statuses
 */
class StatusController {
  /**
   * Show a list of all statuses.
   * GET radars/statuses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const statuses = Status.all()

    return statuses
  }

  /**
   * Create/save a new Status.
   * POST radars/statuses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only([
      'date',
      'time',
      'camera',
      'radar',
      'rasp',
      'usrp',
      'radar_id'
    ])

    const status = await Status.create({ ...data })

    return status
  }

  /**
   * Display a single Status.
   * GET radars/statuses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const status = await Status.findOrFail(params.id)

    return status
  }

  /**
   * Update Status details.
   * PUT or PATCH radars/statuses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const status = await Status.findOrFail(params.id)

    const data = request.only([
      'date',
      'time',
      'camera',
      'radar',
      'rasp',
      'usrp'
    ])

    status.merge(data)

    await status.save()

    return status
  }

  /**
   * Delete a Status with id.
   * DELETE radars/statuses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const status = await Status.findOrFail(params.id)

    await status.delete()
  }

  /**
   * Display a single Status.
   * GET radar/:id/statuses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async info ({ params }) {
    const radar_id = params.id
    const infos = await Database
      .table('statuses')
      .where('radar_id', radar_id)
      .orderBy('date', 'desc')
      .orderBy('time', 'desc')
      .limit(10)

    return infos
  }
}

module.exports = StatusController
