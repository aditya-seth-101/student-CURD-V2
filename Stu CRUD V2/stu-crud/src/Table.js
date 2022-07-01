import React from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";
const Table = (props) => {
    const [tableData, setTableData] = useState()
    const [tableMain, setTableMain] = useState()
    
    const navigate = useNavigate();

    const delSubmit = (e) => {                     //DELETE
        axios.delete('http://127.0.0.1:8087', {
          data: { _id: e.target.name }
        })
        
        console.log(e.target.name)
      }
    
    
      const editSubmit = (e) => {    
        navigate('/edit',{state:{_id:e.target.name}})

      }
    


    useEffect(() => {
        axios.get('http://127.0.0.1:8087').then(  //GET
          (res) => {
            setTableData(res.data)
          }
        ).catch(err => console.log(err)).then(
          () => {
            let myTable = tableData.map((item, index) => {
              return (<tr key={item._id}><td>{index + 1}</td><td>{item.name}</td><td>{item.rollNo}</td><td>{item.branch}</td><td><input type="button" value="Edit" className="btn btn-warning" name={item._id} onClick={editSubmit} />&emsp;<input type="button" value="Delete" className="btn btn-danger" name={item._id} onClick={delSubmit} /></td>
              </tr>)
    
            })
            setTableMain(myTable)
          }
        ).catch(err => console.log(err))
      }, [tableData])
  return (
    <div className="container-fluid">
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Roll no.</th>
          <th scope="col">Branch</th>

        </tr>
      </thead>
      <tbody>{tableMain}</tbody>
    </table>
    <div className="col-xs-3 form-inline">
      <input type="text" className="form-control " placeholder='Enter Name' id="nme" onChange={props.handelChange} />
      <input type="text" className="form-control " placeholder='Enter Roll Number' id="rollNo" onChange={props.handelChange} />
      <input type="text" className="form-control " placeholder='Enter Branch' id="branch" onChange={props.handelChange} />
      <button type="button" onClick={props.subData} className="btn btn-primary">Add to Table</button>
    </div>
    
  </div>
  )
}

export default Table