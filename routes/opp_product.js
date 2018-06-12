module.exports = function (app, db) {

    app.post('/api/create_opp_product', (req, res) => {
        for (var i = 0; i < 6; i++) {
            db.opp_product.create({
                question: req.body.data[i].question,
                answer: req.body.data[i].answer,
                opp_id: req.body.data[i].opp_id,
            })
        }
        res.json({status: 'OK'});
    })
}