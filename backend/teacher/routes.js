const express = require('express');
const router = express.Router();

const teacherController = require('./controller.js')


router.post('/getCourseCount', teacherController.getCourseCount);
router.post('/getLectCount', teacherController.getLectCount);
router.post('/getCourses', teacherController.getCourses);
router.post('/getLect', teacherController.getLect);
router.post('/createCourse', teacherController.createCourse);
router.post('/addLecture', teacherController.addLecture);
router.post('/updateLecture', teacherController.updateLecture);
router.post('/deleteCourse', teacherController.deleteCourse)

router.post('/getCourseEnrollDetails', teacherController.getCourseEnrollDetails);

module.exports = router;