const fs = require('fs')
const {
  pipe,
  prop,
  last,
} = require('ramda')
const { Op } = require('sequelize')
const readCsvStreamByChunk = require('utils/readCsvStreamByChunk')
const environment = require('utils/environment')

const show = async (ctx) => {
  const { id, limit, cursor } = ctx.state.input
  const upload = await ctx.db.upload.findById(id)

  if (upload === null || upload.status !== 'written') {
    ctx.status = 404
    ctx.body = {}
    return
  }

  const where = { upload_id: id }

  if (cursor) {
    where.line = { [Op.gt]: cursor }
  }

  const lines = await ctx.db.shift.findAll({
    where,
    limit,
    order: [['line', 'ASC']],
  })

  ctx.body = {
    name: upload.name,
    lines,
    cursor: lines.length === 0 ? null : pipe(
      last,
      prop('line'),
    )(lines),
  }
}

const create = async (ctx) => {
  const { name } = ctx.request.body
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
