// <--------IMPORTS--------------------------------------------------------------------------------------------------------------------------------------------------------->
const express = require('express')
const app = express();
const passport = require("passport");
const session = require("express-session");
const passportLocal = require("passport-local").Strategy;
const PORT = process.env.PORT || 3030;
require('dotenv').config()

// <--------CONNECT TO MONGODB--------------------------------------------------------------------------------------------------------------------------------------------------------->
const mongoose = require('mongoose');
const connectionURL = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('connected to DB'))
    .catch(error => console.log(error))

// <--------MIDDLEWARE--------------------------------------------------------------------------------------------------------------------------------------------------------->

app.use(express.json())
app.set('trust proxy', 1)

// CORS //
const corsOptions = {
    origin: [process.env.DOMAIN_CLIENT, process.env.DOMAIN_SERVER, "https://agitated-aryabhata-40a3a9.netlify.app", "https://mern-heroku-netlify-server.herokuapp.com", "http://localhost:3000"],
    methods: ['GET', 'PUT', 'POST', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
    preflightContinue: true
}
const cors = require('cors')
app.use(cors(corsOptions))

// Session and Authentication //
app.use(
    session({
        secret: "secretcode",
        resave: false, // <---- unsure of this setting, need to research
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
            domain: "https://mern-heroku-netlify-server.herokuapp.com/",
            sameSite: "none"
        }
    })
);
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport-config")(passport);


// <--------ROUTES--------------------------------------------------------------------------------------------------------------------------------------------------------->

app.get('/', (req, res) => {
    res.send(req.user)
})

const authRouter = require('./routes/auth')
const pingRouter = require('./routes/ping')

app.use('/auth', authRouter);
app.use('/ping', pingRouter);

// <--------HOST & PORT--------------------------------------------------------------------------------------------------------------------------------------------------------->

app.listen(PORT, () => {
    console.log("Server is running:", `http://localhost:${PORT}`)
})