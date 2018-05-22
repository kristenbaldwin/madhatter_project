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
            }), res.json(opportunity.id)

            //     app.get('/api/get_opp_id', (req, res) => {
            //     res.json(opportunity.id)
            // })
        })
    })
    
    // testing only
    app.get('/api/get_opportunity', (req, res) => {
        let userObject = []
        let oppList = []
        opp = {
            name: 'Apple',
            status: 'active'
        }
        opp2 = {
            name: 'Apple',
            status: 'pending'
        }
        opp3 = {
            name: 'Apple',
            status: 'pending'
        }
        oppList.push(opp);
        oppList.push(opp2);
        oppList.push(opp3);
 
        // userObject.opps = oppList;
 
        res.json(oppList)
    })

}//end module