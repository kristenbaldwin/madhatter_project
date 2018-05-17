module.exports = function (app, db) {

    app.post('/api/create_opportunity', (req, res) => {
        db.opportunities.create({
            name: req.body.name,
            founder: req.body.founder,
            est: req.body.est,
            industry: req.body.industry,
            attachments: req.body.attachments,
            created_by: req.body.created_by,
            approved_by: req.body.approved_by,
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
}