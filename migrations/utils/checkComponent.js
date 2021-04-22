const generate = require('../../handlers/generate-sticker')

function checkComponent (bot, component, chatId) {
  const data = {
    message: 'Test message text',
    type: component.file_unique_id,
    charAnimationType: 'sharkDefaultAnimation',
    typeAnimation: 'sharkDefaultAnimation'
  }

  return new Promise((resolve) => {
    generate(data)
      .then((sticker) => {
        if (!sticker) resolve(null)
        bot.telegram.sendDocument(chatId, {
          source: sticker,
          filename: 'private.tgs'
        }).then((msg) => {
          if (!msg?.sticker) {
            resolve(null)
          }
          resolve(msg)
        }).catch((err) => {
          console.log(err)
          resolve(null)
        })
      })
      .catch(() => resolve(null))
  })
}

module.exports = checkComponent
