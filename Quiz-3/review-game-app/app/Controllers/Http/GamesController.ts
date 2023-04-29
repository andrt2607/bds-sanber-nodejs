import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from "@ioc:Adonis/Lucid/Database";
import GameValidator from "App/Validators/GameValidator";

export default class GamesController {
    public async store({ request, response }: HttpContextContract) {
        const payload = await request.validate(GameValidator);
    
        const newGenre = await Database.insertQuery().insert(payload);
    
        if (!payload) {
          return response.badRequest({
            message: "gagal tambah data games",
          });
        }
    
        return response.ok({
          message: "berhasil tambah data games",
          data: newGenre,
        });
      }
    
      public async index({ response }: HttpContextContract) {
        const resultGet = await Database.from("games").select("*");
    
        if (!resultGet) {
          return response.notFound({
            message: "data games tidak ditemukan",
          });
        }
    
        return response.ok({
          message: "data games ditemukan",
          data: resultGet,
        });
      }
    
      public async show({ response, params }: HttpContextContract) {
        const resultGet = await Database.from("games")
          .where("id", params.id)
          .select("*");
    
        if (!resultGet) {
          return response.notFound({
            message: `data games id ${params.id} tidak ditemukan`,
          });
        }
    
        return response.ok({
          message: `data games ${params.id} ditemukan`,
          data: resultGet,
        });
      }
    
      public async update({ request, response, params }: HttpContextContract) {
        const payload = await request.validate(GameValidator);
    
        const result = await Database.from("games")
          .where("id", params.id)
          .update(payload);
    
        const newResult = await Database.from("games").where("id", result).first();
    
        if (!result) {
          return response.badRequest({
            message: `data games id ${params.id} tidak ditemukan`,
          });
        }
    
        return response.ok({
          message: `data games id ${params.id} berhasil diupdate`,
          data: newResult,
        });
      }
    
      public async destroy({response, params} : HttpContextContract){
        const result = await Database
        .from('games')
        .where('id', params.id)
        .delete()
    
        if (!result) {
          return response.badRequest({
            message: `Gagal delete games id ${params.id}`,
          });
        }
    
        return response.ok({
          message: `data games id ${params.id} berhasil dihapus`,
        });
      }
}
