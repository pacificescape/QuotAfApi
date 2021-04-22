const fs = require('fs/promises')
const { resolve } = require('path')
const { ungzip } = require('node-gzip')
const config = require('../config.json')
const { Component } = require('../database')

const {
  either,
  complete,
  getSettings,
  prepareText,
  prepareLines,
  generateLayers,
  generateBackground,
  presets
} = require('../logic')

class StickerService {
  types = Object.keys(presets)

  /**
   * @param {String} query.message Message
   * @param {String} query.type Type
   * @param {String} query.charAnimationType CharAnimationType
   * @param {String} query.typeAnimation TypeAnimation
   * @returns Sticker
   */

  async create (query) {
    const data = either(query)
      .chain(getSettings)
      .chain(prepareText)
      .chain(prepareLines)
      .chain(generateLayers)
      .chain(generateBackground)
      .export()

    return await complete(data)
  }

  async saveComponent (type) {
    if (this.types.includes(type)) return

    const path = resolve(config.path.components, `${type}.json`)

    if (await this._isStored(path)) return

    const component = await Component.findOne({ file_unique_id: type })
    if (component) {
      // todo: migrate
      let data = await ungzip(component.assets)
      data = data instanceof Buffer ? JSON.parse(data) : data

      await this.save(
        type,
        data.json && data.options
          ? data
          : JSON.stringify({ json: data, options: component.options ? component.options : { rotate: 1 } })
      )
    }
  }

  async save (type, assets) {
    const path = resolve(config.path.components, `${type}.json`)
    await fs.writeFile(path, assets)
  }

  async _isStored (path) {
    return await fs.stat(path)
      .then(() => true)
      .catch(() => false)
  }
}

module.exports = new StickerService()
