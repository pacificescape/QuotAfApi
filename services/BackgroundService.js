const fs = require('fs')
const { resolve } = require('path')
const debug = require('debug')('background.js')
const LRU = require('lru-cache')
const {
  waves,
  shark,
  popCatBG,
  telegramBG,
  menheraCry,
  emptyLayer,
  keyboardBG,
  simpleCloud,
  rollingCatBG,
  menherachanOkBG,
  menherachanPlateBG,
  simpleCloudAnimations
} = require('../assets/backgrounds')

const cache = new LRU({ maxAge: 1000 * 60 * 10 })

class BackgroundService {
  type (type) {
    debug(type)
    return this[type] || this.component
  }

  composition () {
    return {
      tgs: 1,
      v: '5.5.2',
      fr: 30,
      ip: 0,
      op: 90,
      w: 512,
      h: 512,
      nm: '@QuotAfBot',
      ddd: 0,
      assets: [],
      layers: []
    }
  }

  component (bgOffset, rows, typeAnimation, yOffset, id) {
    const scale = 25
    const xOffsetLayer = -75
    const yOffsetLayer = -60
    const layers = []
    const { json, options } = cache.get(id) || JSON.parse(fs.readFileSync(resolve(`./assets/backgrounds/components/${id}.json`)))
    layers.push(simpleCloud(bgOffset, rows, typeAnimation, yOffset))

    for (let i = 0; i < options.rotate; i++) {
      const layer = emptyLayer({
        id,
        rows,
        scale,
        xOffsetLayer,
        yOffsetLayer,
        ip: i === 0 ? 0 : i * (90 / options.rotate),
        op: (i + 1) * (90 / options.rotate),
        st: i === 0 ? 0 : i * (90 / options.rotate)
      })
      layers.push(...layer)
    }

    // todo: migrate
    if (json[json.length - 1].id === 'component') json[0].id = id

    cache.set(id, { json, options })

    return { layers, assets: json }
  }

  simpleCloud (bgOffset, rows, typeAnimation, yOffset) {
    return {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'simpleCloud Outlines',
      sr: 1,
      ks: simpleCloudAnimations(typeAnimation)(bgOffset, rows, yOffset).ks,
      ao: 0,
      shapes: simpleCloudAnimations(typeAnimation)(bgOffset, rows, yOffset).shapes,
      ip: 0,
      op: 90,
      st: 0,
      bm: 0
    }
  }

  sharkCloud (bgOffset, rows, typeAnimation, yOffset) {
    const background = []
    background.push(simpleCloud(bgOffset, rows, typeAnimation, yOffset))
    background.push(shark(0, rows, typeAnimation, 0))
    return background
  }

  sharkCloudWaves (bgOffset, rows, typeAnimation, yOffset) {
    let background = []
    background
      .push(simpleCloud(bgOffset, rows, typeAnimation, yOffset))
      .push(shark(0, rows, typeAnimation, 0))
    background = background.concat(waves())
    return background
  }

  menheraChanCry (bgOffset, rows, typeAnimation, yOffset) {
    return [
      simpleCloud(bgOffset, rows, typeAnimation, yOffset),
      menheraCry(0, rows, typeAnimation, 0)
    ]
  }

  menherachanOk () {
    return menherachanOkBG()
  }

  menherachanPlate () {
    return menherachanPlateBG()
  }

  keyboard () {
    return keyboardBG()
  }

  popCat (bgOffset, rows, typeAnimation, yOffset) {
    const layers = []
    const [layer, assets] = popCatBG(bgOffset, rows, typeAnimation, yOffset)

    layers.push(simpleCloud(bgOffset, rows, typeAnimation, yOffset))
    layers.push(...layer)

    return { layers, assets }
  }

  rollingCat (bgOffset, rows, typeAnimation, yOffset) {
    const layers = []
    const [layer, assets] = rollingCatBG(bgOffset, rows, typeAnimation, yOffset)

    layers.push(simpleCloud(bgOffset, rows, typeAnimation, yOffset))
    layers.push(...layer)

    return { layers, assets }
  }

  telegram (bgOffset, rows, typeAnimation, yOffset, type) {
    const id = 'tg'
    const scale = 25
    const xOffsetLayer = -70
    const yOffsetLayer = -50
    const layers = []
    const layer = emptyLayer({ id, rows, scale, xOffsetLayer, yOffsetLayer })
    const assets = telegramBG(id)

    layers.push(simpleCloud(bgOffset, rows, typeAnimation, yOffset))
    layers.push(...layer)

    return { layers, assets }
  }
}

module.exports = new BackgroundService()
