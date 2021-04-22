const Font = require('./fonts')

const findPoints = (char) => {
  let vertices = []

  try {
    if (typeof char === 'object') {
      char.shapes.forEach(shape => {
        shape.it.forEach(path => {
          if (path.ty === 'sh') vertices = vertices.concat(path.ks.k.v)
        })
      })
    } else {
      Font.get(char).it.forEach((i) => {
        if (i.ty === 'sh') vertices = vertices.concat(i.ks.k.v)
      })
    }
  } catch (error) {
    throw Error('cannot find char: ' + char, error)
  }

  const pointsFinder = (arr) => arr.reduce((a, p) => {
    return [
      Math.min(Number(p[0]), a[0]),
      Math.max(Number(p[0]), a[1])
    ]
  }, [999, 0])

  const points = pointsFinder(vertices)

  return points
}

const countWidth = (points) => {
  return points[1] - points[0]
}

const normalize = (char, points) => {
  let normalized = []
  if (typeof char === 'object') {
    normalized = char.shapes
    normalized.forEach((shape, shapeIndex) => {
      shape.it.forEach((path, pathIndex) => {
        if (path.ty === 'sh') {
          path.ks.k.v.forEach((_v, vIndex) => { normalized[shapeIndex].it[pathIndex].ks.k.v[vIndex][0] -= points[0] })
        }
      })
    })
  } else {
    normalized = [Object.assign({}, Font.get(char))]

    normalized[0].it.forEach((v, num) => {
      if (v.ty === 'sh') {
        v.ks.k.v.forEach((_v, num2) => { normalized[0].it[num].ks.k.v[num2][0] -= points[0] })
      }
    })
  }

  return normalized
}

module.exports = {
  countWidth,
  findPoints,
  normalize
}
