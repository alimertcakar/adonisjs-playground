import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import User from 'App/Models/User';

export default class UserSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'user seed';

    await User.updateOrCreate(uniqueKey, {
      fullname: 'Ali Mert Çakar',
      username: 'alimert',
      password: '1234',
    });
  }
}
