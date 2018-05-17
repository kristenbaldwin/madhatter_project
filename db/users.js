'use strict'
module.exports = (db, Sequelize) => {

    const users = db.define('users', {
        username: Sequelize.STRING,
        password: Sequelize.STRING,
        email: Sequelize.STRING,
        role: Sequelize.STRING,
    }, {
            timestamps: false,
            freezeTableName: true
        }, {})

    return users;
};
