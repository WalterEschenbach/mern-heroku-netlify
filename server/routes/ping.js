const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('PING!')
})
router.post('/', (req, res) => {
    console.log('body', req.body)
    const test = req.body
    const newPing = new Ping(test)

    newPing.save().then(() => {
        console.log("PING Successful in MongoDB!")
        res.send('PING SUCCESFUL!')

    }).catch((error) => {
        console.log('Error:', error)
    })
})

module.exports = router;