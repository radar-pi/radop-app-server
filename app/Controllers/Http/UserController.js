'use strict'

const User = use('App/Models/User')

class UserController {
  async index () {
    const users = User.all()

    return users
  }

  async find({request}) {
    const { email } = request.all()
    const user = await User
      .query()
      .where('email', '=', email)
      .fetch()
    
    return user
  }

  async create ({request}) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
