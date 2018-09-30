module.exports = {
  async up(queryInterface, { STRING }) {
    await queryInterface.addColumn('uploads', 'status', {
      type: STRING,
      allowNull: false,
      defaultValue: '',
    })
  },
  async down(queryInterface) {
    await queryInterface.removeColumn('uploads', 'status')
  },
}
