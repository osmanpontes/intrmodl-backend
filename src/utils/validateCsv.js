const Joi = require('joi')

const validateCsvHeader = (header) => {
  const schema = Joi.object().keys({
    yard_code: Joi.string().valid('Yard Code').required(),
    employee_code: Joi.string().valid('Employee Code').required(),
    clock_in: Joi.string().valid('Clock In').required(),
    clock_out: Joi.string().valid('Clock Out').required(),
  }).required()

  const { error } = Joi.validate(header, schema)

  if (error) {
    return {
      error: {
        code: 'INVALID_HEADER',
        message: 'The csv header is invalid.',
      },
      isValid: false,
    }
  }

  return {
    error: null,
    isValid: true,
  }
}

const validateCsvRow = (row, index) => {
  const dateSchema = Joi.string().regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/)
  const schema = Joi.object().keys({
    yard_code: Joi.string().required(),
    employee_code: Joi.string().regex(/^\d+$/).required(),
    clock_in: dateSchema.required(),
    clock_out: dateSchema.required(),
  }).required()

  const { error } = Joi.validate(row, schema)

  if (error) {
    return {
      error: {
        code: 'INVALID_ROW',
        message: `The csv row ${index} is invalid.`,
        index,
      },
      isValid: false,
    }
  }

  return {
    error: null,
    isValid: true,
  }
}

const validateCsv = (data, index) => {
  if (index === 1) {
    return validateCsvHeader(data)
  }
  return validateCsvRow(data, index)
}

module.exports = validateCsv
