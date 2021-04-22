const Sticker = require('../services/StickerService')
const getRandomText = require('../helpers/getRandomText')

class GenerationController {
  async sticker (ctx) {
    try {
      ctx.assert(ctx.request.body, 404, 'DATA_INVALID')
      const { type } = ctx.request.body

      await Sticker.saveComponent(type)

      ctx.result = await Sticker.create(ctx.request.body)
    } catch (error) {
      console.log(error)
    }
  }

  async component (ctx) {
    try {
      const { id, assets } = ctx.request.body
      ctx.assert(id && assets, 404, 'DATA_INVALID')

      await Sticker.save(id, JSON.stringify(assets))

      ctx.result = await Sticker.create({
        message: getRandomText(),
        type: id,
        charAnimationType: 'defaultAnimation',
        typeAnimation: 'sharkDefaultAnimation'
      })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new GenerationController()
