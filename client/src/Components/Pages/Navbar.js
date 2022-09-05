import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
  myemail:{
positon:'relative',
bottom:'0px'
  }
}))
const Formnavbar = (props)=>{
  const classes =  useStyles()
  console.log(props.email,props.formId,
    props.currentFormId,props.emailUser);
return(
<div className='navbar'>
{/* 
  CREATE ROUTES */}
<Link to='/personaldetails' 
className='navlinks' 
  state={{email: props.email ,
  formId:props.formId ,
  currentFormId:props.currentFormId,
  emailUser:props.emailUser
  }}>
  Personal Details</Link>
  <Link to='/insuredvehicle' className='navlinks' 
  state={{  email: props.email ,
    formId:props.formId , 
    currentFormId:props.currentFormId,
    emailUser:props.emailUser}}
  >The Insured Vehicle</Link>
  <Link to='/driversection' className='navlinks'
  state={{ email: props.email ,
    formId:props.formId ,
    currentFormId:props.currentFormId,
    emailUser:props.emailUser
  }}
  >Person Driving Section</Link>
  <Link to='/accidents' className='navlinks'
  state={{  email: props.email ,
    formId:props.formId,
    currentFormId:props.currentFormId,
    emailUser:props.emailUser}}
  >Accident</Link>
   <Link to='/damages' className='navlinks'
  state={{ email: props.email ,
    formId:props.formId ,
    currentFormId:props.currentFormId,
    emailUser:props.emailUser
  }}
  >Damages</Link>
   <Link to='/' className='navlinks'>
    Home
  </Link>
  <Link to='/result' className='navlinks'
  state={{email: props.email ,
  formId:props.formId,
  currentFormId:props.currentFormId,
  emailUser:props.emailUser}}>
    The Result
  </Link>
</div>
    )
}
export default Formnavbar;
