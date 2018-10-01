module.exports = {
  async up(queryInterface) {
    const yards = []
    for (let i = 0; i < 20; i += 1) {
      yards.push({ id: `TEST${i}`, name: `Test ${i}` })
    }
    await queryInterface.bulkInsert('yards', yards, {})
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('yards', null, {})
  },
}
