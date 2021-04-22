const waves = require('./waves')
const shark = require('./shark/shark')
const catCloud = require('./catCloud')
const popCatBG = require('./popCat')
const telegramBG = require('./telegram/telegram')
const menheraCry = require('./menhera-chan/menhera-cry')
const emptyLayer = require('./emptyLayer')
const keyboardBG = require('./keyboard')
const rollingCatBG = require('./rollingCat')
const menherachanOkBG = require('./menhera-chan/menherachan-ok-bg')
const menherachanPlateBG = require('./menhera-chan/menherachan-plate-bg')
const simpleCloudAnimations = require('./simpleCloudAnimations')

const simpleCloud = (bgOffset, rows, typeAnimation, yOffset) => ({
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
})

const backgrounds = {
  waves,
  shark,
  catCloud,
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
}

module.exports = backgrounds
