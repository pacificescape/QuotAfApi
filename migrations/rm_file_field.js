require('dotenv').config()
const { Component } = require('../database')

const migration = async () => {
  console.log('start')
  const ms = Date.now()
  await Component.updateMany(
    { file: { $exists: true } },
    { $unset: { file: '' } }
  )
  console.log('time %sms', Date.now() - ms)
}

migration()
