import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import './membersLanding.css'
import profilepic from '../../assets/profile.jpg';
import Membernav from './Memberspagenav';
function MemberLandingPage(props) {
  console.log(props.email,props.formId);
  const handleClick = (e)=>{
e.preventDefault();
console.log('clicked');
  }
  return (
    <div className='Memberslandingpage'>
<Membernav />
<div className='home-content'>
<div className='overview-boxes' 
style={{display:"flex",
alignItems:"center",
justifyContent:"center",
margin:"25vh auto"
}}
>
<div className='box'
style={{margin:"0px 20px" }}>
<Link to='/form'
 state={{ email: props.email ,
 formId:props.formId}}
>
<div className='right-side'>
<div className='box-topic'>
FORM SECTIONS
</div>
</div>
</Link>
<i class='bx bx-envelope-open'></i>
</div>
<div className='box'
style={{margin:"0px 20px"}}>
<Link to='/Memberformdata' 
state={{ email: props.email ,
 formId:props.formId}} >
  <div className='right-side'>
  <div className='box-topic'>
 FILLED IN FORMS
</div>
  </div>
</Link>
<i class='bx bx-envelope-open'></i>
</div>
</div>
</div>
  </div>
  )
}

export default MemberLandingPage