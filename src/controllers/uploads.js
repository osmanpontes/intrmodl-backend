const fs = require('fs')
const readCsvStreamByChunk = require('utils/readCsvStreamByChunk')
const environment = require('utils/environment')

const show = async (ctx) => {
  ctx.body = {}
}

const create = async (ctx) => {
  const { file_name: name } = ctx.request.body
  const { file } = ctx.request.files
  const readableStream = fs.createReadStream(file.path)

  const upload = await ctx.db.upload.create({ name, status: 'writing' })

  const onChunk = async (chunk, baseIndex) => {
    ctx.db.shift.bulkCreate(chunk.map((row, index) => ({
      ...row,
      upload_id: upload.id,
      line: index + baseIndex,
    })))
  }

  const { errors } = await readCsvStreamByChunk({
    readableStream,
    chunkSize: environment.chunkSize,
    onChunk,
  })

  if (errors.length !== 0) {
    await upload.update({ status: 'failed' })
    ctx.status = 400
    ctx.body = { errors }
    return
  }


  await upload.update({ status: 'written' })
  ctx.body = { name }
}

module.exports = {
  show,
  create,
}
