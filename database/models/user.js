const mongoose = require('mongoose')

const UserScheme = mongoose.Schema({
  telegram_id: {
    type: Number,
    unique: true
  }
}, {
  timestamps: true
})

module.exports = UserScheme
