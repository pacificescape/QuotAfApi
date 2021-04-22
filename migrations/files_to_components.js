require('dotenv').config()
const fs = require('fs')
const { resolve } = require('path')
const { gzip } = require('node-gzip')
const { Component, User } = require('../database')
const Telegraf = require('telegraf')
const checkComponent = require('./utils/checkComponent')
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const bot = new Telegraf(process.env.BOT_TOKEN)
const chatId = process.env.CHAT_ID

const migration = async () => {
  const author = await User.findOne({ telegram_id: chatId })
  const path = resolve('./assets/backgrounds/components/')
  const files = fs.readdirSync(path)
  const failed = []
  let success = 0

  for (const fileName of files) {
    const id = fileName.replace('.json', '')
    const file = fs.readFileSync(resolve(path, fileName))
    console.log('size:', file.length)

    let component = await Component.findOne({ file_unique_id: id })

    if (!component && file) {
      component = new Component()
      component.user = author
      component.file_unique_id = id
      component.emoji = ''
      component.set_name = ''
      component.file_id = 'unresolved'
    }

    if (file) {
      const message = await checkComponent(bot, component, chatId)
      if (!message) {
        console.log('MESSAGE IS NULL')
        failed.push(id)
        component.error = true
      }
      const gziped = await gzip(file)
      component.assets = gziped
      component.emoji = '❓'
    } else {
      if (component.assets?.length > 64000) {
        console.log('object')
      }
    }

    console.log(id, component.error)
    await component.save()
    success += 1
    await sleep(3000)
  }

  console.log('Finished, success %s, failed %s', success, failed.length)
}

migration()
