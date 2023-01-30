const express = require('express');
const User = require('../auth/model')
const { Enroll } = require('./model')
const { JoinLect } = require('./model')
const { Lecture } = require('../teacher/model')
const Course = require('../teacher/model')
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


exports.enrollCourse = (req, res, next) => {
    console.log(req.body.courseName)
    const enroll = new Enroll({
        _id: uuid(),
        courseId: req.body.courseId,
        studentId: req.body.studentId,
        email: req.body.email,
        amount: req.body.amount,
        cardNo: req.body.cardNo,
        paymentStatus: true,
        createDate: new Date()
    })

    // check user has already enroll for course
    Enroll.find({ $and: [{ courseId: req.body.courseId }, { studentId: req.body.studentId }] })
        .then(result => {
            if (result == '') {
                enroll.save()
                    .then(result => {
                        console.log(result)
                        res.status(200).json({
                            enroll: result,
                            message: "Success"
                        })
                    })
                    .catch(err => {
                        console.log(err)
                        res.status(500).json({ error: 'Course Enrollment Failed' });
                    })
            }
            else {
                res.status(500).json({ error: 'Course Already Purchesed' });
            }
        })
};


// get lectures by studentId
exports.getLectureList = (req, res, next) => {
    console.log(req.body)
    Enroll.find({ studentId: req.body.studentId })
        .then((result) => {
            console.log(result)

            let courseData = []

            result.forEach(element => {
                courseData.push(element.courseId)
            });

            console.log("course that student enroll---->", courseData)

            Lecture.find({ courseId: courseData })
                .then((result) => {
                    console.log("Lecture for student------>", result)
                    res.status(200).json({
                        lectData: result,
                        message: "Success"
                    })

                })
                .catch((err) => {
                    console.log(err)
                })


        })
        .catch((err) => {
            console.log(err)
        })
}


// join meeting
exports.joinLect = (req, res, next) => {
    const joinLect = new JoinLect({
        _id: uuid(),
        lectId: req.body.lectId,
        studentId: req.body.studentId,
        joinedTime: new Date()
    })

    joinLect.save()
    .then((result)=>{
        console.log(result)
        res.status(200).json({
            message: "Success"
        })
    })
    .catch((err)=>{
        res.status(500).json({ error: 'Lecture Not Existes' });
    })
}

// lect Join History
exports.lectJoinHistory=(req, res, next)=>{
    JoinLect.find({studentId: req.body.studentId})
    .then((result)=>{
        console.log(result)
        res.status(200).json({
            lectJoinData: result,
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}