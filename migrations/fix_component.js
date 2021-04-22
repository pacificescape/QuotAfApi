require('dotenv').config()
const { gzip, ungzip } = require('node-gzip')
const { Component } = require('../database')

const migration = async () => {
  const ms = Date.now()
  let count = 0

  for await (const component of Component.find().cursor()) {
    const raw = await ungzip(component.assets)
    const assets = JSON.parse(raw)

    if (assets.json[0].id === 'component') {
      count++
      assets.json[0].id = component.file_unique_id
      component.assets = await gzip(JSON.stringify(assets))
      await component.save()
    }
  }

  console.log('time %sms, count %s', Date.now() - ms, count)
}

migration()
