import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'requests'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('status')
      table.integer('userId')
      table.integer('eventId')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
