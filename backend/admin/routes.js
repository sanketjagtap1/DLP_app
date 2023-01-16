const express = require('express');
const router = express.Router();

const adminController = require('./controller')

router.get('/getUserList', adminController.getUserList);
router.get('/getTeacherCount', adminController.getTeacherCount);
router.get('/getStudentCount', adminController.getStudentCount);
router.get('/getCourseCount', adminController.getCourseCount);



module.exports = router;