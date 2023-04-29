import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'bukus'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('title')
      table.string('judul_buku')
      table.string('ringkasan_buku')
      table.string('tahun_terbit')
      table.integer('halaman')
      table.integer('kategorises_id')
      .unsigned()
      .references('kategorises.id')
      .onDelete('CASCADE')
      table.timestamps(true, true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
