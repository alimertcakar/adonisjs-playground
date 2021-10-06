// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';
import Database from '@ioc:Adonis/Lucid/Database';

export default class UsersController {
  public async index() {
    const userList = await User.all();
    return { selam: userList };
  }

  public async addUser() {
    const user = new User();
    user.fullname = 'Ali Mert Çakar';
    await user.save();

    return { ok: true };
  }
}
