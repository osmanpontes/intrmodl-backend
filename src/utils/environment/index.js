const Joi = require('joi')
const development = require('./development.json')
const schema = require('./schema')

const { env } = process

const environment = env.NODE_ENV === 'development'
  ? development
  : {
    server: {
      port: env.SERVER_PORT,
    },
  }

const { value, error } = Joi.validate(environment, schema)

if (error) {
  throw error
}

module.exports = value
