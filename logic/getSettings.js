const { left, right } = require('./either')
const presets = require('./presets')

module.exports = body => {
  const { message: text, type, charAnimationType, typeAnimation } = body
  const settings = { type, charAnimationType, typeAnimation }
  let error = false

  const preset = presets[type] || presets.component // TODO Refactor

  for (const key in preset) {
    settings[key] = preset[key]
  }

  settings.apply = (args) => ({
    ...args,
    ...settings,
    x: settings.x(args.x),
    y: settings.y(args.y, args.rowsTotal)
  })

  if (!text || text.length === 0) error = true

  return !error ? right({ text, settings }) : left(Error('[getSettings]: settings not found for ' + type))
}
