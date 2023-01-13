const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    _id: String,
    courseName: String,
    teacherId: String,
    startData: String,
    fees: Number,
    duration: Number,
    createBy: String,
    createDate: String
})

module.exports = mongoose.model('Course', courseSchema)