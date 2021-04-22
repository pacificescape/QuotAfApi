const mongoose = require('mongoose')

const connection = mongoose.createConnection(process.env.MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
})

module.exports = connection
