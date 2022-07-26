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
    const [password,setpassword] = useState('');
    const [passwordconfirm,setpasswordconfirm] = useState('');
    const emailerror = document.querySelector('.emailerror');
    const passworderror = document.querySelector('.passworderror');
    const passwordconferror = document.querySelector('.passwordconferror');
    const handleSubmit =async (e)=>{
e.preventDefault();
setemail('');
setpassword('');
setpasswordconfirm('');
const url = `http://localhost:8080/api/v1/admin/login`;
const resp = await fetch(url,{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({email,password}),
  credentials: 'include',
  withCredentials:true
})
const data = await resp.json();
console.log(data)
if(data.admin){
  alert(`Welcome back admin: ${data.admin.email} logged in Succesfuly`);
  nav('/adminpage');
}

if(data.errMess){
emailerror.textContent = data.errMess.email;
passworderror.textContent = data.errMess.password;
}
    }
  return (
    <div className='adminLogin'>
<h2 style={{textAlign:'center'}}>Admin Login</h2>
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
<TextField type="text" 
 className={classes.fieldValue}
  id="password" label="password" 
  variant="outlined"
 required style={{margin:"20px 0px"}} value={password} 
  onChange={(e)=>{
     setpassword(e.target.value)
}}/>
<div className='passworderror' style={{color:"red"}}></div>
<Link to='/forgotpassword'> Forgot password</Link>
<Button  style={{margin:"10px 0px"}}
 type="submit"
 variant="outlined"
 size="large" className={classes.btn}>
LOGIN
</Button>
</form>
    </div>
  )
}

export default Adminlog