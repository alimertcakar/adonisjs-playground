import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class UserAccount extends BaseSchema {
  protected tableName = 'user_account';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('username');
      table.string('password');
      table.string('fullname');
      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
