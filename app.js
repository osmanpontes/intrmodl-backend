const Koa = require('koa')
const koaBody = require('koa-body')

const app = new Koa()

app.use(koaBody())

module.exports = app
