const express = require('express');
const User = require('./model')
const mongoose = require('mongoose')
const bcrypt = require("bcrypt")


exports.validateUser = (req, res, next) => {
    console.log(req.body)

    User.findOne({ email: req.body.email })
        .then(resultData => {
            console.log(resultData)
            if (resultData) {
                    bcrypt.compare(req.body.password, resultData.password, function (err, result) {
                    // password is valid
                    console.log("password match")
                    console.log(resultData)
                    res.status(200).json({
                        id: resultData._id,
                        name: resultData.name,
                        email: resultData.email,
                        mobile: resultData.mobile,
                        userType: resultData.userType
                    })
                })
                }
                else {
                    console.log("Password Incorrect")
                    res.status(202).json({ error: 'Incorrect Email Or Password' });
                }
            })
        .catch(err => {
            console.log(err)
        })
};
