import React from 'react';
import {useState,useEffect} from 'react';
function Driver(props) {
    const [data,setData] = useState();
    //search a member and get detail
    useEffect(()=>{
      const id = props.formId;
      console.log(props.formId)
        const getPersonal = async ()=>{
      const baseUrl =
      `http://localhost:8080/api/v1/admin/driverdetails`
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
    <p>Driver details</p>
    {data.getPagedata.map((item)=>(
      <div className='' key={item._id}>
<div>
<p>Name of Driver:{item.namePers}</p>
 <p>createdOn:</p>    
 <p>Createdby:{item.emailUser}</p>     
  </div>
  <div>
<div>Address:{item.address}</div>
<div>age:{item.age}</div>
<div>occupation:{item.occupation}</div>
<div>license Number:{item.number}</div>
<div>date of Issue:{item.dateofIssue}</div>
<div>Place of issue:{item.placeIssue}</div>
<div>Date expiry:{item.dateofExpiray}</div>
<div>Renewal no:{item.renewalNo}</div>
<div>Valid upto:{item.validUpto}</div>
<div>typeLicense:{item.typeLicense}</div>
<div>statusDriver:{item.statusDriver}</div>
<div>driverProsecuted:{item.driverProsecuted}</div>
<div>priorAccident:{item.priorAccident}</div>
<div>driver has Insurance:{item.driverInsurance}</div>
<div>driverExpirience:{item.driverExpirience}</div>
<div>anyotherInsurance:{item.anyotherInsurance}</div>
<div>sobberness:{item.sobberness}</div>
  </div>
        </div>
    ))}
  </div>
)
    }else{
      return (
        <div>
          <p>
          No details found for page two
          </p>
        </div>
      )
    }
}

export default Driver