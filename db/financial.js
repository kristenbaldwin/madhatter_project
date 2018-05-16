'use strict'
module.exports = (db, Sequelize) => {

    const financial = db.define('financial', {
        question: Sequelize.STRING,
        answer: Sequelize.STRING,
        opp_id: Sequelize.INTEGER,
    }, {
            timestamps: false,
            freezeTableName: true
        }, {})

    return financial;
};