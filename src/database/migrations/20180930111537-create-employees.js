module.exports = {
  async up(queryInterface, Sequelize) {
    const { STRING, INTEGER, DATE } = Sequelize
    await queryInterface.createTable('employees', {
      id: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
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
    await queryInterface.dropTable('employees')
  },
}
