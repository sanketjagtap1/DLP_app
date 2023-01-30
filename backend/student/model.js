const mongoose = require('mongoose');

const enroll = new mongoose.Schema({
    _id: String,
    courseId: String,
    studentId: String,
    email: String,
    amount: String,
    cardNo: String,
    paymentStatus: Boolean,
    createDate: String
})


const Enroll = mongoose.model('Enroll', enroll)

const joinLect = new mongoose.Schema({
    _id: String,
    lectId: String,
    studentId: String,
    joinedTime: String
})
const JoinLect = mongoose.model('JoinLect', joinLect)

module.exports = {
    Enroll: Enroll,
    JoinLect: JoinLect
  }