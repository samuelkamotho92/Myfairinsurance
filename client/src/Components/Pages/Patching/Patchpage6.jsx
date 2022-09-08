import React from 'react'
import TextField from '@mui/material/TextField';
import {useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@mui/material/Button';
import Navbar from '.././Navbar';
import "../../Navbar/Navbar.css";
import Tabledata from '.././page6form';
import {useNavigate,useLocation,Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../../Navbar/Navbar.css';
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
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Patchpage6(props) {
    const location = useLocation();
    const {email}  = location.state;
    const {formId} = location.state;
    const currentFormId = props.currentFormidenty;
    const curremailUser = props.curremailUser;
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
    const [emailUser,setEmailuser] = useState(curremailUser);
    const [formIdUser,setformIdUser] = useState(currentFormId);
    const [pageId,setpageId] = useState('');
    const [toggleMenu, setToggleMenu] = useState(false)
     const [screenWidth, setScreenWidth] = useState(window.innerWidth)
     let pageIdy;
     console.log(email,formId,formIdUser,emailUser);
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
    
     const handleSubmit = async()=>{
        const url =
    `http://localhost:8080/api/v1/member/pageSix/${pageId}`;
        const resp = await fetch(url,{
        method:"PATCH",
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
        const data = await  resp.json();
        if(data){
          alert(`data updated succefully`);
          // nav('/general');
          nav(`${data.redirect}` , 
          {state: 
         {
         emailUser:curremailUser,
         formId:formId,
         currentFormId:currentFormId
        } 
          })
          
        }}

const pageValues = async(e)=>{
    e.preventDefault();
    let pageContext = 
    pageId.length > 1 ? handleSubmit(): pagesixvalues();
   console.log('submitted successfuly');
   return pageContext;
  } 
const pagesixvalues = async()=>{
    const url =
`http://localhost:8080/api/v1/member/pageSix`;
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
    const data = await  resp.json();
    if(data){
      alert(`data uploaded succefully`);
      // nav('/general');
      nav(`${data.redirect}` , 
      {state: 
     {
     emailUser:curremailUser,
     formId:formId,
     currentFormId:currentFormId
    } 
      })
    }
        }

useEffect(()=>{
            const  getPageId = async()=>{
            const url = 
    `http://localhost:8080/api/v1/member/pageSixid`;
            const resp =  await fetch(url,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                  currentFormId
              }),
              credentials: 'include',
              withCredentials:true
              });
            const data = await resp.json();
            console.log(data.pageData.length);
            if(data.pageData.length === 0){
    console.log('zero value found');
            }else{
     pageIdy = data.pageData[0]._id;
      setpageId(pageIdy);
      setanyInjuries(data.pageData[0].namePers);
setmedicalyAttended(data.pageData[0].medicalyAttended);
sethospitalName(data.pageData[0].hospitalName);
sethospitalAddress(data.pageData[0].hospitalAddress);
setharmProperty(data.pageData[0].harmProperty);
setnameOwner(data.pageData[0].nameOwner);
setaddressOwner(data.pageData[0].addressOwner);
setnatureDamage(data.pageData[0].natureDamage);
            }
            }
            getPageId()
                },[props.id])     
console.log(pageId);
return( 
    <div>
<div className='navbar'>
  <nav>
    {(toggleMenu || screenWidth > 800) &&
    (
      <ul className='list'>
      <li className='items'>
      <Link to='/personaldetails' className='navlinks' 
              state={{
                emailUser:curremailUser,formId:formId ,
                currentFormId:currentFormId}}>
                Personal Details</Link>
      </li>
      <li className='items'>
      <Link to='/insuredvehicle' className='navlinks' 
              state={{  
               emailUser:curremailUser,formId:formId ,
          currentFormId:currentFormId}}
              >Vehicle</Link>
      </li>
      <li className='items'>
      <Link to='/driversection' className='navlinks'
              state={{
                emailUser:curremailUser,formId:formId ,
                currentFormId:currentFormId}}
              >DRIVER</Link>
      </li>
      <li className='items'>
      <Link to='/accidents' className='navlinks'
              state={{  
                emailUser:curremailUser,formId:formId ,
                currentFormId:currentFormId}}
              >Accident</Link>
      </li>
      <li className='items'>
      <Link to='/damages' className='navlinks'
              state={{
                 emailUser:curremailUser,formId:formId ,
                 currentFormId:currentFormId}}
              >Damages</Link>
      </li>
      <li className='items'>
      <Link to='/result' className='navlinks'
              state={{
                emailUser:curremailUser,
                formId:formId ,
          currentFormId:currentFormId}}
              >Result</Link>
      </li>
      <li className='items'>
        <Link to='/' className='navlinks'>
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
 </div>
<form onSubmit={pageValues}>
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
UPDATE & SUBMIT
</Button>
<span variant="outlined" className={classes.clear}>
CLEAR ALL
</span>
</form>     
</div>
)
}

export default Patchpage6