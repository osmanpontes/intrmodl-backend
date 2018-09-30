const Joi = require('joi')

const validate = schema => async (ctx, next) => {
  const { params } = ctx
  const { query, body, files } = ctx.request
  const requestBody = Object.assign({}, params, query, body, files)
  const { error, value } = Joi.validate(requestBody, schema)
  if (error) {
    const { details } = error
    Object.assign(ctx, {
      status: 400,
      body: {
        error: {
          code: 'INPUT_VALIDATION_ERROR',
          message: error.message,
          details,
        },
      },
    })
  } else {
    ctx.state.input = value
    await next()
  }
}

module.exports = validate
