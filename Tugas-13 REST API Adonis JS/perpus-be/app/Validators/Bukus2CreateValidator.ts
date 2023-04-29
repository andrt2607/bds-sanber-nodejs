import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Bukus2CreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    judul_buku: schema.string([rules.alpha, rules.minLength(5)]),
    // ringkasan_buku: schema.string([rules.alpha, rules.minLength(5)]),
    // tahun_terbit: schema.date(
    //   // {
    //   //   format: 'yyyy-MM-dd HH:mm:ss',
    //   // },[
    //   //   rules.before(10, 'days'),
    //   // ]
    // ),
    // halaman: schema.number([
    //   rules.range(10,200),
    // ]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    // required: 'Inputan {{ field }} wajib diisi',
    // 'judul_buku.alpha' : 'judul harus alfabet',
    // 'date.format': '{{ field }} harus dengan format {{ options.format }}',
    // 'halaman.range': 'Jumlah halaman harus pada range {{ options.start }} dan {{ options.stop }} halaman',
  }
}