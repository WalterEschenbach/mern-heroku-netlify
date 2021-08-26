const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
const router = require('express').Router();

const isAuthenticated = (req, res, next) => {
    if (req.user)
        return next();
    else
        return res.status(401).json({ error: 'User not authenticated' })
}

router.post("/signin", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
            req.logIn(user, (err) => {
                if (err) throw err;
                res.status(200).send(user);
                console.log(req.user);
            });
        }
    })(req, res, next);
});

router.post("/signup", (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("User Already Exists");
        if (!doc) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new User({
                first: req.body.first,
                last: req.body.last,
                username: req.body.username,
                password: hashedPassword,
                email: req.body.username,
            });
            await newUser.save();
            res.send("User Created");
        }
    });
});


router.get('/checkauth', function (req, res) {
    res.status(200).json(req.user);
});


module.exports = router;