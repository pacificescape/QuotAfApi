const EmojiDbLib = require('emoji-db')
const emojiDb = new EmojiDbLib({ useDefaultDb: true })

module.exports = text => emojiDb.searchFromText({ input: text, fixCodePoints: true })
