const Joi = require('joi')

module.exports = Joi.object().keys({
  server: Joi.object().keys({
    port: Joi.number().integer()
      .min(1024).max(65535)
      .required(),
  }).required(),
}).required()
