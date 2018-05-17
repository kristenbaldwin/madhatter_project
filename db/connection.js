const Sequelize = require('sequelize');
const connection = new Sequelize('postgres://localhost:5432/madhatter')

const models = {
    users: connection.import('./users'),
    opportunities: connection.import('./opportunities'),
    contact: connection.import('./contact'),
    founders: connection.import('./founders'),
    legal: connection.import('./legal'),
    financial: connection.import('./financial'),
    opp_product: connection.import('./opp_product'),
    main_score: connection.import('./main_score'),
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.connection = connection;
models.Sequelize = Sequelize;

module.exports =  models;
