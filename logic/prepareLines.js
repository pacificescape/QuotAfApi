const debug = require('debug')('prepareLines')
const { left, right } = require('./either')
const getLength = require('./getLength')
const getChar = require('./getChar')

const regBreak = /<br>|\n|\r/
const regSpace = /[\f\t\v\u0020\u1680\u2000\u200a\u2028\u2029\u205f\u3000]/
const calculateWidth = arr => (f, i) => arr.slice(f, i + 1).reduce((a, c) => a + c)
const match = re => s => s.shapes ? false : s.match(re)
const matchBreak = match(regBreak)
const matchSpace = match(regSpace)

module.exports = ({ letters, settings }) => {
  const { scaleIndex, emojiScaleIndex, cloudWidth } = settings
  settings.lineWidth = []
  let lines = []

  function processEmoji (emoji) {
    const emojiWidth = getLength(emoji, getChar(settings)) * emojiScaleIndex
    emoji.width = emojiWidth
    debug('emojiWidth', emojiWidth)
    return emojiWidth
  }

  function processText (char) {
    const charWidth = getLength(char, getChar(settings)) * scaleIndex
    return charWidth
  }

  const getMap = (arr) => {
    const map = []
    for (let i = 0; i < arr.length; i++) {
      const charWidth = arr[i].shapes ? processEmoji(arr[i]) : processText(arr[i])
      map.push(+charWidth.toFixed(2))
    }
    return map
  }

  const blocks = divideBlocks(letters)
  blocks.forEach(block => {
    const map = getMap(block)
    const getCurWidth = calculateWidth(map)

    let line = []
    let first = 0
    for (let i = 0; i <= block.length; i++) {
      const curWidth = getCurWidth(first, i)
      if (i === block.length) {
        settings.lineWidth.push(curWidth)
        lines.push(line)
        continue
      }

      if (curWidth >= cloudWidth) {
        settings.lineWidth.push(getCurWidth(first, i - 1))
        lines.push(line)
        line = []
        first = --i
        // cloudWidth += 10
        continue
      }

      line.push(block[i])
    }
  })

  lines = lines.map((line, i) => {
    const lineTrim = l => {
      const g = l.length
      if (g === 0) return
      if (matchSpace(l[0])) l = l.slice(1)
      if (matchSpace(l[l.length - 1])) l = l.slice(0, -1)
      if (g !== l.length) {
        settings.lineWidth[i] -= processText(' ')
        lineTrim(l)
      }
    }
    lineTrim(line)
    return line
  })

  lines = lines.filter(l => l[0])
  lines = settings.prepareLines ? settings.prepareLines(lines) : lines
  lines = lines.map(l => l[l.length - 1] === ' ' ? l.slice(0, -1) : l)

  return lines ? right({ lines, settings }) : left(new Error('PrepareLines error...\n lines is undefined'))
}

function divideBlocks (letters) {
  const blocks = []
  let block = []
  for (let i = 0; i < letters.length; i++) {
    if (matchBreak(letters[i])) {
      blocks.push(block)
      block = []
      continue
    }
    block.push(letters[i])
  }
  blocks.push(block)
  return blocks
}
