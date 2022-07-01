const mongoose = require('mongoose')
const studentSch =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rollNo:{
        type:Number,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
})
module.exports = mongoose.model('studentsV2',studentSch)