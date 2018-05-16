module.exports = function (app, db) {

    app.post('/api/create_founders', (req, res) => {
        db.founders.create({
            question: req.body.question,
            answer: req.body.answer,
            opp_id: req.body.opp_id,
        })
    })
}