import './App.css';
import React  from 'react';
import {  useState } from "react";
import axios from 'axios';
import Table from './Table';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EditComp from './EditComp';
function App() {

  const [nme, setNme] = useState()
  const [rollNo, setRollNo] = useState()
  const [branch, setBranch] = useState()

  /////////////////////////////////////////////////////////////////////////
  const subData = (e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:8087', {   //POST
      name: nme,
      rollNo: rollNo,
      branch: branch
    }).then((res) => {
      console.log(res)
    })

  }
  // /////////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////
  return (
      <BrowserRouter>
       
        <Routes>
          <Route path='/' exact element={<Table  subData={subData} handelChange={handelChange}/>}/>
          <Route path='/edit' exact element={<EditComp nme={nme} branch={branch} rollNo={rollNo} setNme={setNme} setRollNo={setRollNo} setBranch={setBranch} />}/> 
        </Routes>
      </BrowserRouter>
  );
}

export default App;
