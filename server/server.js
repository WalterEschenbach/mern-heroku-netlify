const express = require('express')
const app = express();

const PORT = process.env.PORT || 3030;

// Connect to MongoDB
const mongoose = require('mongoose');
const connectionURL = process.env.MONGODB_CONNECTION_STRING || "#";

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

app.listen(PORT, () => {
    console.log("Server is running:", `http://localhost:${PORT}`)
})