const Joi = require('joi')

const portSchema = Joi.number().integer()
  .min(1024).max(65535)

module.exports = Joi.object().keys({
  server: Joi.object().keys({
    port: portSchema.required(),
  }).required(),
  logger: Joi.object().keys({
    formatter: Joi.string().valid([
      'palin',
      'human',
      'syslog',
      'commonInfoModel',
    ]).required(),
  }).required(),
  database: Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
    database: Joi.string().required(),
    host: Joi.string().required(),
    port: portSchema.required(),
    dialect: Joi.string().valid([
      'mysql',
      'sqlite',
      'postgres',
      'mssql',
    ]).required(),
    logging: Joi.boolean().required(),
  }).required(),
  chunkSize: Joi.number().integer().min(1).required(),
}).required()
