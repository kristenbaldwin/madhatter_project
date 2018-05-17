'use strict'
module.exports = (db, Sequelize) => {

    const contact = db.define('contact', {
        phone: Sequelize.STRING,
        email: Sequelize.STRING,
        address: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        postal: Sequelize.STRING,
        country: Sequelize.STRING,
        website: Sequelize.STRING,
        linkedin: Sequelize.STRING,
        opp_id: Sequelize.INTEGER,
    }, {
            timestamps: false,
            freezeTableName: true
        }, {})

    return contact;
};
