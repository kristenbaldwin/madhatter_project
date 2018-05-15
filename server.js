const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const app = express();

let users = [];

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
    
    
    `)
})


app.post('/login',

    passport.authenticate('local', {    successRedirect: '/success',
                                        failureRedirect: '/fail'})


)

app.get('/success', (req, res) => {

    if (!req.isAuthenticated()) {
        res.redirect('/login');
        return
    }

    res.send(`
        <h1>Success...</h1>
    `)
})

app.get('/fail', (req,res) => {

    res.send(`
        <h1>Fail...</h1>
    `)
})









passport.use(new localStrategy(

    function (username, password, done) {

        let user = users.find((user) => {
            return (user.username == username && bcrypt.compareSync(password, user.password))
        });

        if (!user) {
            return done(null, false, { message: "Incorrect credentials" });
        }

        return done(null, username)
    }
))


passport.serializeUser(function(user,done){
    done(null,user);
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