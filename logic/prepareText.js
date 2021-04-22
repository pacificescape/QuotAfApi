const { left, right } = require('./either')
const findEmoji = require('./emoji/findEmoji')
const getEmoji = require('./emoji/getEmoji')

module.exports = ({ text, settings }) => {
  const emojis = findEmoji(text)
  const letters = text.split('')

  try {
    emojis.reverse().forEach((emoji) => {
      const tgsEmoji = getEmoji(emoji.found) // get emoji shapes
      emoji.shapes = tgsEmoji
      letters.splice(emoji.offset, emoji.length, emoji)
    })
  } catch (error) {
    return left(new Error('[PrepareText  error...] \n' + error))
  }

  return text ? right({ letters, settings }) : left(new Error('[PrepareText  error...] \n text is undefined'))
}

// Add text styles (i, b, monowidth)
