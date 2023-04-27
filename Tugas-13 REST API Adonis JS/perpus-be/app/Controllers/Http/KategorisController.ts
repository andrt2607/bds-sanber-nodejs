import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
// import { schema, rules } from "@ioc:Adonis/Core/Validator";
import KategorisCreateValidator from "App/Validators/KategorisCreateValidator";

export default class KategorisController {
  public async create({ request, response }: HttpContextContract) {
    // const newKategoriSchema = schema.create({
    //   name: schema.string([rules.alpha(), rules.minLength(5)]),
    // });

    const payload = await request.validate(KategorisCreateValidator);

    if(!payload){
        return response.badRequest({
            message: "Gagal validasi"
        })
    }

    return response.ok({
      message: "ok masuk",
    });
  }
}
