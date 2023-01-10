const express = require('express');
const router = express.Router();
const studentController = require('./controller')


// create Account
router.post('/register', studentController.createStudent);


module.exports = router;