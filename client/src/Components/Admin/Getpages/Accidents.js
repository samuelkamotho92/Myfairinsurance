import React from 'react'
import {useState,useEffect} from 'react';
function Accidents(props) {
    const [data,setData] = useState();
    useEffect(()=>{
        const id = props.formId;
        console.log(props.formId)
          const getPersonal = async ()=>{
        const baseUrl =
        `http://localhost:8080/api/v1/admin/accidentsDetails`
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
      <p>Accidents details</p>
      {data.getPagedata.map((item)=>(
        <div className='' key={item._id}>
  <div>
   <p>createdOn:</p>    
   <p>Createdby:{item.emailUser}</p>     
    </div>
    <div>
  <div>Date Occurence:{item.dateOccurence}</div>
  <div>Time:{item.time}</div>
  <div>place:{item.place}</div>
  <div>YourLocation:{item.yourLocation}</div>
  <div>Position Vehicle:{item.positionVehicle}</div>
  <div>Width of Street:{item.widthStreet}</div>
  <div>Speed Before:{item.speedBefore}</div>
  <div>Speed During:{item.speedDuring}</div>
  <div>Was vehicle Locked:{item.vehicleLocked}</div>
  <div>Installed antitheft:{item.antitheft}</div>
  <div>Nature of Accident{item.natureAccident}</div>
  <div>Cause of Accident:{item.causeAccident}</div>
  <div>sketch of Scene:{item.sketchScene}</div>
    </div>
          </div>
      ))}
    </div>
  )
      }else{
        return (
          <div>
            <p>
            No details found for page Four
            </p>
          </div>
        )
      }
}

export default Accidents