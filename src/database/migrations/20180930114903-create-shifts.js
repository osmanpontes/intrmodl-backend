module.exports = {
  async up(queryInterface, Sequelize) {
    const { STRING, INTEGER, DATE } = Sequelize
    await queryInterface.createTable('shifts', {
      id: {
        type: INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      upload_id: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: 'uploads',
          key: 'id',
        },
      },
      yard_id: {
        type: STRING,
        allowNull: false,
        references: {
          model: 'yards',
          key: 'id',
        },
      },
      employee_id: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: 'employees',
          key: 'id',
        },
      },
      clock_in: {
        type: DATE,
        allowNull: false,
      },
      clock_out: {
        type: DATE,
        allowNull: false,
      },
      line: {
        type: INTEGER,
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
    await queryInterface.dropTable('shifts')
  },
}
