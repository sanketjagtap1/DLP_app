// imports
const express = require('express');
const cors = require('cors')
const app = express();

const mongoose = require('mongoose')
const bodyParser = require('body-parser')



// database Connection
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://Sanket_jagtap1:XzI7ta9lXVfAvGvf@cluster0.iz0bg.mongodb.net/DLP?retryWrites=true&w=majority');
mongoose.connection.on('error', err => {
    console.log(`Can't Connect to mongoDB Database`);
});
mongoose.connection.on('connected', connected => {
    console.log(`Connected to mongoDB Database`);
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Routes Import
app.use(cors());



const authRoute = require('./auth/routes')
const adminRoute = require('./admin/routes')
const studentRoute = require('./student/routes')
const teacherRoute = require('./teacher/routes')

app.use('/auth', authRoute);
app.use('/admin', adminRoute);
app.use('/student', studentRoute);
app.use('/teacher', teacherRoute);

// error handeling
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Bad Request'
    });
});

module.exports = app;