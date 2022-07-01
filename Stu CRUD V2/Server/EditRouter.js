const router = require('express').Router()
const studentSch =require('./studentSchema')

router.post('/',async (req,res)=>{
    let studentOne= await  studentSch.findOne({_id:req.body._id})
   res.json(studentOne)
    
  })
router.put('/:id',async (req,res)=>{
    console.log(req.body)
    let  studentOne= await  studentSch.findById(req.params.id)
   await studentOne.updateOne(req.body)
   let studentArr= await  studentSch.find({})
   res.json(studentArr)
   
  })

  module.exports = router