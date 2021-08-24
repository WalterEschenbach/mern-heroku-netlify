const express = require('express')
const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3030;

require('dotenv').config()


// CORS Setup
const corsOptions = {
    origin: [process.env.DOMAIN_CLIENT, process.env.DOMAIN_SERVER, "https://agitated-aryabhata-40a3a9.netlify.app", "https://mern-heroku-netlify-server.herokuapp.com", "http://localhost:3000"],
    methods: ['GET', 'PUT', 'POST', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
    preflightContinue: true
}
const cors = require('cors')
app.use(cors(corsOptions))


// Connect to MongoDB
const mongoose = require('mongoose');
const connectionURL = process.env.MONGODB_CONNECTION_STRING;

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('connected to DB'))
    .catch(error => console.log(error))

let Ping = require('./models/ping.model')

// Routes

app.get('/', (req, res) => {
    res.send('Server up and Running...')
})

app.get('/ping', (req, res) => {
    res.send('PING!')
})
app.post('/ping', (req, res) => {
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

app.listen(PORT, () => {
    console.log("Server is running:", `http://localhost:${PORT}`)
})