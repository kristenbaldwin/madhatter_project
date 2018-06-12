module.exports = function (app, db) {

    app.post('/api/create_legal', (req, res) => {
        for (var i = 0; i < 4; i++) {
            db.legal.create({
                question: req.body.data[i].question,
                answer: req.body.data[i].answer,
                opp_id: req.body.data[i].opp_id,
            })
        }
        res.json({status: 'OK'});
    })
}