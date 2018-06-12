const Sequelize = require('sequelize');
// const connection = new Sequelize('postgres://localhost:5432/madhatter')
const connection = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/madhatter');

connection.authenticate().then(function(err) {
  if (err) console.log('Unable to connect to the POstgreSQL database: ', err);
  console.log('Connection has been established succesfully');
})

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


//Relations
models.founders.belongsTo(models.opportunities, { foreignKey: 'id' });
models.legal.belongsTo(models.opportunities, { foreignKey: 'id' });
models.financial.belongsTo(models.opportunities, { foreignKey: 'id' });
models.opp_product.belongsTo(models.opportunities, { foreignKey: 'id' });
models.contact.belongsTo(models.opportunities, { foreignKey: 'id' });


models.opportunities.hasMany(models.founders, { foreignKey: 'opp_id' });
models.opportunities.hasMany(models.legal, { foreignKey: 'opp_id' });
models.opportunities.hasMany(models.financial, { foreignKey: 'opp_id' });
models.opportunities.hasMany(models.opp_product, { foreignKey: 'opp_id' });
models.opportunities.hasMany(models.contact, { foreignKey: 'opp_id' });


module.exports = models;
