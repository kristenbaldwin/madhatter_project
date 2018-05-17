'use strict'
module.exports = (db, Sequelize) => {

    const main_score = db.define('main_score', {
        opp_id: Sequelize.INTEGER,
        founders_score: Sequelize.INTEGER,
        legal: Sequelize.INTEGER,
        opp_product_score: Sequelize.INTEGER,
        financial_score: Sequelize.INTEGER,
        total_score: Sequelize.INTEGER,
        status: Sequelize.STRING,
    }, {
            timestamps: false,
            freezeTableName: true
        }, {})

    return main_score;
};
