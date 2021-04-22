const { gzip } = require('node-gzip')

module.exports = async (data) => {
  if (data.ok) {
    return await gzip(data.result)
  } else {
    console.log(data.error)
  }
}
