const debug = require('debug')('generateBackground')
const { left, right } = require('./either')
const Backgrounds = require('../services/BackgroundService')

const generateBackground = ({ layers, settings }) => {
  const {
    type,
    rowsTotal,
    xMax,
    typeAnimation,
    CLOUD_R_SIDE_MINIMAL_WIDTH,
    CLOUD_R_SIDE_MINIMAL_RIGHT_X,
    CLOUD_R_SIDE_MAXIMAL_WIDTH,
    CLOUD_R_SIDE_OFFSET_CORRECTION,
    CLOUD_R_SIDE_MAXIMAL_OFFSET
  } = settings

  const composition = Backgrounds.composition()

  layers.forEach(v => composition.layers.push(v))

  let cloudWidth = xMax < CLOUD_R_SIDE_MINIMAL_WIDTH
    ? CLOUD_R_SIDE_MINIMAL_RIGHT_X : xMax > CLOUD_R_SIDE_MAXIMAL_OFFSET
      ? CLOUD_R_SIDE_MAXIMAL_WIDTH + CLOUD_R_SIDE_OFFSET_CORRECTION
      : xMax + CLOUD_R_SIDE_OFFSET_CORRECTION

  if (!cloudWidth) cloudWidth = 0

  debug('xMax:', xMax)
  debug('cloudWidth:', cloudWidth)

  const bgLayers = Backgrounds.type(type)(cloudWidth, rowsTotal, typeAnimation, settings.yOffset, type)

  if (Array.isArray(bgLayers)) {
    for (const bgLayer of bgLayers) {
      composition.layers.push(bgLayer)
    }
  } else if (bgLayers.layers && bgLayers.assets) {
    composition.layers = composition.layers.concat(bgLayers.layers)
    composition.assets = composition.assets.concat(bgLayers.assets)
  } else {
    composition.layers.push(bgLayers)
  }

  return composition ? right(composition) : left(Error('[generateBackground]: error'))
}

module.exports = generateBackground
