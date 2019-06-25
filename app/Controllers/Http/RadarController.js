'use strict'

const Radar = use('App/Models/Radar')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with radars
 */
class RadarController {
  /**
   * Show a list of all radars.
   * GET radars
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request }) {
    const { latitude, longitude } = request.all()

    const radars = Radar.query()
      .nearBy(latitude, longitude, 20)
      .fetch()

    return radars
  }

  /**
   * Create/save a new radar.
   * POST radars
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    const data = request.only([
      'name',
      'latitude',
      'longitude',
      'user_id'
    ])

    const radar = await Radar.create({ ...data })

    return radar
  }

  /**
   * Display a single radar.
   * GET radars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const radar = await Radar.findOrFail(params.id)

    return radar
  }

  /**
   * Update radar details.
   * PUT or PATCH radars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request }) {
    const radar = await Radar.findOrFail(params.id)

    const data = request.only([
      'name',
      'latitude',
      'longitude',
    ])

    radar.merge(data)

    await radar.save()

    return radar
  }

  /**
   * Delete a radar with id.
   * DELETE radars/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params }) {
    const radar = await Radar.findOrFail(params.id)

    await radar.delete()
  }
}

module.exports = RadarController
