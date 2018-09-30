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
    logger: {
      formatter: env.LOGGER_FORMATTER,
    },
    database: {
      username: env.DB_USERNAME,
      password: env.DB_PASSWORD,
      database: env.DB_DATABASE,
      host: env.DB_HOST,
      port: env.DB_PORT,
      dialect: env.DB_DIALECT,
      logging: env.DB_LOGGING,
    },
  }

const { value, error } = Joi.validate(environment, schema)

if (error) {
  throw error
}

module.exports = value
