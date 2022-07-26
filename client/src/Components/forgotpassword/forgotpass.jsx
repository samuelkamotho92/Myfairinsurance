import React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import {makeStyles} from '@material-ui/core';
import {useNavigate,Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  btn:{
      backgroundColor:"violet",
      '&:hover':{
           backgroundColor:'pink'
      }
 },
 fieldValue:{
 width:"50%"
 },
 contactForm:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
 },
 Links:{
  display:'flex',
  flexWrap:'wrap',
  justifyContent:'flex-end',
  alignItems:'flex-end',
  marginRight:'20px'
}
}));
function Adminlog() {
    const classes = useStyles();
    const nav = useNavigate();
    const [email,setemail] = useState('');
    const emailerror = document.querySelector('.emailerror');
    const handleSubmit =async (e)=>{
e.preventDefault();
setemail('');
const url = `http://localhost:8080/api/v1/admin/forgotpassword`;
const resp = await fetch(url,{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({email}),
  credentials: 'include',
  withCredentials:true
})
const data = await resp.json();
console.log(data);
if(data){
alert(`${data.message} check your email`)
}
    }
  return (
    <div className='adminLogin'>
<h2 style={{textAlign:'center'}}>Password reset,enter your email</h2>
<div className={classes.links}>
<Link to='/' style={{textDecoration:'none'}}>Home</Link>
</div>
<form className={classes.contactForm} onSubmit={handleSubmit}>
<TextField type="email" 
 className={classes.fieldValue}
  id="email" label="email" 
  variant="outlined"
 required style={{margin:"20px 0px"}} value={email} 
  onChange={(e)=>{
  setemail(e.target.value)
}}/>
<div className='emailerror' style={{color:"red"}}></div>
<Button  style={{margin:"10px 0px"}}
 type="submit"
 variant="outlined"
 size="large" className={classes.btn}>
SUBMIT
</Button>
</form>
    </div>
  )
}

export default Adminlog