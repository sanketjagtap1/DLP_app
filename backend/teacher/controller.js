const express = require('express');
const { Course, Lecture } = require('./model')
const { Enroll } = require('../student/model')
const mongoose = require('mongoose')
const { uuid } = require('uuidv4');
const bcrypt = require("bcrypt")
const nodemailer = require("nodemailer");


exports.createCourse = (req, res, next) => {

    console.log(req.body)

    const course = new Course({
        _id: uuid(),
        courseName: req.body.courseName,
        teacherId: req.body.teacherId,
        startData: req.body.startData,
        fees: req.body.fees,
        duration: req.body.duration,
        createBy: req.body.createBy,
        createDate: new Date()
    })

    console.log(course)

    course.save()
        .then(result => {
            // console.log(result)
            res.status(200).json({
                course: result,
                message: "Success"
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: 'Course Creation Failed' });
        })

};


exports.addLecture = (req, res, next) => {
    // console.log(req.body)
    const lect = new Lecture({
        _id: uuid(),
        courseId: req.body.courseId,
        lectDate: req.body.lectDate,
        startTime: req.body.startTime,
        createDate: new Date()
    })

    console.log(lect)

    Enroll.find({ courseId: req.body.courseId })
        .then(result => {
            result.forEach(element => {
                // send email function
                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'sanketjagtapsj0101@gmail.com',
                        pass: 'qtsbtvmimdsiartx'
                    }
                });
                var mailOptions = {
                    from: 'sanketjagtapsj0101@gmail.com',
                    to: element.email,
                    subject: 'Lect Details',
                    text: `         Your Lecture Was scheduled On  ${req.body.lectDate} At ${req.body.startTime}.
Meeting Code is:

${lect._id}
                `
                }

                // send mail 
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error)
                    } else {
                        console.log('Email sent:' + info.response)
                    }
                });

            });
            // save lecture
            lect.save()
                .then(result => {
                    console.log(result)
                    res.status(200).json({
                        course: result,
                        message: "Lecture Added Succesfully"
                    })
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({
                        course: result,
                        message: "Lecture schedule failed"
                    })
                });
        })
    console.log(lect)
}


exports.updateLecture = (req, res, next) => {
    // console.log(req.body)
    async function findLectData() {
        const lectData = await Lecture.findById(req.body.id)
        lectData.lectDate = req.body.lectDate
        lectData.startTime = req.body.startTime
        console.log(lectData)

        await lectData.save().then((result) => {
            console.log(result)
            res.status(200).json({
                message: "Lecture Updated Succesfully"
            })
        }).catch((err) => {
            console.log(err)
        })

        await Enroll.find({ courseId: req.body.courseId })
            .then((result) => {
                result.forEach(element => {
                    // send email function
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'sanketjagtapsj0101@gmail.com',
                            pass: 'qtsbtvmimdsiartx'
                        }
                    });
                    var mailOptions = {
                        from: 'sanketjagtapsj0101@gmail.com',
                        to: element.email,
                        subject: 'Lecture Rescheduled',
                        text: `         Your Lecture Was Rescheduled On  ${req.body.lectDate} At ${req.body.startTime}.
    Meeting Code is:
    
    ${req.body.id}
                    `
                    }


                    // send mail 
                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            console.log(error)
                        } else {
                            console.log('Email sent:' + info.response)
                        }
                    });
                })
            });

        return lectData
    }
    findLectData();


    //             // save lecture
    //             lect.updateOne({_id: req.body.id})
    //             .then(result=>{
    //                 // console.log(result)
    //                 res.status(200).json({

    //                     message: "Lecture Updated Succesfully"
    //                 })
    //             })
    //             .catch(err=>{
    //                 console.log(err)
    //                 res.status(500).json({

    //                     message: "Lecture Updation failed"
    //                 })
    //             });
    //         })
    // console.log(lect)
}

