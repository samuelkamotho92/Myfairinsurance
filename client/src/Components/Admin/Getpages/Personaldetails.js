import React from 'react';
import {useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@mui/material/Button';

function Personaldetails(props) {
    const [data,setData] = useState();
    //search a member and get detail
    useEffect(()=>{
      const id = props.formId;
      console.log(props.formId)
        const getPersonal = async ()=>{
      const baseUrl =`http://localhost:8080/api/v1/admin/personaldetails`
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
    <p>This are your personal details</p>
    {data.getPagedata.map((item)=>(
      <div className='' key={item._id}>
<div>
<p>form id:{item.formIdUser}</p>
 <p>createdOn:</p>    
 <p>Createdby:{item.emailUser}</p>     
  </div>
  <div>
<div>PolicyNo:{item.policyNo}</div>
<div>ClaimNo:{item.claimNo}</div>
<div>RenwalDate:{item.renewDate}</div>
<div>InsuredName:{item.insuredName}</div>
<div>postalAddress:{item.postalAddress}</div>
<div>telephone No:{item.tellNo}</div>
<div>Street:{item.street}</div>
<div>District:{item.district}</div>
<div>Occuaption:{item.occupation}</div>
  </div>
        </div>
    ))}
  </div>
)
    }else{
      return (
        <div>
          <p>
          No details found of Page One
          </p>
        </div>
      )
    }
}

export default Personaldetails