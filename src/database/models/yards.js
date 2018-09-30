const { STRING, DATE } = require('sequelize')

module.exports = {
  create(sequelize) {
    return sequelize.define('yard', {
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
      },
      updated_at: {
        type: DATE,
        allowNull: false,
      },
    }, {})
  },
}
