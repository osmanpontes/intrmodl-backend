const Router = require('koa-router')
const uploads = require('./uploads')

const router = new Router()

router.use('/uploads', uploads.routes())

module.exports = router
