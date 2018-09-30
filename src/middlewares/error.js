const logger = require('utils/logger')

const error = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    logger.error(err, { scope: 'ERROR_MIDDLEWARE' })
    Object.assign(ctx, {
      status: 500,
      body: {
        error: {
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Internal Server Error.',
        },
      },
    })
  }
}

module.exports = error
