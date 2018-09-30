const Router = require('koa-router')
const controller = require('../controllers/uploads')

const router = new Router()

router
  .get('/:id', controller.show)
  .post('/', controller.create)

module.exports = router
