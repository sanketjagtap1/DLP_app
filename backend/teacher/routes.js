const express = require('express');
const router = express.Router();

const teacherController = require('./controller.js')


router.post('/getCourseCount', teacherController.getCourseCount);
router.post('/createCourse', teacherController.createCourse);
router.post('/addLecture', teacherController.addLecture);
router.post('/updateLecture', teacherController.updateLecture);


module.exports = router;