const charAnimation = require('../assets/animations/charAnimations')
const { findPoints, countWidth, normalize } = require('../logic/countWidth')

const getChar = settings => ({ y, x, char, ping, rowsTotal, currentRow, xOffset, LINE_OFFSET }) => {
  const points = findPoints(char)
  if (!points) throw Error('Cannot find char:', char) // ???

  let normalized = JSON.stringify(normalize(char, points))
  normalized = JSON.parse(normalized)

  const isEmoji = !!char.shapes
  const scaleIndex = isEmoji ? settings.emojiScaleIndex : settings.scaleIndex

  if (isEmoji) {
    x -= 20// * scaleIndex
    y -= 33 * scaleIndex
  }

  // todo: remake color generation
  const colors = {
    sharkSlideAnimation: [1, 1, 1, 1],
    keyboardAnimation: [0.32, 0.87, 0.30, 1]
  }

  if (colors[settings.charAnimationType]) {
    if (!normalized[0].nm.includes('Group')) {
      normalized[0].it.forEach(v => {
        if (v.ty === 'fl' || v.ty === 'st') {
          v.c.k = colors[settings.charAnimationType] // settings.fontColor// [r, g, b, a]
        }
      })
    }
  } else {
    // normalized[0].it.forEach(v => {
    //   if (v.ty === 'fl') {
    //     const r = Math.random() + 0.3
    //     const g = Math.random() + 0.3
    //     const b = Math.random() + 0.3
    //     v.c.k = [r, g, b, 1] // settings.fontColor// [r, g, b, a]
    //   }
    // })
  }
  // console.log('x', x + currentRow * LINE_OFFSET - (x - xOffset) * 0.5)

  const charAnimationTyped = charAnimation(settings.charAnimationType)
  const layerProperties = charAnimationTyped({ x, y, rowsTotal, ping, scaleIndex, currentRow, xOffset, LINE_OFFSET })

  return [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Outlines',
      sr: 1,
      ks: layerProperties.ks,
      ef: layerProperties.ef,
      ao: 0,
      shapes: normalized,
      ip: layerProperties.ip || 0,
      op: 90,
      st: 0,
      bm: 0
    },
    countWidth(points)
  ]
}

module.exports = getChar
