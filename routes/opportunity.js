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
        })
    })


    // call this in the front end
    app.get('/api/load_opportunities', (req, res) => {
        let allOpportunities = {};
        let foundersSum = 0;
        let legalSum = 0;
        let financialSum = 0;
        let oppProductSum = 0;

        db.opportunities.findAll({
            include: [
                {
                    model: db.contact,
                    attributes: 
                    [   'phone',
                        'email',
                        'address',
                        'city',
                        'state',
                        'postal',
                        'country',
                        'website',
                        'linkedin',
                        'opp_id'    ]
                },
                { model: db.founders, attributes: ['answer'] },
                { model: db.legal, attributes: ['answer'] },
                { model: db.financial, attributes: ['answer'] },
                { model: db.opp_product, attributes: ['answer'] }
            ]
        })
            .then(data => {
                allOpportunities = {
                    data: data
                }

                res.json(allOpportunities);
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