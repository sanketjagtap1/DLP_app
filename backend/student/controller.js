const express = require('express');
const User = require('../auth/model')
const mongoose = require('mongoose')
const { uuid } = require('uuidv4');
const bcrypt = require("bcrypt")


exports.createStudent = (req, res, next) => {

    // hash the password
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        console.log(hash)
        const user = new User({
            _id: uuid(),
            name: req.body.name,
            mobile: req.body.mobile,
            email: req.body.email,
            password: hash,
            userType: req.body.userType,
            gender: req.body.gender
        });

        // check email is exists
        User.find({ email: req.body.email })
            .then(result => {
                console.log(result)
                if (result == '') {
                    // check email is exists
                    User.find({ mobile: req.body.mobile })
                        .then(result => {
                            if (result == '') {
                                // insert data
                                user.save()
                                    .then(result => {
                                        console.log(result);
                                        res.status(200).json({
                                            newStudent: result
                                        })
                                    })
                                    // catching error while creating student
                                    .catch(err => {
                                        console.log(err)
                                        res.status(500).json({ error: 'User Registration Failed' });
                                    })
                            } else {
                                res.status(500).json({ error: 'Mobile No Already Exists' });
                            }
                        })
                } else {
                    res.status(500).json({ error: 'Email Already Exists' });
                }
            })
        // store hash in the database
    });


};
