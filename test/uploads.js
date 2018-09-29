const request = require('supertest')
const { assert } = require('chai')

const server = require('server')

describe('uploads', () => {
  describe('GET', () => {
    it('should return empty json', async () => {
      await request(server)
        .get('/uploads')
        .expect(200)
        .then((response) => {
          assert.deepEqual(response.body, {})
        })
    })
  })
})
