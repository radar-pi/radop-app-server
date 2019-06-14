'use strict'

/*
|--------------------------------------------------------------------------
| StatusSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')

class StatusSeeder {
  async run () {
    const uuid = require('uuid/v4')
    const WebSocket = require('ws')

    const url = 'ws://www.radop.ml:8765/get_all'
    const socket = new WebSocket(url)

    socket.onopen = () => {
      const type = 'rethink-manager-call'
      const time = new Date().toISOString()
      const database = 'RADAR'
      const table = 'status'
      const identifier = uuid()

      const message = {
        'id': identifier,
        'type': type,
        'payload': {
          'database': database,
          'table': table,
        },
        'time': time
      }

      socket.send(JSON.stringify(message))
    }
    
    socket.onmessage = async (result) => {
      try {
        const statuses = JSON.parse(result.data)
        for (var i in statuses.response_message) {
          const now = new Date().toISOString()
          const date = statuses.response_message[i].payload.time.slice(0, 10)
          const time = statuses.response_message[i].payload.time.slice(11, 19)
          await Database.table('statuses').insert([{
            radar_id: statuses.response_message[i].payload.radar_id,
            date: date,
            time: time,
            camera: statuses.response_message[i].payload.camera,
            radar: statuses.response_message[i].payload.radar,
            rasp: statuses.response_message[i].payload.rasp,
            usrp: statuses.response_message[i].payload.usrp,
            created_at: now,
            updated_at: now
          }])
        }
        socket.close()
      } catch (error) {
        error
        socket.close()
      }
    }
  }
}

module.exports = StatusSeeder
