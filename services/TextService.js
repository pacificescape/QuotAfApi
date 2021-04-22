// const kerning = require('../assets/kerning')
const database1 = require('../assets/kerning/database_1')
const database2 = require('../assets/kerning/database_2')
const kerning = require('../assets/kerning')

class TextService {
  kerning (paire) {
    paire = paire.join('')
    const x = database1[paire] * 1.5 || database2[paire] * 1.5 || kerning(paire) || 0

    return x
  }
}

module.exports = new TextService()
