'use strict'
module.exports = (db, Sequelize) => {

    const opportunities = db.define('opportunities', {
        name: Sequelize.STRING,
        founder: Sequelize.STRING,
        est: Sequelize.STRING,
        industry: Sequelize.STRING,
        attachments: Sequelize.STRING,
        created_by: Sequelize.INTEGER,
        approved_by: Sequelize.INTEGER,
    }, {
            timestamps: false,
            freezeTableName: true
        }, {})

    return opportunities;
};
