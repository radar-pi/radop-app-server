'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/users', 'UserController.create')

Route.get('/users/all', 'UserController.index')

Route.post('/sessions', 'SessionController.create')

Route.resource('maintenances', 'MaintenanceController')
  .apiOnly()
  .middleware('auth')

Route.resource('radars', 'RadarController')
  .apiOnly()
  .middleware('auth')

Route.get('radars/info/:id', 'RadarController.info')
  .middleware('auth')