const csv = require('fast-csv')

const validateCsv = require('./validateCsv')

const readCsvStream = async (readableStream, onValidData) => {
  const writer = csv.fromStream(readableStream, {
    headers: [
      'yard_code',
      'employee_code',
      'clock_in',
      'clock_out',
    ],
  })

  return new Promise((resolve, reject) => {
    const errors = []
    let index = 0

    writer
      .validate((data) => {
        index += 1
        const { isValid, error } = validateCsv(data, index)
        if (error) {
          errors.push(error)
        }
        return isValid
      })
      .on('data', onValidData)
      .on('error', reject)
      .on('end', () => {
        resolve({ errors })
      })
  })
}

module.exports = readCsvStream
