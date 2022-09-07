import React from 'react';
import TextField from '@mui/material/TextField';
import {useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import "../Navbar/Navbar.css"
import {useNavigate,useLocation,Link} from 'react-router-dom'
import Patchpage5 from '../Pages/Patching/PatchPage5';

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
  const Page5 = (props)=>{
    const location = useLocation();
    const {email}  = location.state;
    const {formId} = location.state;
    const {currentFormId} = location.state;
    const  curremailUser = location.state.emailUser;
    console.log(email,formId);
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
    const [formIdUser,setformIdUser] = useState(formId);
    const [currentFormidenty,setcurentFormid]  = useState(currentFormId);
    const [toggleMenu, setToggleMenu] = useState(false)
     const [screenWidth, setScreenWidth] = useState(window.innerWidth)

     const toggleNav = () => {
      setToggleMenu(!toggleMenu)
    }
useEffect(() => {
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      }
  window.addEventListener('resize', changeWidth)
  return () => {
          window.removeEventListener('resize', changeWidth)
      }
  
    }, []) 
    const handleSubmit = async(e)=>{
e.preventDefault();
const url =
 `http://localhost:8080/api/v1/member/pageFive`;
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
emailUser,
formIdUser,

  })
})

const data = await  resp.json();
console.log(data);
if(data.message){
  alert(`${data.message}`);
  // nav('/general');
}
    }
if(formId && email){
  return( 
    <div>
  <nav>
    {(toggleMenu || screenWidth > 800) && (
      <ul className="list">
        <li className="items">
        <Link to='/personaldetails' 
className='navlinks' 
  state={{email:email ,formId:formId,
  currentFormId:currentFormidenty}}>
  Personal details</Link>
        </li>
        <li className="items">
  <Link to='/insuredvehicle' className='navlinks' 
  state={{
  email:email,formId:formId , 
  currentFormId:currentFormidenty}}
  >Insured Vehicle</Link>       
        </li>
        <li className="items">
  <Link to='/driversection' className='navlinks'
  state={{ email:email ,formId:formId , 
    currentFormId:currentFormidenty}}
  >DRIVER</Link>      
        </li>
        <li className="items">
        <Link to='/accidents' className='navlinks'
  state={{  email: email ,formId:formId , 
    currentFormId:currentFormidenty}}
  >Accident</Link>
        </li>
        <li className="items">
        <Link to='/damages' className='navlinks'
  state={{ email:email ,formId:formId ,
    currentFormId:currentFormidenty}}
  >Damages</Link>      
        </li>
        <li className="items">
        <Link to='/result' 
        className='navlinks'
  state={{ email:email ,formId:formId ,
    currentFormId:currentFormidenty}}
  >Result</Link>     
        </li>
        <li className="items">
    <Link to='/' 
    className='navlinks'>
    Home
  </Link>      
        </li>
      </ul>
    )}
    <button onClick={toggleNav}
    className='btn'>
LINKS
    </button>
  </nav>
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
}else{
  return(
<Patchpage5 
  currentFormidenty={currentFormId}
  curremailUser={curremailUser}
  />
  )

}
    

  }
  export default Page5;