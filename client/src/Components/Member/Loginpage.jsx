import React from 'react';
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import {makeStyles} from '@material-ui/core';
import {useNavigate,Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

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
function Memberlog() {
    const classes = useStyles();
    const nav = useNavigate();
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    const emailerror = document.querySelector('.emailerror');
    const passworderror = document.querySelector('.passworderror');
    const handleSubmit =async (e)=>{
e.preventDefault();
setemail('');
setpassword('');
// setpasswordConfirm('');
const url = `http://localhost:8080/api/v1/member/login`;
const resp = await fetch(url,{
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify({email,password}),
  credentials: 'include',
  withCredentials:true
})
const data = await resp.json();
console.log(data)
if(data.loggedInmember){
  alert(`Welcome back: ${data.loggedInmember.email} logged in Succesfuly`);
  nav('/memberpage');
}

if(data.errMess){
emailerror.textContent = data.errMess.email;
passworderror.textContent = data.errMess.password;
alert(`Something is wrong , Check if you are approved`);
}
    }
  return (
    <div className='adminLogin'>
<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#009100' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" 
          sx={{ flexGrow: 1 }}>
        LOGIN
          </Typography>
          <Link to='/' color="inherit" 
          style={{textDecoration:'none',fontSize:"18px",
          backgroundColor:'#a52df5',padding:'5px',fontWeight:'bolder'}}>
            Home</Link>
        </Toolbar>
      </AppBar>
    </Box>
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
<Link to='/forgotepass'> Forgot password</Link>
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

export default Memberlog