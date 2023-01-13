const express = require('express');
const Course = require('./model')
const mongoose = require('mongoose')
const { uuid } = require('uuidv4');
const bcrypt = require("bcrypt")


exports.createCourse = (req, res, next) => {

    console.log(req.body.courseName)

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

    course.save()
    .then(result=>{
        console.log(result)
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
