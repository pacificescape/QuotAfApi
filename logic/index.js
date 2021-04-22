const { either, left, right } = require('./either')
const getSettings = require('./getSettings')
const prepareText = require('./prepareText')
const prepareLines = require('./prepareLines')
const prepareEmojis = require('./prepareEmojis')
const generateLayers = require('./generateLayers')
const generateBackground = require('./generateBackground')
const complete = require('./complete')
const getLength = require('./getLength')
const getEmoji = require('./emoji/getEmoji')
const presets = require('./presets')

module.exports = {
  left,
  right,
  either,
  prepareText,
  prepareLines,
  prepareEmojis,
  getSettings,
  getLength,
  generateLayers,
  generateBackground,
  complete,
  getEmoji,
  presets
}
