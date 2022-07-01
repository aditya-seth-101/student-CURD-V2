const express = require('express')
const app = express()
const mongoose = require('mongoose')
const student = require('./StudentRoute')
const stuEdit = require('./EditRouter')
const cors= require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
const studentRoute = app.use('/',student)
const studentEdit = app.use('/edit',stuEdit)
app.listen(8087)
mongoose.connect('mongodb://localhost:27017/mydb1')
