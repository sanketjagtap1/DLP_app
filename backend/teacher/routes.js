const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        msg: 'This is teacher get'
    })
})

router.post('/', (req, res, next)=>{
    res.status(200).json({
        msg: 'This is teacher post'
    })
})


module.exports = router;