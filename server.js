const Koa = require('koa')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const api = require('./routes/api')
const ApiHelper = require('./middlewares/ApiHelper')
const app = new Koa()

app.use(logger())
app.use(bodyParser({
  jsonLimit: '5mb'
}))
app.use(ApiHelper)
app.use(api.routes())

const port = process.env.PORT || 4444

app.listen(port, () => {
  console.log('Listening on localhost, port', port)
})
