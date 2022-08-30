import React from 'react'
import {useEffect,useState} from 'react';
import {useLocation,Link} from 'react-router-dom';
import PersonalDetails from './Getpages/Personaldetails';
import Vehicledetails from './Getpages/vehicleDetails';
import Driverdetails from './Getpages/Driver';
import Accidentdetails from './Getpages/Accidents';
import Damagesdetails from './Getpages/Damagesdetails';
import Resultdetails from './Getpages/Result';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import '../Admin/formdetail.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import logoimage from '../../assets/Mayfairlogo.png';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function formUser(props) {
  const [changevalue,setChangevalue] = useState('');
  const urlport = process.env.LOCALHOSTURL
    const location = useLocation();
    const id = location.state;
    const emailOfUser = id.emailUser;
    const myIdentifier = id.formId;
    const admincomment = id.adminComments;
console.log(myIdentifier);
console.log(emailOfUser);
useEffect(()=>{
    const url = `http://localhost:8080/api/v1/admin/formdatas`
},[props.id])

const handleApprovedform= async (formId)=>{
console.log(formId);
//add status depending on the user 
const url = 
`http://localhost:8080/api/v1/form/approvedform`;
const resp = await fetch(url,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({formId}),
    credentials: 'include',
    withCredentials:true
});
const newdata = await resp.json();
console.log(newdata.data.formStatus);
alert(`The form has been:${newdata.data.formStatus}`);
}

const handleDisapprovedform= async (formId)=>{
  console.log(formId);
  //add status depending on the user 
  const url = `http://localhost:8080/api/v1/form/rejectedform`;
  //set the modal and allow admin to fill in data
  const resp = await fetch(url,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({formId}),
      credentials: 'include',
      withCredentials:true
  });
  const newdata = await resp.json();
  alert(`The form has been:${newdata.data.formStatus}`);
  }

  const handlePendingform = async (formId)=>{
const adminComments =  prompt('kindy enter the changes to be made by the user');
console.log(adminComments);
    console.log(formId);
    //add status depending on the user 
    const url = 
    `http://localhost:8080/api/v1/form/pendingform`;
    const resp = await fetch(url,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({formId,adminComments}),
        credentials: 'include',
        withCredentials:true
    });
    const newdata = await resp.json();
    alert(`The return form has been send to
     ${newdata.data.emailUser}: with a status of:${newdata.data.formStatus}`);
//create modal
}
    const printform = ()=>{
      const formprinted = window.print();
      if(formprinted){
        alert(`form has been printed successfully`)
      }else{
        console.log('form not printed');
      }
    }

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
if(emailOfUser === "admintest1234@gmail.com"){
  console.log(emailOfUser)
return(
  <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2}>
    <Grid item md={8} xs={12}>
      <Item>
      <p>MAYFAIR INSURANCE COMPANY LIMITED</p>
      <p>8th Floor mayfair center ,Ralph Bunche road</p>
      <p>TEL:07202999 000, FAX +254 20 2999 111 MOBILE:+254 7333/724 256925</p>
      <p>EMAIL:info@mayfair.co.ke</p>
      </Item>
    </Grid>
    <Grid item md={4} xs={12}>
        <Link to='/'>
      <Item>
        <img src={logoimage} alt='Your logo image'/>
      </Item>
        </Link>
    </Grid>
  </Grid>
  <Grid item xs={12}>
      <Item>
       <p style={{fontWeight:'bolder',marginTop:"20PX",color:'green'}}>
        MOTOR VEHICLE CLAIM FORM</p>
        </Item>
    </Grid>
<div style={{margin:'20px 40px'}} className='formItem'>
<PersonalDetails formId={myIdentifier}/>
</div>
<div style={{margin:'20px 40px'}} className='formItem'>
<Vehicledetails formId={myIdentifier}/>
</div >
<div style={{margin:'20px 40px'}} className='formItem'>
<Driverdetails formId={myIdentifier}/>
</div>
<div  style={{margin:'20px 40px'}} className='formItem'>
<Accidentdetails formId={myIdentifier}/>
</div>
<div style={{margin:'20px 40px'}} className='formItem'>
<Damagesdetails formId={myIdentifier}/>
</div>
<div style={{margin:'20px 40px'}} className='formItem'>
<Resultdetails formId={myIdentifier}/>
</div>
<div className='formStatus'>
<div style={{backgroundColor:'green'}}
onClick={(e)=>{handleApprovedform(myIdentifier)}}>Approve Form</div>
<div style={{backgroundColor:'red'}}
onClick={(e)=>{handleDisapprovedform(myIdentifier)}}>Reject Form</div>
<div style={{backgroundColor:'yellow'}}
onClick={(e)=>{handlePendingform(myIdentifier)}}>Return Form</div>
</div>

<button onClick={printform}>
  PRINT FORM
</button>
</Box>
)
}else{
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item md={8} xs={12}>
        <Item>
        <p>MAYFAIR INSURANCE COMPANY LIMITED</p>
        <p>8th Floor mayfair center ,Ralph Bunche road</p>
        <p>TEL:07202999 000, FAX +254 20 2999 111 MOBILE:+254 7333/724 256925</p>
        <p>EMAIL:info@mayfair.co.ke</p>
        </Item>
      </Grid>
      <Grid item md={4} xs={12}>
      <Link to='/'>
      <Item>
        <img src={logoimage} alt='Your logo image'/>
      </Item>
        </Link>
      </Grid>
    </Grid>
    <Grid item xs={12}>
        <Item>
         <p style={{fontWeight:'bolder',marginTop:"20PX",color:'green'}}>
          MOTOR VEHICLE CLAIM FORM</p>
          </Item>
      </Grid>
<h3>{admincomment}</h3>
<div style={{margin:'20px 40px'}} className='formItem'>
<PersonalDetails formId={myIdentifier}/>
</div>
<div style={{margin:'20px 40px'}} className='formItem'>
<Vehicledetails formId={myIdentifier}/>
</div >
<div style={{margin:'20px 40px'}} className='formItem'>
<Driverdetails formId={myIdentifier}/>
</div>
<div  style={{margin:'20px 40px'}} className='formItem'>
<Accidentdetails formId={myIdentifier}/>
</div>
<div style={{margin:'20px 40px'}} className='formItem'>
  <Damagesdetails formId={myIdentifier}/>
  </div>
  <div style={{margin:'20px 40px'}} className='formItem'>
  <Resultdetails formId={myIdentifier}/>
  </div>
  <button onClick={printform}>
  PRINT FORM
</button>

  </Box>
 
  )
}
}

export default formUser