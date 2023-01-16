const express = require('express');
const router = express.Router();

const teacherController = require('./controller.js')

router.post('/createCourse', teacherController.createCourse);
router.post('/enrollCourse', teacherController.enrollCourse);

module.exports = router;