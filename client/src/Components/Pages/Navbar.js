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
return(
<div className='navbar'>
<Link to='/personaldetails' className='navlinks' 
  style={{textDecoration:'none',backgroundColor:'green',padding:'10px'}}
  state={{email: props.email ,formId:props.formId}}>
  >
    Personal Details</Link>
  <Link to='/insuredvehicle' className='navlinks' 
  style={{textDecoration:'none',backgroundColor:'green',padding:'10px'}}
  state={{  email: props.email ,formId:props.formId}}
  >The Insured Vehicle</Link>
  <Link to='/driversection' className='navlinks'
  style={{textDecoration:'none',backgroundColor:'green',padding:'10px'}}
  state={{ email: props.email ,formId:props.formId}}
  >Person Driving Section</Link>
  <Link to='/accidents' className='navlinks'
  style={{textDecoration:'none',backgroundColor:'green',padding:'10px'}}
  state={{  email: props.email ,formId:props.formId}}
  >Accident</Link>
   <Link to='/damages' className='navlinks'
  style={{textDecoration:'none',backgroundColor:'green',padding:'10px'}}
  state={{ email: props.email ,formId:props.formId}}
  >Damages</Link>
  <div className={classes.myemail}>
  <p>{props.email}</p>
  </div>
  
</div>
    )
}
export default Formnavbar;
