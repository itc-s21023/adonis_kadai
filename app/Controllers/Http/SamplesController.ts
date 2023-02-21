import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import session from "Config/session";

export default class ReportsController {
  public async index({view}: HttpContextContract) {
    const data = {
      title: 'Sample',
      message: 'メッセージを送信',
    }
    return view.render('Samples/index', data)
  }
}
