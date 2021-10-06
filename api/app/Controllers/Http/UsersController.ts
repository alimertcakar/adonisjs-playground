// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import Database from '@ioc:Adonis/Lucid/Database';

export default class UsersController {
  public async index() {
    // const user = new User()

    // // Assign username and email
    // user.username = 'virk'
    // user.email = 'virk@adonisjs.com'

    // // Insert to the database
    // await user.save()

    // console.log(user.$isPersisted) // true

    const userList = await User.all();

    return { selam: userList };
  }
}
