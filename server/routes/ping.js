const router = require('express').Router();

router.get('/', (req, res) => {
    if (req.user) {
        res.send(req.user)
    } else {
        res.send("not logged in")
    }
})

module.exports = router;