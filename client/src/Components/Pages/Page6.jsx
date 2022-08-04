import React from 'react';
import TextField from '@mui/material/TextField';
import {useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import "../Navbar/Navbar.css"
import {useNavigate,useLocation,Link} from 'react-router-dom'
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
    }
  }))
  const Page6 = (props)=>{
    const location = useLocation();
    const {email}  = location.state;
    const {formId} = location.state;
    console.log(email,formId);
    const classes = useStyles();
    const nav = useNavigate();
    const [anyInjuries,setanyInjuries] = useState('');
    const [nameofPatient,setnameofPatient] = useState('');
    const [addressofPatient,setaddressofPatient] = useState('');
    const [occupationofPatient,setoccupationofPatient] = useState('');
    const [natureofInjuries,setnatureofInjuries] = useState('');
    const [conveyed,setconveyed] = useState('');
    const [medicalyAttended,setmedicalyAttended] = useState('');
    const [hospitalName,sethospitalName]= useState('');
    const [hospitalAddress,sethospitalAddress] = useState('');
    const [harmProperty,setharmProperty] = useState('');
    const [nameOwner,setnameOwner] = useState('');
    const [addressOwner,setaddressOwner] = useState('');
    const [natureDamage,setnatureDamage] = useState('');
    const [emailUser,setEmailuser] = useState(email);
    const [formIdUser,setformIdUser] = useState(formId);
    

    const handleSubmit = async(e)=>{
e.preventDefault();
const url = `http://localhost:8080/api/v1/member/pageFive`;
const resp = await fetch(url,{
method:"POST",
headers:{ "Content-Type": "application/json" },
body:JSON.stringify({
    anyInjuries,
    nameofPatient,
    addressofPatient,
    occupationofPatient,
    natureofInjuries,
    conveyed,
    medicalyAttended,
    hospitalName,
    hospitalAddress,
    harmProperty,
    nameOwner,
    addressOwner,
    natureDamage,
    emailUser,
    formIdUser
  })
})

const data = await  resp.json();
if(data.message){
  alert(`${data.message}, click the next page to conitnue`);
  // nav('/general');
}
    }
    useEffect(()=>{
      console.log(formId);
      const getData = async()=>{
        const dburl =`http://localhost:8080/api/v1/form/pageFive`;
        const resp = await fetch(dburl,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          formIdUser
      })
        });
        const data = await resp.json();
        console.log(data.getPagedata);
        if(data.getPagedata == null){
          console.log('is null no data')
        }else{
          // data.getPagedata.map((item)=>{

          //allow multiple people
setanyInjuries(data.getPagedata.anyInjuries)
setnameofPatient(data.getPagedata.nameofPatient)
setaddressofPatient(data.getPagedata.addressofPatient)
setoccupationofPatient(data.getPagedata.occupationofPatient)
setnatureofInjuries(data.getPagedata.natureofInjuries)
setconveyed(data.getPagedata.conveyed)
setmedicalyAttended(data.getPagedata.medicalyAttended)
sethospitalName(data.getPagedata.hospitalName)
sethospitalAddress(data.getPagedata.hospitalAddress)
setharmProperty(data.getPagedata.harmProperty)
setnameOwner(data.getPagedata.nameOwner)
setaddressOwner(data.getPagedata.addressOwner)
setnatureDamage(data.getPagedata.natureDamage)
setEmailuser(data.getPagedata.emailUser)
setformIdUser(data.getPagedata.formIdUser)
          //  })
        }
      }
      getData();
      },[props.id]);
    return( 
        <div>
     <div className='navbar'>
{/* 
  CREATE ROUTES */}
<Link to='/personaldetails' className='navlinks' 
  state={{email:email ,formId:formId}}>
  Personal Details</Link>
  <Link to='/insuredvehicle' className='navlinks' 
 
  state={{  email:email ,formId:formId}}
  >The Insured Vehicle</Link>
  <Link to='/driversection' className='navlinks'
 
  state={{ email:email ,formId:formId}}
  >Person Driving Section</Link>
  <Link to='/accidents' className='navlinks'
 
  state={{  email: email ,formId:formId}}
  >Accident</Link>
   <Link to='/damages' className='navlinks'

  state={{ email:email ,formId:formId}}
  >Damages</Link>
<Link to='/general' className='navlinks'
state={{ email:email ,formId:formId}}
>General Details</Link>
</div>
<h1 className={classes.ptext}>General Details</h1>    
<form onSubmit={handleSubmit}>
<div  className={classes.textFields}>
<div  className={classes.item}>
    <p>General Details</p>
<TextField id="filled-basic" type='textarea'
label="Enter Damages Details"
variant="filled" 
value={anyInjuries}
onChange={(e)=>{
  setanyInjuries(e.target.value) 
}}
required/>
<div className='damageserror' style={{color:"red"}}></div>  
</div>
<div className={classes.item}>
<p>What is the name of patient</p>
<TextField id="filled-basic" type='textarea'
label="What is the Estimated cost of Repair"
variant="filled" 
value={nameofPatient}
onChange={(e)=>{
  setnameofPatient(e.target.value)
}}
required/>
<div className='damageserror' style={{color:"red"}}></div>  
</div>
<div className={classes.item}>
    <p>Patient address</p>
<TextField id="filled-basic" type='textarea'
label="Patient address"
variant="filled" 
value={addressofPatient}
onChange={(e)=>{
    setaddressofPatient(e.target.value) 
}}
required/>
<div className='inspectionerror' style={{color:"red"}}></div>  
</div>
<div className={classes.item}>
    <p>occupation of Patient</p>
<TextField id="filled-basic" type='textarea'
label="occupation of Patient"
variant="filled" 
value={occupationofPatient}
onChange={(e)=>{
    setoccupationofPatient(e.target.value) 
}}
required/>
<div className='instnerror' style={{color:"red"}}></div>  
</div>
</div>
<div  className={classes.textFields}>
<div  className={classes.item}>
    <p>Nature of injuries</p>
<TextField id="filled-basic" type='textarea'
label="Whats the nature of injuries"
variant="filled" 
value={natureofInjuries}
onChange={(e)=>{
    setnatureofInjuries(e.target.value) 
}}
required/>
<div className='nameerror' style={{color:"red"}}></div>  
</div>
<div className={classes.item}>
<p>Conveyed</p>
<TextField id="filled-basic" type='textarea'
label="conveyed"
variant="filled" 
value={conveyed}
onChange={(e)=>{
    setconveyed(e.target.value) 
}}
required/>
<div className='addressserror' style={{color:"red"}}></div>  
</div>
<div className={classes.item}>
<p>Medicaly attended</p>
<TextField id="filled-basic" type='textarea'
label="medicalyAttended"
variant="filled" 
value={medicalyAttended}
onChange={(e)=>{
    setmedicalyAttended(e.target.value) 
}}
required/>
<div className='estimateerror' style={{color:"red"}}></div>  
</div>
<div className={classes.item}>
    <p>Name of Hospital</p>
<TextField id="filled-basic" type='textarea'
label="Attach estimate form if possible"
variant="filled" 
value={hospitalName}
onChange={(e)=>{
    sethospitalName(e.target.value) 
}}
required/>
<div className='estimateformerror' style={{color:"red"}}></div>  
</div>
<div className={classes.item}>
    <p>Name of Hospital</p>
<TextField id="filled-basic" type='textarea'
label="Attach estimate form if possible"
variant="filled" 
value={hospitalAddress}
onChange={(e)=>{
    sethospitalAddress(e.target.value) 
}}
required/>
<div className='estimateformerror' style={{color:"red"}}></div>  
</div>
<div className={classes.item}>
    <p>Property destroy</p>
<TextField id="filled-basic" type='textarea'
label="Attach estimate form if possible"
variant="filled" 
value={harmProperty}
onChange={(e)=>{
    setharmProperty(e.target.value) 
}}
required/>
<div className='estimateformerror' style={{color:"red"}}></div>  
</div>
<div className={classes.item}>
    <p>Name of Owner</p>
<TextField id="filled-basic" type='textarea'
label="Attach estimate form if possible"
variant="filled" 
value={nameOwner}
onChange={(e)=>{
    setnameOwner(e.target.value) 
}}
required/>
<div className='estimateformerror' style={{color:"red"}}></div>  
</div>
<div className={classes.item}>
    <p>Address of Owner</p>
<TextField id="filled-basic" type='textarea'
label="Attach estimate form if possible"
variant="filled" 
value={addressOwner}
onChange={(e)=>{
    setaddressOwner(e.target.value) 
}}
required/>
<div className='estimateformerror' style={{color:"red"}}></div>  
</div>
<div className={classes.item}>
    <p>Nature of Damages</p>
<TextField id="filled-basic" type='textarea'
label="Attach estimate form if possible"
variant="filled" 
value={natureDamage}
onChange={(e)=>{
    setnatureDamage(e.target.value) 
}}
required/>
<div className='estimateformerror' style={{color:"red"}}></div>  
</div>
</div>
<Button  style={{margin:"50px 15px"}}
type="submit"
variant="outlined"
size="large" className={classes.btn} >
SAVE & SUBMIT
</Button>
<span variant="outlined" className={classes.clear}>
CLEAR ALL
</span>
</form>     
</div>
    )

  }
  export default Page6;