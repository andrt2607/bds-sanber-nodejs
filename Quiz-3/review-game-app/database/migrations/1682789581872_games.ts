import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'games'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title')
      table.text('gameplay')
      table.datetime('release_date')
      table.integer('genres_id')
      .references('genres.id')
      .onDelete('CASCADE')
      table.timestamps(true,true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
