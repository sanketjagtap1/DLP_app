const express = require('express');
const router = express.Router();

const teacherController = require('./controller.js')

router.post('/createCourse', teacherController.createCourse);

module.exports = router;