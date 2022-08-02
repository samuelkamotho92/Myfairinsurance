import React from 'react'
import {useState,useEffect} from 'react';
function Damagesdetails(props) {
    const [data,setData] = useState();
    useEffect(()=>{
        const id = props.formId;
        console.log(props.formId)
          const getPersonal = async ()=>{
        const baseUrl =
        `http://localhost:8080/api/v1/admin/damagesDetails`
              const resp = await fetch(baseUrl,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                  id
              })
              });
              const newdata = await resp.json();
              setData(newdata)
                  };
                  getPersonal();
      },[props.id])
      if(data){
        console.log(data);
  return(
    <div>
      <p>Damages details</p>
      {data.getPagedata.map((item)=>(
        <div className='' key={item._id}>
  <div>
   <p>createdOn:</p>    
   <p>Createdby:{item.emailUser}</p>     
    </div>
    <div>
  <div>Damages Details:{item.damagesDetails}</div>
  <div>Cost Repairs:{item.costRepairs}</div>
  <div>Point of Inspection:{item.pointofInspection}</div>
  <div>Repair instruction:{item.repairInstruction}</div>
  <div>Position Vehicle:{item.positionVehicle}</div>
  <div>Name of Mechanic:{item.nameofMechanic}</div>
  <div>Address of Mechanic:{item.addressofMechanic}</div>
  <div>Any Estimate:{item.anyEstimate}</div>
  <div>Estimate Form:{item.estimateForm}</div>
    </div>
          </div>
      ))}
    </div>
  )
      }else{
        return (
          <div>
            <p>
            No details found for page five
            </p>
          </div>
        )
      }
}

export default Damagesdetails