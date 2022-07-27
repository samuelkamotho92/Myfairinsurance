import React from 'react';
import TextField from '@mui/material/TextField';
import {useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import {useNavigate,useLocation} from 'react-router-dom'
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
  const Page5 = ()=>{
    const location = useLocation();
    const {email}  = location.state;
    const classes = useStyles();
    const nav = useNavigate();
    const [damagesDetails,setdamagesDetails] = useState('');
    const [costRepairs,setcostRepairs] = useState('');
    const [pointofInspection,setpointofInspection] = useState('');
    const [repairInstruction,setrepairInstruction] = useState('');
    const [nameofMechanic,setnameofMechanic] = useState('');
    const [addressofMechanic,setaddressofMechanic] = useState('');
    const [anyEstimate,setanyEstimate] = useState('');
    const [estimateForm,setestimateForm]= useState('');
    const [emailUser,setEmailuser] = useState(email);

    const handleSubmit = async(e)=>{
e.preventDefault();
const url = `http://localhost:8080/api/v1/member/pageFive`;
const resp = await fetch(url,{
method:"POST",
headers:{ "Content-Type": "application/json" },
body:JSON.stringify({
damagesDetails,
costRepairs,
pointofInspection,
repairInstruction,
nameofMechanic,
addressofMechanic,
anyEstimate,
estimateForm,
emailUser
  })
})

const data = await  resp.json();
if(data.message){
  alert(`${data.message}`);
  nav('/general');
}
    }
    return( 
        <div>
<Navbar />
<h1 className={classes.ptext}>Damages</h1>    
<form onSubmit={handleSubmit}>
<div  className={classes.textFields}>
<div  className={classes.item}>
    <p>Damages Details</p>
<TextField id="filled-basic" type='textarea'
label="Enter Damages Details"
variant="filled" 
value={damagesDetails}
onChange={(e)=>{
  setdamagesDetails(e.target.value) 
}}
required/>
<div className='damageserror' style={{color:"red"}}></div>  
</div>
<div className={classes.item}>
<p>What is the estimated cost of repair</p>
<TextField id="filled-basic" type='textarea'
label="What is the Estimated cost of Repair"
variant="filled" 
value={costRepairs}
onChange={(e)=>{
  setcostRepairs(e.target.value) 
}}
required/>
<div className='damageserror' style={{color:"red"}}></div>  
</div>
<div className={classes.item}>
    <p>Where can the vehicle be inspected</p>
<TextField id="filled-basic" type='textarea'
label="Where can the vehicle be inspected"
variant="filled" 
value={pointofInspection}
onChange={(e)=>{
  setpointofInspection(e.target.value) 
}}
required/>
<div className='inspectionerror' style={{color:"red"}}></div>  
</div>
<div className={classes.item}>
    <p>Have you given Any Repair Instructons</p>
<TextField id="filled-basic" type='textarea'
label="Have you given Any Repair Instructon"
variant="filled" 
value={repairInstruction}
onChange={(e)=>{
  setrepairInstruction(e.target.value) 
}}
required/>
<div className='instnerror' style={{color:"red"}}></div>  
</div>
</div>
<div  className={classes.textFields}>
<div  className={classes.item}>
    <p>Name of Mechanic</p>
<TextField id="filled-basic" type='textarea'
label="Enter Name of Mechanic"
variant="filled" 
value={nameofMechanic}
onChange={(e)=>{
  setnameofMechanic(e.target.value) 
}}
required/>
<div className='nameerror' style={{color:"red"}}></div>  
</div>
<div className={classes.item}>
<p>address of Mechanic</p>
<TextField id="filled-basic" type='textarea'
label="Address of Mechanic"
variant="filled" 
value={addressofMechanic}
onChange={(e)=>{
  setaddressofMechanic(e.target.value) 
}}
required/>
<div className='addressserror' style={{color:"red"}}></div>  
</div>
<div className={classes.item}>
<p>Any estimate sent to the company from him</p>
<TextField id="filled-basic" type='textarea'
label="Any estimate sent to the company from him"
variant="filled" 
value={anyEstimate}
onChange={(e)=>{
setanyEstimate(e.target.value) 
}}
required/>
<div className='estimateerror' style={{color:"red"}}></div>  
</div>
<div className={classes.item}>
    <p>Estimate form</p>
<TextField id="filled-basic" type='textarea'
label="Attach estimate form if possible"
variant="filled" 
value={estimateForm}
onChange={(e)=>{
setestimateForm(e.target.value) 
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
  export default Page5;