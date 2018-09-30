const readCsvStream = require('./readCsvStream')

const readCsvStreamByChunk = ({ readableStream, chunkSize, onChunk }) => {
  const chunk = []
  let baseIndex = 0

  const handleChunk = () => {
    onChunk(chunk, baseIndex)
    baseIndex += chunk.length
    chunk.length = 0
  }

  const onValidData = (data) => {
    chunk.push(data)
    if (chunk.length === chunkSize) {
      handleChunk()
    }
  }

  const onEnd = () => {
    if (chunk.length !== 0) {
      handleChunk()
    }
  }

  return readCsvStream({
    readableStream,
    onValidData,
    onEnd,
  })
}

module.exports = readCsvStreamByChunk
