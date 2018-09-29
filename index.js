require('app-module-path').addPath(__dirname)

const app = require('app')
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Server up and listening on port ${port}`)
})
