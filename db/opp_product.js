'use strict'
module.exports = (db, Sequelize) => {

    const opp_product = db.define('opp_product', {
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        email: Sequelize.STRING,
        role: Sequelize.STRING,
    }, {
            timestamps: false,
            freezeTableName: true
        }, {})

    return opp_product;
};
