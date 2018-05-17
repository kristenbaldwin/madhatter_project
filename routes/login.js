const express = require('express');
const app = express();

const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const session = require('express-session');
const bcrypt = require('bcryptjs');

module.exports = function(app, db) {

    app.use(require('express-session')({
        secret : 'supercoolmyman',
        resave :false,
        saveUninitialized : false
    }));

    app.use(passport.initialize());
    app.use(passport.session());


    app.post('/login',

    passport.authenticate('local', {    successRedirect: 'http://localhost:3000/success',
                                        failureRedirect: 'http://localhost:3000/login'})


)

passport.use(new localStrategy(
    function(username, password, done) {
        db.users.findOne({
            where: {
                'username': username
            }
        }).then(function(user) {
            console.log(user.dataValues.username);
            console.log(user.dataValues.password);
            console.log(user.dataValues.id);
            if (user.dataValues.username == null) {
                return done(null, false, { message: 'Incorrect credentials'})
            }

            let hashedPassword = bcrypt.compareSync(password, user.dataValues.password)

            if (hashedPassword) {
                console.log('correct password')
                return done(null, user)
            }
            console.log('incorrect password')
            return done(null, false, { message: 'Incorrect credentials'})
        })
    }
))

passport.serializeUser(function(user,done){
    done(null,user.dataValues.id);
  })
  
  // deserialize
passport.deserializeUser(function(user,done){
        console.log('Deserialize user called.');
        return done(null, { firstName: 'Foo', lastName: 'Bar' });
  })
}
// DATABASE SETUP CONFIG
// const Sequelize = require('sequelize'),
//     sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/testing')



// const attributes = {
//     username: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         unique: true
//     },

//     password: {
//         type: Sequelize.STRING
//     }
// }

// let User = sequelize.define('users', attributes)


// DATABASE SETUP END
