import React from 'react';
import {useState,useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../Member/Member.css';
import {makeStyles} from "@material-ui/core";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {useLocation} from 'react-router-dom';

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
links:{
display:'flex',
flexWrap:'wrap',
justifyContent:'flex-end',
alignItems:'flex-end',
marginRight:'20px'
},
members:{
     position:'relative',
}
}));

function Member(props) {
  const classes = useStyles();
  const nav = useNavigate();
  const location = useLocation();
  const [memberStatus,setmemberStatus] = useState();
  //decode token and see role and then do redirect
//   if(token){
//     console.log('redirected shortly');
// nav('memberpage')
//   }
//   useEffect(()=>{
//     const redirectUser = async()=>{
//       const {token} = location.state;
//       //check if token is for user if yes give access to the page
// const url = `http://localhost:8080/api/v1/member/checkmember`;
// const resp =  await fetch(url,{
//   method:'POST',
//   headers:{"Content-Type":"application/json"},
//   body:JSON.stringify({token}),
//   credentials: 'include',
//   withCredentials:true
// })
// const newData = await resp.json();
// console.log(newData);
// setmemberStatus(newData);
// console.log(newData.status)
// if(newData.status == 'success'){
//   // console.log(newData.status)
//  nav(`/${newData.redirectedPage}`)
// }
//   }
// redirectUser()
//   },[props.id])

  //grab the errors
  // console.log(memberStatus.status);
  
  const nameerror = document.querySelector('.nameerror');
  const emailerror = document.querySelector('.emailerror');
  const passworderror = document.querySelector(".passworderror");
  const passwordConferror = document.querySelector(".passwordConferror");

    const [name,setname] =  useState('');
    const [email,setemail] =  useState('');
    const [password,setpassword] = useState('');
    const [passwordConfirm,setpasswordConfirm] = useState('');
    const handleSubmit = async (e)=>{
      e.preventDefault();
      setname("");
      setemail('');
      setpassword('');
      setpasswordConfirm('');
      const baseUrl = `http://localhost:8080/api/v1/member/regester`;
      const response = await fetch(baseUrl,
          {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({name,email,password,passwordConfirm}),
      credentials: 'include',
      withCredentials:true
      })
      const data = await response.json();
      console.log(data);
      if(data.regestered && response.status == 200){
      alert(`${data.regestered.email} regesterd succefully`);
      alert(`Check your email for you to login later on`);
      nav("/");
      }
      if(data.errMess){
          emailerror.textContent = data.errMess.email;
          nameerror.textContent = data.errMess.name;
          passworderror.textContent = data.errMess.password;
          passwordConferror.textContent = data.errMess.passwordConfirm;
        }
       }
  return (
    <div className={classes.members}>
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
         REGESTER AS A NEW MEMBER
          </Typography>
          <Link to='/' color="inherit" 
          style={{textDecoration:'none',fontSize:"18px",
          backgroundColor:'#a52df5',padding:'5px',fontWeight:'bolder'}}>
            Home</Link>
        </Toolbar>
      </AppBar>
    </Box>
    <form className={classes.contactForm} onSubmit={handleSubmit}>
       <TextField type="text" 
 className={classes.fieldValue}
  id="name" label="full name" 
  variant="outlined"
 required style={{margin:"20px 0px"}} value={name} 
  onChange={(e)=>{
     setname(e.target.value)
}}/>
<div className='nameerror' style={{color:"red"}}></div>
 <TextField type="text"  
 className={classes.fieldValue} id="email"
  label="email" variant="outlined"
 required style={{margin:"20px 0px"}} 
 value={email}  onChange={(e)=>{
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
 <TextField type="text"  
 className={classes.fieldValue} id="passwordConfirm"
  label="passwordConfirm" variant="outlined"
 required style={{margin:"20px 0px"}} 
 value={passwordConfirm}  
 onChange={(e)=>{
     setpasswordConfirm(e.target.value)
}}/>
<div className='passwordConferror' style={{color:"red"}}></div>
<Button  style={{margin:"10px 0px"}}
 type="submit"
 variant="outlined"
 size="large" className={classes.btn}>
REGESTER
</Button>
<Link to='/memberlogin'>
LOGIN 
</Link>
</form>
    </div>


  )
}

export default Member