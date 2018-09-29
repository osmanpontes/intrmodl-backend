require('app-module-path').addPath('./src')
const server = require('server')

after(() => {
  server.close()
})
