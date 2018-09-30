const Router = require('koa-router')
const error = require('middlewares/error')
const uploads = require('./uploads')

const router = new Router()

router.use(error)
router.use('/uploads', uploads.routes())

module.exports = router
