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
    app.get('/api/get_opportunity', (req,res) => {
        pendingOpp = ['pending','pending2']
        approvedOpp = ['approved']

        dummy = {
            pending: pendingOpp,
            approved: approvedOpp
        }
        res.json(dummy)
    })
}