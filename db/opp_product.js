'use strict'
module.exports = (db, Sequelize) => {

    const opp_product = db.define('opp_product', {
        question: Sequelize.STRING,
        answer: Sequelize.STRING,
        opp_id: Sequelize.INTEGER,
    }, {
            timestamps: false,
            freezeTableName: true
        }, {})

    return opp_product;
};
