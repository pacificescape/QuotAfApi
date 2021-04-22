module.exports = (code) => {
  let json
  try {
    json = require('../../assets/emojis/' + code + '.json')
  } catch (error) {
    code = code.replace('-fe0f', '')
    json = require('../../assets/emojis/' + code + '.json')
  }
  if (!json) throw Error('[getEmoji]: cannot find emoji ' + code)
  return json.layers[0].shapes
}
