const express = require('express');
const User = require('../auth/model')
const mongoose = require('mongoose')
const { uuid } = require('uuidv4');
const bcrypt = require("bcrypt")


exports.getUserList = (req, res, next) => {

    User.find( {$or: [{ userType: 'Student' },{ userType: 'Teacher' }]} )
    .then(result=>{
        console.log(result)
        res.status(200).json({
            allStudents: result,
            message: "Success"
        })
    }).catch(err=>{
        console.log(err)
    })
};

exports.getCourseList = (req, res, next) => {

    Course.find( {$or: [{ userType: 'Student' },{ userType: 'Teacher' }]} )
    .then(result=>{
        console.log(result)
        res.status(200).json({
            allCourses: result,
            message: "Success"
        })
    }).catch(err=>{
        console.log(err)
    })
};
