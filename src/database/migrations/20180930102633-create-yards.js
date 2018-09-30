module.exports = {
  async up(queryInterface, Sequelize) {
    const { STRING, DATE } = Sequelize
    await queryInterface.createTable('yards', {
      id: {
        type: STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: STRING,
        allowNull: false,
      },
      created_at: {
        type: DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
      updated_at: {
        type: DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
    })
  },
  async down(queryInterface) {
    await queryInterface.dropTable('yards')
  },
}
