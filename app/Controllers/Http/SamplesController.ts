import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SamplesController {
  public async index(ctx: HttpContextContract) {
    const data = {
      title: 'Sample',
      message: 'お名前。'
    }
    return ctx.view.render('samples/index', data)
  }

  public async index_posted(ctx: HttpContextContract) {
    const msg = ctx.request.input('msg')
    const data = {
      title: 'Sample',
      message: 'こんにちは、' + msg + 'さん！'
    }
    return ctx.view.render('samples/index', data)
  }
}
