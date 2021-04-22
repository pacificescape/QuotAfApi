const Router = require('koa-router')
const Generator = require('../controllers/GenerationController')

const api = new Router()

api.post('/generate', (ctx) => Generator.sticker(ctx))
api.post('/component', (ctx) => Generator.component(ctx))

module.exports = api
