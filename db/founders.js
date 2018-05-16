'use strict'
module.exports = (db, Sequelize) => {

    const founders = db.define('founders', {
        question: Sequelize.STRING,
        answer: Sequelize.STRING,
        opp_id: Sequelize.INTEGER,
    }, {
            timestamps: false,
            freezeTableName: true
        }, {})

    return founders;
};