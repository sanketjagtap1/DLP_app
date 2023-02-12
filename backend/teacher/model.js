const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    _id: String,
    courseName: String,
    teacherId: String,
    startData: String,
    fees: Number,
    duration: Number,
    createDate: String
})
const Course=  mongoose.model("Course", courseSchema);

const lectureSchema = new mongoose.Schema({
    _id: String,
    courseId: String,
    teacherId: String,
    title: String,
    lectDate: String,
    startTime: String,
    createDate: String
})

const Lecture=  mongoose.model("Lecture", lectureSchema);

module.exports = {
    Course: Course,
    Lecture: Lecture
  }