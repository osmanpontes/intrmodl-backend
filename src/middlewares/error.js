const logger = require('utils/logger')
const internalServerError = require('errors/internalServerError')

const error = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    logger.error(err, { scope: 'ERROR_MIDDLEWARE' })
    Object.assign(ctx, internalServerError)
  }
}

module.exports = error
