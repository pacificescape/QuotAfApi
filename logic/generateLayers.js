const debug = require('debug')('generateLayers')
const { left, right } = require('./either')
const getChar = require('./getChar')

const TextService = require('../services/TextService')
const kerning = TextService.kerning
const regSpace = /[\f\n\r\t\v\u0020\u1680\u2000\u200a\u2028\u2029\u205f\u3000]/
const SPACE_WIDTH = 25

const generateLayers = ({ lines, settings }) => {
  const { scaleIndex, emojiScaleIndex, charAnimationType, lineWidth } = settings
  const pings = lines.flat().map((_v, i, a) => 0.01 * Math.ceil((i * 100) / a.length))
  const rowsTotal = lines.length
  settings.rowsTotal = rowsTotal - 1
  const maxWidth = Math.max(...lineWidth, settings.maxWidth || 0)

  let xMax = 0
  const layers = lines.map((line, y) => {
    let x = (maxWidth - lineWidth[y]) / 2
    const result = []
    line.forEach((symbol, i) => {
      const isSticker = !!symbol.shapes
      const currentScaleIndex = isSticker ? emojiScaleIndex : scaleIndex

      if (line[i - 1] && line[i - 1].shapes) {
        x += 1
      }

      if (isSticker) {
        x += 3
        debug('sticker:', symbol)
      } else if (symbol.match(regSpace)) { x += SPACE_WIDTH * currentScaleIndex; return }

      const char = getChar(settings)(settings.apply({
        y, // row: y,
        x, // rowOffset: x,
        char: symbol,
        ping: pings.shift(),
        rowsTotal,
        charAnimationType,
        currentRow: y,
        LINE_OFFSET: settings.LINE_OFFSET,
        xOffset: settings.xOffset
      }))

      x += (char[1] + 3) * currentScaleIndex
      x += kerning([line[i], line[i + 1]]) * currentScaleIndex

      xMax = xMax > x ? xMax : x

      result.push(char[0])
    })
    settings.xMax = xMax > x ? xMax : x
    return result
  }).flat()

  return layers ? right({ layers, settings }) : left(Error('[generateLayers]: error'))
}

module.exports = generateLayers
