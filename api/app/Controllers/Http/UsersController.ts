// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ request, response }) {
    const user = new User()

    // Assign username and email
    user.username = 'virk'
    user.email = 'virk@adonisjs.com'

    // Insert to the database
    await user.save()

    console.log(user.$isPersisted) // true
    return { selam: 'dünya' }
  }
}
