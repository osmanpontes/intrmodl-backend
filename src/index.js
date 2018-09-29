require('app-module-path').addPath(__dirname)
const app = require('app')
const logger = require('utils/logger')
const { server } = require('utils/environment')

const { port } = server

app.listen(port, () => {
  logger.info(`Server up and listening on port ${port}`, { scope: 'SERVER' })
})
