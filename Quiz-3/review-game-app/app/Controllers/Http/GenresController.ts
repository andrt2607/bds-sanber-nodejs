import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Database from "@ioc:Adonis/Lucid/Database";
import GenreValidator from "App/Validators/GenreValidator";

export default class GenresController {
  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(GenreValidator);

    const newGenre = await Database.insertQuery().insert(payload);

    if (!payload) {
      return response.badRequest({
        message: "gagal tambah data genre",
      });
    }

    return response.ok({
      message: "berhasil tambah data genre",
      data: newGenre,
    });
  }

  public async index({ response }: HttpContextContract) {
    const resultGet = await Database.from("genres").select("*");

    if (!resultGet) {
      return response.notFound({
        message: "data genre tidak ditemukan",
      });
    }

    return response.ok({
      message: "data genre ditemukan",
      data: resultGet,
    });
  }

  public async show({ response, params }: HttpContextContract) {
    const resultGet = await Database.from("genres")
      .where("id", params.id)
      .select("*");

    if (!resultGet) {
      return response.notFound({
        message: `data genre id ${params.id} tidak ditemukan`,
      });
    }

    return response.ok({
      message: `data genreid ${params.id} ditemukan`,
      data: resultGet,
    });
  }

  public async update({ request, response, params }: HttpContextContract) {
    const payload = await request.validate(GenreValidator);

    const result = await Database.from("genres")
      .where("id", params.id)
      .update(payload);

    const newResult = await Database.from("genres").where("id", result).first();

    if (!result) {
      return response.badRequest({
        message: `data genres id ${params.id} tidak ditemukan`,
      });
    }

    return response.ok({
      message: `data genres id ${params.id} berhasil diupdate`,
      data: newResult,
    });
  }

  public async destroy({response, params} : HttpContextContract){
    const result = await Database
    .from('genres')
    .where('id', params.id)
    .delete()

    if (!result) {
      return response.badRequest({
        message: `Gagal delete genres id ${params.id}`,
      });
    }

    return response.ok({
      message: `data genres id ${params.id} berhasil dihapus`,
    });
  }
}
