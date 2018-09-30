const Koa = require('koa')
const router = require('router')
const koaBody = require('koa-body')

const app = new Koa()

app.use(koaBody({
  multipart: true,
}))
app.use(router.routes())

module.exports = app
