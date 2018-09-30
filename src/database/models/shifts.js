const { STRING, INTEGER, DATE } = require('sequelize')

module.exports = {
  create(sequelize) {
    return sequelize.define('shift', {
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
          model: 'upload',
          key: 'id',
        },
      },
      yard_id: {
        type: STRING,
        allowNull: false,
        references: {
          model: 'yard',
          key: 'id',
        },
      },
      employee_id: {
        type: INTEGER,
        allowNull: false,
        references: {
          model: 'employee',
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
      },
      updated_at: {
        type: DATE,
        allowNull: false,
      },
    }, {})
  },

  associate(shift, { upload, yard, employee }) {
    shift.belongsTo(upload, {
      foreignKey: 'upload_id',
    })
    shift.belongsTo(yard, {
      foreignKey: 'yard_id',
    })
    shift.belongsTo(employee, {
      foreignKey: 'employee_id',
    })
  },
}
