const express = require('express');
const User = require('./model')
const mongoose = require('mongoose')
const bcrypt = require("bcrypt")


exports.validateUser = (req, res, next) => {
    console.log(req.body)

    User.findOne({ email: req.body.email })
        .then(resultData => {
            console.log(resultData)
            bcrypt.compare(req.body.password, resultData.password, function (err, result) {
                if (result) {
                    // password is valid
                    console.log("password match")
                    res.status(200).json([{
                        name: resultData.name,
                        email: resultData.email,
                        userType: resultData.userType
                    }])
                }
                else {
                    console.log("Password Incorrect")
                    res.status(500).json({ error: 'Incorrect Email Or Password' });
                }
            });
        })
        .catch(err => {
            console.log(err)
        })
};
