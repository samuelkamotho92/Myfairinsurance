import React from 'react';
import TextField from '@mui/material/TextField';
import {useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import "../Navbar/Navbar.css";
import Tabledata from './page6form';
import {useNavigate,useLocation,Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Patchpage6 from '../Pages/Patching/Patchpage6';
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
    const {currentFormId} = location.state;
    const  curremailUser = location.state.emailUser;
    console.log(email,formId);
    const classes = useStyles();
    const nav = useNavigate();
    const [anyInjuries,setanyInjuries] = useState();
    const [medicalyAttended,setmedicalyAttended] = useState('');
    const [hospitalName,sethospitalName]= useState('');
    const [hospitalAddress,sethospitalAddress] = useState('');
    const [harmProperty,setharmProperty] = useState('');
    const [nameOwner,setnameOwner] = useState('');
    const [addressOwner,setaddressOwner] = useState('');
    const [natureDamage,setnatureDamage] = useState('');
    const [emailUser,setEmailuser] = useState(email);
    const [formIdUser,setformIdUser] = useState(formId);
    const [currentFormidenty,setcurentFormid]  = useState(currentFormId);
    console.log(currentFormidenty)
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
 `http://localhost:8080/api/v1/form/resultdetails`;
const resp = await fetch(url,{
method:"POST",
headers:{ "Content-Type": "application/json" },
body:JSON.stringify({
    anyInjuries,
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
const newdata = await  resp.json();
console.log(newdata);
if(newdata.message){
  alert(`${newdata.message}`);
  nav(`${newdata.redirect}`, 
  { state: {
    email:email,formId:formId, 
    currentFormId:currentFormidenty} 
  })
}
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      if(formId && email){
//fecth data first
useEffect(()=>{
  const getData = async()=>{
    const dburl =
`http://localhost:8080/api/v1/form/pageSix`;
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
setanyInjuries(data.getPagedata.namePers);
setmedicalyAttended(data.getPagedata.medicalyAttended);
sethospitalName(data.getPagedata.hospitalName);
sethospitalAddress(data.getPagedata.hospitalAddress);
setharmProperty(data.getPagedata.harmProperty);
setnameOwner(data.getPagedata.nameOwner);
setaddressOwner(data.getPagedata.addressOwner);
setnatureDamage(data.getPagedata.natureDamage);
    }
  }
  getData();
  },[props.id]);
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
  <form onSubmit={handleSubmit}>
  <div  className={classes.textFields}>
  <div  className={classes.item}>
  <Grid item xs={12}>
  <Item>
  <p style={{fontWeight:'bolder'}}>
      Has the accident caused any Injuries to a person , 
      if soo fill enter details of the person affected just below the
       table, if not skip to next form part
  </p>
  </Item>
  </Grid>
  <Tabledata email={emailUser}/>
  </div>
  <div className={classes.item}>
  <p>Any injuries</p>
  <TextField id="filled-basic" type='textarea'
  style={{margin:'10px'}}
  label="Enter Damages Details"
  variant="filled" 
  value={anyInjuries}
  onChange={(e)=>{
    setanyInjuries(e.target.value) 
  }}
  required/>
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
      <p>Hospital Address</p>
  <TextField id="filled-basic" type='textarea'
  label="Hospital Address"
  variant="filled" 
  value={hospitalAddress}
  onChange={(e)=>{
      sethospitalAddress(e.target.value) 
  }}
  required/>
  <div className='estimateformerror' 
  style={{color:"red"}}></div>  
  </div>
  <div className={classes.item}>
  <p>Cause Any Harm to property</p>
  <TextField id="filled-basic" type='textarea'
  label="Any harm to property occured"
  variant="filled" 
  value={harmProperty}
  onChange={(e)=>{
      setharmProperty(e.target.value) 
  }}
  required/>
  <div className='estimateformerror' style={{color:"red"}}></div>  
  </div>
  <div className={classes.item}>
  <p>Name of Owner whose damage have happen to him</p>
  <TextField id="filled-basic" type='textarea'
  label="Owner address"
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
  label="Address of Owner"
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
  label="Nature of Damages"
  variant="filled" 
  value={natureDamage}
  onChange={(e)=>{
      setnatureDamage(e.target.value) 
  }}
  required/>
  <div className='estimateformerror' 
  style={{color:"red"}}></div>  
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
<Patchpage6 
  currentFormidenty={currentFormId}
  curremailUser={curremailUser}
/>
  )
      }


  }
  export default Page6;