const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: String,
    name: String,
    mobile: Number,
    email: String,
    password: String,
    userType: String,
    gender: String
})

module.exports = mongoose.model('User', userSchema)