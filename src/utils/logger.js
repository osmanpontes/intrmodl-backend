const bristol = require('bristol')
const palin = require('palin')
const environment = require('./environment')

const { formatter } = environment.logger

bristol
  .addTarget('console')
  .withFormatter(formatter === 'palin' ? palin : formatter)

module.exports = bristol
