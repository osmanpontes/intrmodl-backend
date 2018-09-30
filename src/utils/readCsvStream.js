const csv = require('fast-csv')

const validateCsv = require('./validateCsv')

const readCsvStream = async ({ readableStream, onValidData, onEnd }) => {
  const writer = csv.fromStream(readableStream, {
    headers: [
      'yard_id',
      'employee_id',
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
      .on('data', (data) => {
        if (index !== 1) {
          onValidData(data)
        }
      })
      .on('error', reject)
      .on('end', () => {
        onEnd()
        resolve({ errors })
      })
  })
}

module.exports = readCsvStream
