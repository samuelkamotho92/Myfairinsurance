import React from 'react'
import {useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import PersonalDetails from './Getpages/Personaldetails';
import Vehicledetails from './Getpages/vehicleDetails';
import Driverdetails from './Getpages/Driver';
import Accidentdetails from './Getpages/Accidents';
import Damagesdetails from './Getpages/Damagesdetails';
function formUser(props) {
    const location = useLocation();
    const id = location.state;
    const myIdentifier = id.formId;
console.log(myIdentifier);
useEffect(()=>{
    const url = `http://localhost:8080/api/v1/admin/formdatas`

},[props.id])
  return (
    <div>
<p>Individual Details</p>
<div style={{margin:'20px auto'}}>
<PersonalDetails formId={myIdentifier}/>
</div>
<div style={{margin:'20px auto'}}>
<Vehicledetails formId={myIdentifier}/>
</div >
<div style={{margin:'20px auto'}}>
<Driverdetails formId={myIdentifier}/>
</div>
<div  style={{margin:'20px auto'}}>
<Accidentdetails formId={myIdentifier}/>
</div>
<div>
  <Damagesdetails formId={myIdentifier}/>
</div>
    </div>
  )
}

export default formUser