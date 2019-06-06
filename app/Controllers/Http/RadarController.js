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
  async store ({ request, auth }) {
    const { id } = auth.user
    const data = request.only([
      'name',
      'latitude',
      'longitude'
    ])

    const radar = await Radar.create({ ...data, user_id: id })

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
  async destroy ({ params, response, auth }) {
    const radar = await Radar.findOrFail(params.id)

    if (radar.user_id !== auth.user.id) {
      return response.status(401).send({error: 'Not authorized'})
    }

    await radar.delete()
  }
}

module.exports = RadarController
