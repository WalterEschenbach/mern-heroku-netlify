const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    first: { type: String },
    last: { type: String },
    username: { type: String },
    password: { type: String },
    email: { type: String }
}, {
    timestamps: true
})

const User = mongoose.model('users', userSchema);

module.exports = User;