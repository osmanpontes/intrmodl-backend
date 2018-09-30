module.exports = {
  async up(queryInterface) {
    await queryInterface.addIndex('shifts', {
      fields: ['upload_id'],
      unique: false,
    })
    await queryInterface.addIndex('shifts', {
      fields: ['yard_id'],
      unique: false,
    })
    await queryInterface.addIndex('shifts', {
      fields: ['employee_id'],
      unique: false,
    })
  },
  async down(queryInterface) {
    await queryInterface.removeIndex('shifts', 'shifts_upload_id')
    await queryInterface.removeIndex('shifts', 'shifts_yard_id')
    await queryInterface.removeIndex('shifts', 'shifts_employee_id')
  },
}
