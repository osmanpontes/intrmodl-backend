const Router = require('koa-router')
const controller = require('controllers/uploads')
const validate = require('middlewares/validate')
const schema = require('schemas/uploads')

const router = new Router()

router
  .get('/:id', validate(schema.show), controller.show)
  .post('/', validate(schema.create), controller.create)

module.exports = router
