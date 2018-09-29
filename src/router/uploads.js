const Router = require('koa-router')
const controller = require('../controllers/uploads')

const router = new Router()

router
  .get('/', controller.show)

module.exports = router
