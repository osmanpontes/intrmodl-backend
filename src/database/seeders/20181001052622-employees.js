module.exports = {
  async up(queryInterface) {
    const employees = []
    for (let i = 0; i < 100; i += 1) {
      employees.push({ name: `Name ${i}` })
    }
    await queryInterface.bulkInsert('employees', employees, {})
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('employees', null, {})
  },
}
