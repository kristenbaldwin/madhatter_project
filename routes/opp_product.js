module.exports = function (app, db) {

    app.post('/api/create_opp_product', (req, res) => {
        db.opp_product.create({
            question: req.body.question,
            answer: req.body.answer,
            opp_id: req.body.opp_id,
        })
    })
}