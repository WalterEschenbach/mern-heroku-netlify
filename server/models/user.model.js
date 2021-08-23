const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: { type: String },
    password: { type: String }
}, {
    timestamps: true
})

const User = mongoose.model('users', userSchema);

module.exports = User;