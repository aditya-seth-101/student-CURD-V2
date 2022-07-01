const router = require('express').Router()
const studentSch =require('./studentSchema')

router.get('/',async (req,res)=>{
  let studentArr= await  studentSch.find({})
 res.json(studentArr)
})
router.post('/',async (req,res)=>{
    
    let stu= new studentSch({name:req.body.name,rollNo:req.body.rollNo,branch:req.body.branch})
   await stu.save()
   let studentArr= await  studentSch.find({})
   res.json(studentArr)
})

router.delete('/',async (req,res)=>{
  await  studentSch.deleteOne({_id:req.body._id})
  let studentArr= await  studentSch.find({})
  res.json(studentArr)
})



module.exports = router