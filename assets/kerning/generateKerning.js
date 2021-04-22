// based on https://github.com/dy/detect-kerning/blob/master/index.js

const Canvas = require('canvas')
const { resolve } = require('path')

Canvas.registerFont(resolve('assets/fonts/noto/NotoSans.ttf'), { family: 'Noto Sans' })

const canvas = kerning.canvas = Canvas.createCanvas()
var ctx = canvas.getContext('2d')
var asciiPairs = createPairs([32, 255])
var asciiPairs2 = createPairs([1040, 1440])

kerning.createPairs = createPairs
kerning.ascii = [...asciiPairs, ...asciiPairs2]

function kerning (family, o) {
  if (Array.isArray(family)) family = family.join(', ')

  var table = {}; var pairs; var fs = 100; var threshold = 0

  if (o) {
    if (o.length === 2 && typeof o[0] === 'number') {
      pairs = createPairs(o)
    } else if (Array.isArray(o)) {
      pairs = o
    } else {
      if (o.o) pairs = createPairs(o.o)
      else if (o.pairs) pairs = o.pairs

      if (o.fontSize) fs = o.fontSize
      if (o.threshold != null) threshold = o.threshold
    }
  }

  if (!pairs) pairs = asciiPairs

  ctx.font = fs + 'px ' + family

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i]
    var width = ctx.measureText(pair[0]).width + ctx.measureText(pair[1]).width
    var kerningWidth = ctx.measureText(pair).width
    if (Math.abs(width - kerningWidth) > fs * threshold) {
      var emWidth = (kerningWidth - width) / fs
      table[pair] = emWidth * 1000
    }
  }

  return table
}

function createPairs (range) {
  var pairs = []

  for (var i = range[0]; i <= range[1]; i++) {
    var leftChar = String.fromCharCode(i)
    for (var j = range[0]; j < range[1]; j++) {
      var rightChar = String.fromCharCode(j)
      var pair = leftChar + rightChar

      pairs.push(pair)
    }
  }

  return pairs
}

const generate = () => {
  const res = kerning('Noto Sans')

  console.log(res)
}

generate()
