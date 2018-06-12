module.exports = function (app, db) {

    app.get('/api/create_user', (req, res) => {
        db.users.create({
            username: 'test-user',
            password: 'test-pass',
            email: 'test-email',
            role: 'test-role',
        })
        res.json({status: 'OK'});
    })
}