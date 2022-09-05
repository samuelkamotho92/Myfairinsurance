import React from 'react'
import{useState,useNavi} from 'react';
import {useNavigate} from 'react-router-dom';
const Displaybutton = (props)=>{
    const nav = useNavigate();
    let formStatus = props.formStatus;
    let formIdenty = props.formId;
    let emailUser = props.emailUser;
    console.log(formStatus,formIdenty,emailUser);
    const printform = ()=>{
        const formprinted = window.print();
        if(formprinted){
          alert(`form has been printed successfully`)
        }else{
          console.log('form not printed');
        }
        console.log(formStatus);
      }
      const editForm = async (props)=>{
        console.log('form ready to be edited')
  const url = 
  `http://localhost:8080/api/v1/form/patchingformdata`;
       const resp = await fetch(url,{
        headers:{"Content-Type":"application/json"},
        method:'POST',
        body:JSON.stringify({formIdenty,emailUser}),
        credentials: 'include',
        withCredentials:true
       })
       const newdata = await resp.json();
       //redirect to the form
nav(`${newdata.redirect}`,
{ state:
{formIdenty:`${newdata.formIdenty}`,
emailUser:`${newdata.emailUser}`
}})
       //redirect the user to the memberspage
}

if(formStatus === 'returned' || formStatus === 'pending'){
    return(
        <button onClick={editForm}
        style={{backgroundColor:"red",
        textTransform:"uppercase",
        padding:"10px",
        cursor:'pointer',
        }}>
       EDIT FORM
     </button>
        )
}else{
    return(
        <button onClick={printform}
        style={{backgroundColor:"red",
        textTransform:"uppercase",
        padding:"10px",
        cursor:'pointer',
        }}>
       PRINT FORM
     </button>
        )
}

}
export default Displaybutton