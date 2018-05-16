'use strict'
module.exports = (db, Sequelize) => {

    const legal = db.define('legal', {
        question: Sequelize.STRING,
        answer: Sequelize.STRING,
        opp_id: Sequelize.INTEGER,
    }, {
            timestamps: false,
            freezeTableName: true
        }, {})

    return legal;
};