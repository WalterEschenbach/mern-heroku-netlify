const router = require('express').Router();

let Ping = require('../models/ping.model')

router.get('/', (req, res) => {
    res.send(req.user)
})

router.post('/', (req, res) => {
    console.log('body', req.body)
    const test = req.body
    const newPing = new Ping(test)

    newPing.save().then(() => {
        console.log("PING Successful in MongoDB!")
        res.send(req.user)
    }).catch((error) => {
        console.log('Error:', error)
    })
})

module.exports = router;