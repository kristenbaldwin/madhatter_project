module.exports = function (app, db) {

    app.post('/api/create_opportunity', (req, res) => {
        let opp_id = ''
        db.opportunities.create({
            name: req.body.name,
            founder: req.body.founder,
            est: req.body.est,
            industry: req.body.industry,
            attachments: req.body.attachments,
            created_by: req.body.created_by,
        }).then(db.opportunities.findOne({
            where: {
                name: req.body.name
            }
        })).then(opportunity => {
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
                opp_id: opportunity.id,
            })
            // .then(db.contact.create({
            //         phone: req.body.phone,
            //         email: req.body.email,
            //         address: req.body.address,
            //         city: req.body.city,
            //         state: req.body.state,
            //         postal: req.body.postal,
            //         country: req.body.country,
            //         website: req.body.website,
            //         linkedin: req.body.linkedin,
            //         // opp_id: req.body.opp_id,
            // }))
        })
    })


    // testing only
    app.get('/api/get_opportunity', (req, res) => {
        let userObject = [];
        var oppList = [];
        var opp = {
            name: 'Apple',
            status: 'active'
        }
        var opp2 = {
            name: 'Apple',
            status: 'pending'
        }
        var opp3 = {
            name: 'Apple',
            status: 'pending'
        }
        for (var i = 0; i < 3; i++) {
            var opp = {
                name: 'Apple',
                status: 'pending'
            }
            oppList.push(opp)
        }

        userObject.opps = oppList;

        res.json(oppList)
    })

}//end module