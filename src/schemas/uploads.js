const Joi = require('joi')

const show = Joi.object().keys({
  id: Joi.number().integer().required(),
  limit: Joi
    .number()
    .integer()
    .min(1)
    .max(1000)
    .required(),
  cursor: Joi.number().integer().min(0),
}).required()

const create = Joi.object().keys({
  name: Joi.string().required(),
  file: Joi.object().required(),
}).required()

module.exports = {
  show,
  create,
}
