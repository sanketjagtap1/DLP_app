const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        msg: 'This is admin get'
    })
})

router.post('/', (req, res, next)=>{
    res.status(200).json({
        msg: 'This is admin post'
    })
})


module.exports = router;