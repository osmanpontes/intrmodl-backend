const { STRING, INTEGER, DATE } = require('sequelize')

module.exports = {
  create(sequelize) {
    return sequelize.define('employee', {
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
      },
      updated_at: {
        type: DATE,
        allowNull: false,
      },
    }, {})
  },
}
