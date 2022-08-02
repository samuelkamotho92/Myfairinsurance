import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import './membersLanding.css'
function MemberLandingPage(props) {
  console.log(props.email,props.formId);
  const handleClick = (e)=>{
e.preventDefault();
console.log('clicked');
  }
  return (
    <div className='Memberslandingpage'>
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
          sx={{ flexGrow: 2 }}>
       <h2>Welcome to your Portol</h2>
       <p>{props.email}</p>
          </Typography>
          <Link to='/' color="inherit" 
          style={{textDecoration:'none',fontSize:"18px",
          backgroundColor:'#a52df5',padding:'5px',fontWeight:'bolder'}}>
            Home</Link>
        </Toolbar>
      </AppBar>
    </Box>
    <div className='membersContent'>
    <div className='createForm'>
    <Link to="/form" 
    state={{ email: props.email ,formId:props.formId}} 
    style={{textAlign:'center',margin:'10px auto',textDecoration:'none'}}>
Your Form details
</Link>
    </div>
    <div className='createForm'>
  <Link to='/Memberformdata' 
  state={{ email: props.email , formId:props.formId}} 
  style={{textAlign:'center',margin:'30px auto',textDecoration:'none',}}>
    View Filed Form</Link>
    </div>
    </div>
    </div>
  )
}

export default MemberLandingPage