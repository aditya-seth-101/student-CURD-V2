import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {useNavigate,useLocation} from "react-router-dom"



const EditComp = (props) => {

    const [nme, setNme] = useState()
  const [rollNo, setRollNo] = useState()
  const [branch, setBranch] = useState()
    const navigate =useNavigate()
    const location = useLocation();
    useEffect(()=>{
        axios.post('http://127.0.0.1:8087/edit',{_id:location.state._id}).then(res=> {
            props.setNme(res.data.name)
            props.setRollNo(res.data.rollNo)
            props.setBranch(res.data.branch)
        })
    })
//////////////////////////////////////////////////////////////////////////////////////////////
    const updtData = (e)=>{
        axios.put(`http://127.0.0.1:8087/edit/${location.state._id}`,{  name: nme,
        rollNo: rollNo,
        branch:branch}).then(res=>{
            navigate('/')
        })
    }
//////////////////////////////////////////////////////////////////////////////////////////////
const handelChange = (e) => {
    switch (e.target.id) {
      case "nme":
        setNme(e.target.value)
        break;

      case "rollNo":
        setRollNo(e.target.value)
        break;

      case "branch":
        setBranch(e.target.value)
        break;

      default:
        break;
    }
  }
/////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div>
        <div className="col-xs-3 form-inline">
      <input type="text" className="form-control "  defaultValue={props.nme} placeholder='Enter Name' id="nme" onChange={handelChange} /> &emsp;
      <input type="text" className="form-control " defaultValue={props.rollNo} placeholder='Enter Roll Number' id="rollNo" onChange={handelChange} /> &emsp;
      <input type="text" className="form-control "  defaultValue={props.branch }placeholder='Enter Branch' id="branch" onChange={handelChange} /> &emsp;
      <button type="button" onClick={updtData} className="btn btn-primary">Update</button>
    </div>
   
    </div>
  )
}

export default EditComp