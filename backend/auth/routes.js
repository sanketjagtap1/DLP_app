const express = require('express');
const router = express.Router();
const userController = require('./controller')

router.post('/login', userController.validateUser);


module.exports = router;