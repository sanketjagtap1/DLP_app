const express = require('express');
const User = require('../auth/model')
const {Course} = require('../teacher/model')
const mongoose = require('mongoose')
const { uuid } = require('uuidv4');
const bcrypt = require("bcrypt")


exports.getUserList = (req, res, next) => {
    User.find( { userType: 'Teacher' })
        .then(result => {
            console.log(result)
            res.status(200).json({
                allStudents: result,
                message: "Success"
            })
        }).catch(err => {
            console.log(err)
        })
};

exports.getCourseList = (req, res, next) => {
    Course.find()
        .then(result => {
            console.log(result)
            res.status(200).json({
                allCourses: result,
                message: "Success"
            })
        }).catch(err => {
            console.log(err)
        })
};

exports.getTeacherCount = (req, res, next) => {
    User.count({ userType: 'Teacher' })
        .then(result => {
            console.log(result)
            res.status(200).json({
                teacherCount: result,
                message: "Success"
            })
        }).catch(err => {
            console.log(err)
        })
};

exports.getStudentCount = (req, res, next) => {
    User.count({ userType: 'Student'})
        .then(result => {
            console.log(result)
            res.status(200).json({
                studentCount: result,
                message: "Success"
            })
        }).catch(err => {
            console.log(err)
        })
};

exports.getCourseCount = (req, res, next) => {
    Course.count()
        .then(result => {
            console.log(result)
            res.status(200).json({
                courseCount: result,
                message: "Success"
            })
        }).catch(err => {
            console.log(err)
        })
};

