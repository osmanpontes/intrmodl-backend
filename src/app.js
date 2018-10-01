const Koa = require('koa')
const router = require('router')
const koaBody = require('koa-body')
const cors = require('koa-cors')
const db = require('database')

const app = new Koa()

app.use(koaBody({
  multipart: true,
}))

app.use(cors())

app.use(router.routes())

app.context.db = db

module.exports = app
