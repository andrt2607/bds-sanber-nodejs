import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BukusCreateValidator from 'App/Validators/BukusCreateValidator';


export default class BukusController {
    public async create({ request, response } : HttpContextContract){
        const payload = await request.validate(BukusCreateValidator);

        if(!payload){
            return response.badRequest({
                message: 'Gagal validasi buku'
            })
        }

        return response.ok({
            message: 'Tambah buku berhasil'
        })
    }
}
