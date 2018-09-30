const Sequelize = require('sequelize')
const {
  pipe,
  mapObjIndexed,
  forEachObjIndexed,
  merge,
} = require('ramda')
const environment = require('utils/environment')
const models = require('./models')

const { database, username, password } = environment.database

const sequelize = new Sequelize(database, username, password,
  merge(environment.database, {
    define: {
      underscored: true,
    },
  }))

const createModels = mapObjIndexed(model => ({
  model,
  instance: model.create(sequelize),
}))

const associateModels = forEachObjIndexed(({ model, instance }) => {
  if (model.associate) {
    model.associate(instance, sequelize.models)
  }
})

pipe(createModels, associateModels)(models)

const db = merge(sequelize.models, { sequelize })

module.exports = db
