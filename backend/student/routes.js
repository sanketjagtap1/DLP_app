const express = require('express');
const router = express.Router();
const studentController = require('./controller')


// create Account
router.post('/register', studentController.createStudent);

router.post('/deleteTeacher', studentController.deleteTeacher)

// enroll Course
router.post('/enrollCourse', studentController.enrollCourse);

// get lecture using student id
router.post('/getLectureList', studentController.getLectureList)

// get lecture using student id
router.post('/joinLect', studentController.joinLect)

// get lecture using student id
router.get('/lectJoinHistory', studentController.lectJoinHistory)

module.exports = router;