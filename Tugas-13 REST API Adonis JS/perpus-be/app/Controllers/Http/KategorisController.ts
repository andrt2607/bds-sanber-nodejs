import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
// import { schema, rules } from "@ioc:Adonis/Core/Validator";
import KategorisCreateValidator from "App/Validators/KategorisCreateValidator";
import Database from "@ioc:Adonis/Lucid/Database";

export default class KategorisController {
  public async store({ request, response }: HttpContextContract) {
    // const newKategoriSchema = schema.create({
    //   name: schema.string([rules.alpha(), rules.minLength(5)]),
    // });

    const payload = await request.validate(KategorisCreateValidator);

    const newKategori = await Database.insertQuery() // 👈 gives an instance of insert query builder
      .table("kategorises")
      .insert(payload);

    if (!newKategori) {
      return response.badRequest({
        message: "Gagal tambah kategoris",
      });
    }

    return response.ok({
      message: "Berhasil tambah kategoris",
    });
  }

  public async index({ response }: HttpContextContract) {
    const result = await Database.from("kategorises") // 👈 gives an instance of select query builder
      .select("*");

    if (!result) {
      return response.badRequest({
        message: "data kategoris tidak ditemukan",
      });
    }

    return response.ok({
      message: "data kategoris ditemukan",
      data: result,
    });
  }

  public async show({response, params}: HttpContextContract){
    const result = await Database.from("kategorises").where('id', params.id) // 👈 gives an instance of select query builder
    
    if (!result) {
      return response.badRequest({
        message: `data kategoris id ${params.id} tidak ditemukan`,
      });
    }

    return response.ok({
      message: `data kategoris id ${params.id} ditemukan`,
      data: result,
    });
  }

  public async update({request, response, params} : HttpContextContract){
    // try {
      const payload = await request.validate(KategorisCreateValidator);

      const result = await Database
      .from('kategorises')
      .where('id', params.id)
      .update(payload)

      const newResult = await Database
      .from('kategorises')
      .where('id', result)
      .first()

      if (!result) {
        return response.badRequest({
          message: `data kategoris id ${params.id} tidak ditemukan`,
        });
      }
  
      return response.ok({
        message: `data kategoris id ${params.id} berhasil diupdate`,
        data: newResult
      });

    // } catch (error) {
    //   return response.serviceUnavailable({
    //     error: error.message
    //   })
    // }
  }

  public async destroy({response, params} : HttpContextContract){
    const result = await Database
    .from('kategorises')
    .where('id', params.id)
    .delete()

    if (!result) {
      return response.badRequest({
        message: `Gagal delete kategori id ${params.id}`,
      });
    }

    return response.ok({
      message: `data kategoris id ${params.id} berhasil dihapus`,
    });
  }
}
