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

const enroll = new mongoose.Schema({
    _id: String,
    courseId: String,
    studentId: String,
    amount: String,
    cardNo: String,
})

module.exports = mongoose.model('Course', courseSchema)
module.exports = mongoose.model('Enroll', enroll)