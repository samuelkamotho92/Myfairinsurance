import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState,useEffect,useContext} from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@mui/material/Button';
import Navbar from '.././Navbar';
import {useNavigate} from 'react-router-dom';
import { useLocation,Link} from 'react-router-dom'
import {UserContext} from '../../Pages/Context'
import "../../Navbar/Navbar.css";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const useStyles = makeStyles((theme)=>({
        ptext:{
            textAlign:'center',
            textTransform:'uppercase',
            margin:"20px auto",
            color:'orange',
            fonSize:'25px',
        },
        btn:{
            margin:'200px auto',
            bottom:'0px',
        },
        textFields:{
            display:'flex',
            flexWrap:'wrap',
            justifyContent:'center',
            alignItems:'center'
        },
        claimerror:{
            backgroundColor:'red'
        },
        item:{
            margin:'20px 20px'
        },
        btn:{
            cursor:'pointer',
            '&:hover':{
                backgroundColor:'crimson'
            }
        },
        clear:{
margin:"150px 15px",
backgroundColor:'pink',
cursor:'pointer',
padding:'10px',
'&:hover':{
    backgroundColor:'crimson'
}
        },
        conts:{
          margin:'25px',
        },
        formdetail:{
          marginTop:"50px"
        }
  
}))
const Page1 = (props)=>{
 const location = useLocation();
  const {formId} = location.state;
  const {email} = location.state;
  const {currentFormId} = location.state;
  console.log(currentFormId);
  const nav  = useNavigate();
    //error part
    const policyerror = document.querySelector('.policyno');
    const claimerror  = document.querySelector('.claimerror');
    const renewDateError  = document.querySelector('.renewalDate');
    const insuredNameError  = document.querySelector('.renewalDate');
    const postError  = document.querySelector('.posterror');
    const tellError = document.querySelector('.tellerror');
    const streetError = document.querySelector('.streeterror');
    const districtError = document.querySelector('.districterror');
    const occupationError = document.querySelector('occupationerror');
    const classes = useStyles();
    const [policyNo,setpolicyNo] = useState('');
    const [claimNo,setclaimNo]  = useState('');
    const [renewDate,setRenewalDate] = useState('');
    const [insuredName,setinsuredName] = useState('');
    const [postalAddress,setPOBOX] = useState('');
    const [tellNo,setTelNo]  =  useState('');
    const [district,setDistrict] =  useState('');
    const [street,setStreet]  =  useState('');
    const [occupation,setOccupation] =  useState('');
    const [formIdUser,setformIdUser] = useState(formId);
    const [emailUser,setEmailuser] = useState(email);
    const [currentFormidenty,setcurentFormid]  = useState(currentFormId);
    const [pageId,setpageId] = useState('');
 console.log(formIdUser,emailUser);
    const handleSubmit =async (e)=>{
        e.preventDefault();
        setpolicyNo('');
        setclaimNo('');
        setRenewalDate('');
        setinsuredName('');
        setinsuredName('');
        setPOBOX('');
        setTelNo('');
        setDistrict('');
        setStreet('');
        setOccupation('');
        const url = 
      `http://localhost:8080/api/v1/member/pageOne/${pageId}`;
        const resp = await fetch(url,{
          method:"PATCH",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({
            policyNo,
            claimNo,
            renewDate,
            insuredName,
            postalAddress,
            tellNo,
            district,
            street,
            occupation,
            emailUser,
            formIdUser
          }),
          credentials: 'include',
          withCredentials:true
        })
        const data = await resp.json();
        console.log(data)
        if(data.message){
          alert(`${data.message}`);
        }
      }
    const hardReload = ()=>{
        // console.log('deleted');
        setpolicyNo('');
        setclaimNo('');
        setRenewalDate('');
        setinsuredName('');
        setPOBOX('');
        setTelNo('');
        setDistrict('');
        setStreet('');
        setOccupation('');
    }

    //get the page id
    useEffect(()=>{ 
const  getPageId = async()=>{
const url = `http://localhost:8080/api/v1/member/pagOneid`;
const resp =  await fetch(url,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({
        currentFormidenty
  }),
  credentials: 'include',
  withCredentials:true
  });
const data = await resp.json();
const pageId = data.pageData[0]._id;
console.log(pageId.length);
setpageId(pageId);
let pageValue =  pageId.length > 1 ? 'handleSubmit': 'pagetwovalues';
console.log(pageValue);
}
getPageId()
    },[props.id])

return(
<div className={classes.pageOne}>
  {/* //pass to the navbar */}
  <div className='navbar'>
{/* 
  CREATE ROUTES */}
<Link to='/personaldetails' className='navlinks' 
  state={{email:email ,formId:formId ,
  currentFormId:currentFormidenty}}>
    Personal Details</Link>
  <Link to='/insuredvehicle' className='navlinks' 
  state={{  email:email ,formId:formId , 
    currentFormId:currentFormidenty}}
  >The Insured Vehicle</Link>
  <Link to='/driversection' className='navlinks'
  state={{ email:email ,formId:formId , 
    currentFormId:currentFormidenty}}
  >Person Driving Section</Link>
  <Link to='/accidents' className='navlinks'
  state={{  email: email ,formId:formId , 
    currentFormId:currentFormidenty}}
  >Accident</Link>
   <Link to='/damages' className='navlinks'
  state={{ email:email ,formId:formId ,
    currentFormId:currentFormidenty}}
  >Damages</Link>
  <Link to='/result' className='navlinks'
  state={{ email:email ,formId:formId ,
    currentFormId:currentFormidenty}}
  >Result</Link>
  <Link to='/' className='navlinks'>
    Home
  </Link>
</div>
<h2>Personal Details Section</h2>
<form onSubmit={handleSubmit} className={classes.formdetail}>
<div className={classes.item}>
  <Grid container spacing={2} className={classes.conts}>
    <Grid md={4}  xs={12}>
    <TextField id="filled-basic" type='number'
label="POLICYNO"
variant="filled" 
value={policyNo}
onChange={(e)=>{
  setpolicyNo(e.target.value) 
}}
required/>
<div className='policyno' style={{color:"red"}}></div>
    </Grid>
    <Grid md={4}  xs={12}>
    <TextField id="filled-basic" 
type='number'
label="CLAIMNO"
variant="filled" 
value={claimNo}
onChange={(e)=>{
  setclaimNo(e.target.value) 
}}
required/>
<div className={classes.claimerror} style={{color:"red"}}></div>
    </Grid>
    <Grid  md={4}  xs={12}>
      <p>RENEWAL DATE</p>
    <TextField id="filled-basic" 
type='date'
// label="RENEWALDATE"
variant="filled" 
value={renewDate}
onChange={(e)=>{
  setRenewalDate(e.target.value) 
}}
required/>
<div className='renewalerror' style={{color:"red"}}></div>
    </Grid>
  </Grid>
  <Grid container spacing={2}  className={classes.conts}>
<Grid md={4}  xs={12}>
<TextField id="filled-basic"
type='text'
 label="INSUREDNAME"
variant="filled" 
value={insuredName}
onChange={(e)=>{
  setinsuredName(e.target.value) 
}}
required/>
<div className='insurederror' style={{color:"red"}}></div>
</Grid>
<Grid md={4}  xs={12}>
<TextField id="filled-basic"
type='string'
 label="P.O.BOX"
variant="filled" 
value={postalAddress}
onChange={(e)=>{
  setPOBOX(e.target.value) 
}}
required/>
<div className='posterror'
 style={{color:"red"}}></div>
</Grid>
<Grid  md={4}  xs={12}>
<TextField id="filled-basic" 
type='number'
label="TELL NO"
variant="filled" 
value={tellNo}
onChange={(e)=>{
  setTelNo(e.target.value) 
}}
required/>
<div className='tellerror' style={{color:"red"}}></div>
</Grid>
  </Grid>
  <Grid container spacing={2}  className={classes.conts}>
    <Grid md={4}  xs={12}>
    <TextField id="filled-basic"
type='text'
 label="STREET"
variant="filled" 
value={street}
onChange={(e)=>{
  setStreet(e.target.value) 
}}
required/>
<div className='streeterror' style={{color:"red"}}></div>
    </Grid>
    <Grid md={4} xs={12}>
    <TextField id="filled-basic" 
type='text'
label="DISTRICT"
variant="filled" 
value={district}
onChange={(e)=>{
  setDistrict(e.target.value) 
}}
required/>
<div className='districterror' style={{color:"red"}}></div>
    </Grid>
    <Grid md={4} xs={12}>
    <TextField id="filled-basic" 
type='text'
label="OCCUPATION"
variant="filled" 
value={occupation}
onChange={(e)=>{
  setOccupation(e.target.value) 
}}
required/>
<div className='occupationerror' style={{color:"red"}}></div>
    </Grid>
  </Grid>
</div>
<div className={classes.textFields}>
<div className={classes.item}>

</div>
</div>
<Button  style={{margin:"50px 15px"}}
type="submit"
variant="outlined"
size="large" className={classes.btn} >
UPDATE & SUBMIT
</Button>
<span variant="outlined" className={classes.clear}
onClick={(e)=>{hardReload()}}
>
CLEAR ALL
</span>
</form>
</div>
)
}
export default Page1;