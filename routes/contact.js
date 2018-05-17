module.exports = function (app, db) {

    app.post('/api/create_contact', (req, res) => {
        db.contact.create({
            phone: req.body.phone,
            email: req.body.email,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            postal: req.body.postal,
            country: req.body.country,
            website: req.body.website,
            linkedin: req.body.linkedin,
            opp_id: req.body.opp_id,
        })
    })
}