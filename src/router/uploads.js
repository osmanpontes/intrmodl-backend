const Router = require('koa-router')
const controller = require('../controllers/uploads')

const router = new Router()

router
  .get('/', controller.show)
  .post('/', controller.create)

module.exports = router
