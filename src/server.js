require('app-module-path').addPath(__dirname)
const app = require('app')
const logger = require('utils/logger')
const environment = require('utils/environment')

const { port } = environment.server

const server = app.listen(port, () => {
  logger.info(`Server up and listening on port ${port}`, { scope: 'SERVER' })
})

module.exports = server
