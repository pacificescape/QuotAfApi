const mongoose = require('mongoose')

const StatsScheme = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User'
  },
  file_unique_id: {
    type: String,
    unique: true,
    index: true
  },
  file_id: {
    type: String,
    index: true,
    unique: true
  },
  emoji: String,
  set_name: String,
  assets: Buffer,
  options: {},
  stats: {},
  error: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
})

module.exports = StatsScheme
