module.exports = function (app, db) {

    app.post('/api/create_founders', (req, res) => {
        for (var i = 0; i < 11; i++) {
            db.founders.create({
                question: req.body.data[i].question,
                answer: req.body.data[i].answer,
                opp_id: req.body.data[i].opp_id,
            })
        }
    })
}