const express = require('express');
const router = express.Router();

const adminController = require('./controller')

router.get('/getUserList', adminController.getUserList);


module.exports = router;