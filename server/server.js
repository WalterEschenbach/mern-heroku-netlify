const express = require('express')
const app = express();

const PORT = process.env.PORT || 3030;

require('dotenv').config()


// CORS Setup
const corsOptions = {
    origin: [process.env.DOMAIN_CLIENT, process.env.DOMAIN_SERVER, "https://agitated-aryabhata-40a3a9.netlify.app/", "https://mern-heroku-netlify-server.herokuapp.com/", "http://localhost:3000"],
    credentials: true,
    headers: {
        "Access-Control-Allow-Origin": "https://agitated-aryabhata-40a3a9.netlify.app/"
    }
}
const cors = require('cors')
app.use(cors(corsOptions))
app.use(express.json())


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

// Routes

app.get('/', (req, res) => {
    res.send('Server up and Running...')
})

app.get('/ping', (req, res) => {
    res.send('PING!')
})

app.listen(PORT, () => {
    console.log("Server is running:", `http://localhost:${PORT}`)
})