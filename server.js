const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');




// DATABASE SETUP CONFIG
const Sequelize = require('sequelize'),
    sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/testing')



const attributes = {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    password: {
        type: Sequelize.STRING
    }
}

let User = sequelize.define('users', attributes)


// DATABASE SETUP END





const app = express();

let users = [   {   username: 'bob',
                    password: '$2a$08$qr1XCJQpXU9A8DdU3cTyz.BV0OaBJ..uakoKYGjd9yRAXjhOL5tXa' // password: 123
                }
            ];

app.use(bodyParser.urlencoded({ extended: false }));


app.use(require('express-session')({
    secret : 'supercoolmyman',
    resave :false,
    saveUninitialized : false
  }));

app.use(passport.initialize());
app.use(passport.session());




app.get('/login', (req, res) => {
    res.send(`
    <h1>Login</h1>
    <form action="/login" method="post">
        <div>
            <label>Username:</label>
            <input type="text" name="username"/>
        </div>
        <div>
            <label>Password:</label>
            <input type="password" name="password"/>
        </div>
        <div>
            <input type="submit" value="Log In"/>
        </div>
    </form>
    <form method="GET" action="/success">
    <button type="submit">Success page</button>
    </form>
    
    
    `)
})


app.post('/login',

    passport.authenticate('local', {    successRedirect: '/success',
                                        failureRedirect: '/fail'})


)


// app.get('/register', function(req, res) {
 

//     res.send(
//         ` 
//         <h1>Registration</h1>
//         <form action="/register" method="POST">
//           <input type="text" name="username" />
//           <input type="text" name="password" />
//           <input type="submit" />
//         </form>
//         `
//     ); 
    
// });

// app.post('/register',function(req,res){

//     let username = req.body.username;
//     // hashing the password
//     let password = bcrypt.hashSync(req.body.password,8);
  
  
//     users.push({ username : username, password : password});
//     console.log(users);
//     res.redirect('/login');
//   });

app.get('/success', (req, res) => {

    if (!req.isAuthenticated()) {
        res.redirect('/login');
        return
    }

    res.send(`
        <h1>Success...</h1>
        <form method="GET" action="/login">
        <button type="submit">login page</button>
        </form>
        <form method="GET" action="/logout">
        <button type="submit">logout</button>
        </form>
    `)
})

app.get('/successtest', (req, res) => {

    if (!req.isAuthenticated()) {
        res.redirect('/login');
        return
    }

    res.send(`
        <h1>Success again...</h1>
    `)
})

app.get('/fail', (req,res) => {

    res.send(`
        <h1>Fail...</h1>

        <form method="GET" action="/login">
        <button type="submit">login page</button>
        </form>
    `)
})


app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/login');
  });



passport.use(new localStrategy(
    function(username, password, done) {
        User.findOne({
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


// passport.use(new localStrategy(

//     function (username, password, done) {

//         let user = users.find((user) => {
//             return (user.username == username && bcrypt.compareSync(password, user.password))
//         });

//         if (!user) {
//             return done(null, false, { message: "Incorrect credentials" });
//         }

//         return done(null, username)
//     }
// ))


passport.serializeUser(function(user,done){
    done(null,user.dataValues.id);
  })
  
  // deserialize
passport.deserializeUser(function(user,done){
        console.log('Deserialize user called.');
        return done(null, { firstName: 'Foo', lastName: 'Bar' });
  })




const port = 4444
app.listen(port, () => {

    console.log('Server running on ' + port)
})