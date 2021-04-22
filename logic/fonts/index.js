const fs = require('fs')
const { resolve, join } = require('path')

class Font {
  constructor () {
    this.fonts = []
    this.init()
  }

  init (fontFamily = 'noto') {
    const DIR_NAME = resolve(`./assets/fonts/${fontFamily}/`)
    const dir = fs.readdirSync(DIR_NAME)

    for (const fileName of dir) {
      const font = require(join(DIR_NAME, fileName))
      this.fonts.push(font)
    }
  }

  get (char) {
    let shape
    for (const font of this.fonts) {
      shape = font[char]
      if (shape) break
    }
    if (!shape) throw Error(`[Font error]: , can't find char: ${char}`)
    return shape[0]
  }
}

module.exports = new Font()
