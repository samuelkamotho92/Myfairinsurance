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
function Reset() {
    const classes = useStyles();
    const nav = useNavigate();
    const [password,setpassword] = useState('');
    const [passwordConfirm,setpasswordConfirm] = useState('');
    const handleSubmit = async (e)=>{
e.preventDefault();
setpassword('');
setpasswordConfirm('');
const url = 
`http://localhost:8080/api/v1/member/passwordreset`;
const resp = await fetch(url,{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({password,passwordConfirm}),
  credentials: 'include',
  withCredentials:true
})
const data = await resp.json();
console.log(data);
if(data){
alert(`${data.message}`)
}
    }
  return (
    <div className='memberreset'>
<h2 style={{textAlign:'center'}}>
  ENTER NEW PASSWORD</h2>
<div className={classes.links}>
<Link to='/' style={{textDecoration:'none'}}>Home</Link>
</div>
<form className={classes.contactForm} onSubmit={handleSubmit}>
<TextField type="password" 
 className={classes.fieldValue}
  id="password" label="password" 
  variant="outlined"
 required style={{margin:"20px 0px"}} value={password} 
  onChange={(e)=>{
  setpassword(e.target.value)
}}/>
<div className='passworderror' style={{color:"red"}}></div>
<TextField type="passwordconfirm" 
 className={classes.fieldValue}
  id="passwordConfirm" label="passwordConfirm" 
  variant="outlined"
 required style={{margin:"20px 0px"}} value={passwordConfirm} 
  onChange={(e)=>{
  setpasswordConfirm(e.target.value)
}}/>
<div className='passowdconferror' style={{color:"red"}}></div>
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

export default Reset