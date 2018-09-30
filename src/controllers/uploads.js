const fs = require('fs')
const readCsvStream = require('utils/readCsvStream')

const show = async (ctx) => {
  ctx.body = {}
}

const create = async (ctx) => {
  const { file_name: name } = ctx.request.body
  const { file } = ctx.request.files
  const reader = fs.createReadStream(file.path)

  const { errors } = await readCsvStream(reader, (data) => {
    console.log(data)
  })

  if (errors.length !== 0) {
    ctx.status = 400
    ctx.body = { errors }
    return
  }

  ctx.body = { name }
}

module.exports = {
  show,
  create,
}
