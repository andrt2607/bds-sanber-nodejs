import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import BukusCreateValidator from "App/Validators/BukusCreateValidator";
import Database from "@ioc:Adonis/Lucid/Database";

export default class BukusController {
  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(BukusCreateValidator);

    const newBuku = await Database.insertQuery() // 👈 gives an instance of insert query builder
      .table("bukus")
      .insert(payload);

    if (!newBuku) {
      return response.badRequest({
        message: "Gagal tambah buku",
      });
    }

    return response.ok({
      message: "Tambah buku berhasil",
    });
  }

  public async index({ response }: HttpContextContract) {
    const result = await Database.from("bukus") // 👈 gives an instance of select query builder
      .select("*");

    if (!result) {
      return response.badRequest({
        message: "data bukus tidak ditemukan",
      });
    }

    return response.ok({
      message: "data kategbukusoris ditemukan",
      data: result,
    });
  }

  public async show({ response, params }: HttpContextContract) {
    const result = await Database.from("bukus").where("id", params.id); // 👈 gives an instance of select query builder

    if (!result) {
      return response.badRequest({
        message: `data bukus id ${params.id} tidak ditemukan`,
      });
    }

    return response.ok({
      message: `data bukus id ${params.id} ditemukan`,
      data: result,
    });
  }

  public async update({ request, response, params }: HttpContextContract) {
    // try {
    const payload = await request.validate(BukusCreateValidator);

    const result = await Database.from("bukus")
      .where("id", params.id)
      .update(payload);

    const newResult = await Database.from("bukus")
      .where("id", result)
      .first();

    if (!result) {
      return response.badRequest({
        message: `data bukus id ${params.id} tidak ditemukan`,
      });
    }

    return response.ok({
      message: `data bukus id ${params.id} berhasil diupdate`,
      data: newResult,
    });

    // } catch (error) {
    //   return response.serviceUnavailable({
    //     error: error.message
    //   })
    // }
  }

  public async destroy({ response, params }: HttpContextContract) {
    const result = await Database.from("bukus")
      .where("id", params.id)
      .delete();

    if (!result) {
      return response.badRequest({
        message: `Gagal delete bukus id ${params.id}`,
      });
    }

    return response.ok({
      message: `data bukus id ${params.id} berhasil dihapus`,
    });
  }
}
