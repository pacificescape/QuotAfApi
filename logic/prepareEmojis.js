const { left, right } = require('./either')

module.exports = ({ lines, settings }) => {
  try {
    lines.forEach((line, l) => {
      line.forEach((symbol, s) => {
        if (typeof symbol === 'object') {
          try {
            const emoji = require('../assets/emojis/' + symbol.found + '.json')
            lines[l][s] = emoji.layers[0].shapes
          } catch (error) {
            console.log(error)
          }
        }
      })
    })
  } catch (error) {
    lines = null
  }

  return lines ? right({ lines, settings }) : left(new Error('PrepareEmojis error...\n lines is undefined'))
}
