const regSpace = /[\f\n\r\t\v\u0020\u1680\u2000\u200a\u2028\u2029\u205f\u3000]/
const SPACE_WIDTH = 25

function getLength (char, getChar) {
  let x = 0
  // task: get emoji width
  if (char.shapes) {
    // console.log('[getLength]:', char)
  } else if (char.match(regSpace)) {
    return SPACE_WIDTH
  }

  const args = {
    y: 0,
    x: 0,
    char,
    ping: 0,
    rowsTotal: 0
  }

  const symbol = getChar(args) // task: symbol is layer???

  x += (symbol[1] + 2) // width + offset

  // task: move to the kerning {

  // if ('iIlL'.includes(letter[i + 1])) { // left offset
  //   x += 3
  // }

  if ('iIlLjJ'.includes(char)) { // right offset
    x += 3
  }

  // }
  // console.log('[getLength]', char, x)
  return x
}

module.exports = getLength
