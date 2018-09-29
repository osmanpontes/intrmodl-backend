require('app-module-path').addPath(__dirname)

const app = require('app')
const { server } = require('utils/environment')
const { port } = server


app.listen(port, () => {
  console.log(`Server up and listenig on port ${port}`)
})
