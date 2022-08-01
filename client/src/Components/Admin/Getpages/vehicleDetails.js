import React from 'react'
import {useState,useEffect} from 'react';
function vehicleDetails(props) {
    const [data,setData] = useState();
    //search a member and get detail
    useEffect(()=>{
      const id = props.formId;
      console.log(props.formId)
        const getPersonal = async ()=>{
      const baseUrl =`http://localhost:8080/api/v1/admin/vehicledetails`
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
    <p>Vehicle details</p>
    {data.getPagedata.map((item)=>(
      <div className='' key={item._id}>
<div>
<p>Form id:{item.formIdUser}</p>
 <p>createdOn:</p>    
 <p>Createdby:{item.emailUser}</p>     
  </div>
  <div>
<div>Make:{item.make}</div>
<div>horsepw:{item.horsepw}</div>
<div>Regno:{item.regno}</div>
<div>price:{item.price}</div>
<div>yearmanu:{item.yearmanu}</div>
<div>datepurch:{item.datepurch}</div>
<div>State of Vehicle:{item.stateVehicle}</div>
<div>purpose of Vehicle:{item.purposeVehicle}</div>
<div>NEW/OLD:{item.age}</div>
<div>Order:{item.order}</div>
<div>Mileage:{item.mileage}</div>
<div>knowledge:{item.knowledge}</div>
<div>passenger:{item.passenger}</div>
<div>Hauled:{item.hauled}</div>
<div>Nature:{item.nature}</div>
<div>Goods Owner:{item.goodsOwner}</div>
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

export default vehicleDetails