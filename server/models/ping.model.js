const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pingSchema = new Schema({
    test: { type: String }
}, {
    timestamps: true
})

const Ping = mongoose.model('Ping', pingSchema);

module.exports = Ping;