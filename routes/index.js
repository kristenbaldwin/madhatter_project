// users' routes
const users = require('./users');
const contact = require('./contact');
// opportunity route
const opportunity = require('./opportunity');
// questions' routes
const founders = require('./founders');
const legal = require('./legal');
const financial = require('./financial');
const opp_product = require('./opp_product');

module.exports = function (app, db) {
    users(app, db)
    contact(app, db)
    opportunity(app, db)
    founders(app, db)
    legal(app, db)
    financial(app, db)
    opp_product(app, db)
}