const express = require('express')
const app = express();

const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => {
    res.send('Server up and Running...')
})

app.listen(PORT, () => {
    console.log("Server is running:", `http://localhost:${PORT}`)
})