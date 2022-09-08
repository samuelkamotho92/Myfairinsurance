import React from 'react'
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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import '../../Navbar/Nav.css';
const useStyles = makeStyles((theme) => ({
    ptext: {
      textAlign: "center",
      textTransform: "uppercase",
      margin: "20px auto",
      color: "orange",
      fonSize: "25px",
    },
    btn: {
      margin: "200px auto",
      bottom: "0px",
    },
    textFields: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    claimerror: {
      backgroundColor: "red",
    },
    item: {
      margin: "20px 20px",
    },
    btn: {
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "crimson",
      },
    },
    clear: {
      margin: "150px 15px",
      backgroundColor: "pink",
      cursor: "pointer",
      padding: "10px",
      "&:hover": {
        backgroundColor: "crimson",
      },
    },
  }));
function Patchpage3(props) {
    const location = useLocation();
    const nav = useNavigate();
    const {formId} = location.state;
    const currentFormId = props.currentFormidenty;
    const curremailUser = props.curremailUser
  console.log(currentFormId,curremailUser);
  const [namePers,setnamePers] = useState('');
    const [address,setaddress] = useState('');
    const [age,setAge] = useState('');
    const [occupation,setOccupation] = useState('');
    const [licenseNo,setlicenseno] = useState('');
    const [dateofIssue,setdateissued] = useState('');
    const [placeIssue,setplaceissued]  = useState('');
    const [dateofExpiray,setdateexpiray]  = useState('');
    const [renewalNo,setrenewalNo]  = useState('');
    const [typeLicense,settypeLicense] = useState('');
const [validUpto,setvalidUpto] = useState('');
const [statusDriver,setstatusDriver]  = useState('');
const [statusLicenses,setstatusLicense]  = useState('');
const [driverProsecuted,setdriverProsecuted] = useState('');
const [priorAccident,setpriorAccident] = useState('');
const [driverInsurance,setdriverInsurance] = useState('');
const [driverExpirience,setdriverExperience] = useState('');
const [anyotherInsurance,setanyotherInsurance]   = useState('');
const [sobberness,setsobberness]  = useState('');
const [emailUser,setemailUser] = useState(curremailUser);
const [formIdUser,setformIdUser] = useState(currentFormId);
const [pageId,setpageId] = useState('');
const [toggleMenu, setToggleMenu] = useState(false)
const [screenWidth, setScreenWidth] = useState(window.innerWidth)
const classes = useStyles();
let pageIdy;

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
    const url  =   
     `http://localhost:8080/api/v1/member/pageThree/${pageId}`;
    const resp = await fetch(url,{
      method:"PATCH",
      headers:{ "Content-Type": "application/json" },
      body:JSON.stringify({namePers,address,age,occupation,licenseNo,dateofIssue,
        placeIssue,
        dateofExpiray,
        renewalNo,
        typeLicense,
        validUpto,
        statusDriver,
        statusLicenses,
        driverProsecuted,
    priorAccident,
    driverInsurance,
    driverExpirience,
    sobberness,
    anyotherInsurance,
    emailUser,
    formIdUser,
      })
    });
    const data = await resp.json();
    if(data){
     console.log(data)
      alert(`data updated succefully`);
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

         const pageValues = async(e)=>{
            e.preventDefault();
            let pageContext = 
            pageId.length > 1 ? handleSubmit(): pagethreevalues();
          console.log('submitted successfuly');
          return pageContext;
          }
    
          const pagethreevalues = async(e)=>{
            setformIdUser(currentFormId);
            const url  = `http://localhost:8080/api/v1/member/pageThree`;
            const resp = await fetch(url,{
              method:"POST",
              headers:{ "Content-Type": "application/json" },
              body:JSON.stringify({namePers,address,age,occupation,licenseNo,dateofIssue,
                placeIssue,
                dateofExpiray,
                renewalNo,
                typeLicense,
                validUpto,
                statusDriver,
                statusLicenses,
                driverProsecuted,
            priorAccident,
            driverInsurance,
            driverExpirience,
            sobberness,
            anyotherInsurance,
            emailUser,
            formIdUser,
              }),
              credentials: 'include',
              withCredentials:true
            });
            const data = await resp.json();
            if(data){
              console.log(data.message);
              alert('data uploaded succesfully');
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

                      //get the page id
     useEffect(()=>{
        const  getPageId = async()=>{
        const url = 
`http://localhost:8080/api/v1/member/pageThreeid`;
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
  setnamePers(data.pageData[0].namePers);
  setaddress(data.pageData[0].address);
  setAge(data.pageData[0].age);
  setOccupation(data.pageData[0].occupation);
  setlicenseno(data.pageData[0].licenseNo);
  setdateissued(data.pageData[0].dateofIssue);
  setplaceissued(data.pageData[0].placeIssue);
  setrenewalNo(data.pageData[0].renewalNo);
  settypeLicense(data.pageData[0].typeLicense);
  setvalidUpto(data.pageData[0].validUpto);
  setstatusDriver(data.pageData[0].statusDriver);
  setstatusLicense(data.pageData[0].statusLicenses);
  setdriverProsecuted(data.pageData[0].driverProsecuted);
  setpriorAccident(data.pageData[0].priorAccident);
  setdriverInsurance(data.pageData[0].driverInsurance);
  setdriverExperience(data.pageData[0].driverExpirience);
  setanyotherInsurance(data.pageData[0].anyotherInsurance);
  setsobberness(data.pageData[0].sobberness);
        }
        }
        getPageId()
            },[props.id])
console.log(pageId);
    return(
        <div>
          <nav>
            {(toggleMenu || screenWidth > 800) && (
              <ul className='list'>
                <li className='items'>
                <Link to='/personaldetails' className='navlinks' 
    state={{
      emailUser:curremailUser,formId:formId ,
      currentFormId:currentFormId
      }}>
    Personal Details</Link>
                </li>
  <li className='items'>
  <Link to='/insuredvehicle'
     className='navlinks' 
    state={{
      emailUser:curremailUser,
      formId:formId ,
      currentFormId:currentFormId}}
  >The Insured Vehicle</Link>
                </li>
  <li className='items'>
  <Link to='/driversection' 
    className='navlinks'
   state={{ 
    emailUser:curremailUser,formId:formId ,
    currentFormId:
    currentFormId}}
    >Person Driving Section</Link>
  </li>
  <li className='items'>
  <Link to='/accidents' 
    className='navlinks'
    state={{emailUser:curremailUser,formId:formId ,
      currentFormId:currentFormId}}
    >Accident</Link>
  </li>
  <li className='items'>
  <Link to='/damages' 
     className='navlinks'
   state={{ 
    emailUser:curremailUser,formId:formId ,
  currentFormId:currentFormId}}
    >Damages</Link>
  </li>
  <li className='items'>
<Link to='/result' 
    className='navlinks'
    state={{ 
      emailUser:curremailUser,formId:formId ,
      currentFormId:currentFormId}}
    >Result</Link>
  </li>
  <li className='items'>

  </li>
  </ul>
    )}
<button onClick={toggleNav}
className='btn'>
LINKS
    </button>        
          </nav>

        <h1 className={classes.ptext}>
        Person Driving at the time of accident
        </h1>
        <form onSubmit={pageValues}>
        <div className={classes.textFields}>
        <div className={classes.item}>
        <TextField id="filled-basic" type='text'
        label="Driver"
        variant="filled" 
        value={namePers}
        onChange={(e)=>{
          setnamePers(e.target.value) 
        }}
        required/>
        <div className='drivererro' style={{color:"red"}}></div>
          </div>
          <div className={classes.item}>
        <TextField id="filled-basic" type='text'
        label="Address"
        variant="filled" 
        value={address}
        onChange={(e)=>{
          setaddress(e.target.value) 
        }}
        required/>
        <div className='addresserror' style={{color:"red"}}></div>
          </div>
          <div className={classes.item}>
        <TextField id="filled-basic" type='text'
        label="Age"
        variant="filled" 
        value={age}
        onChange={(e)=>{
          setAge(e.target.value) 
        }}
        required/>
        <div className='ageerror' style={{color:"red"}}></div>
          </div>
          </div>
          <p style={{textAlign:'center',color:'blue'}}>
              Particulars of Driving License</p>
          <div className={classes.textFields}>
        <div className={classes.item}>
        <TextField id="filled-basic" type='number'
        label="LICENSE NO"
        variant="filled" 
        value={licenseNo}
        onChange={(e)=>{
          setlicenseno(e.target.value) 
        }}
        required/>
        <div className='licenseerror' style={{color:"red"}}></div>
          </div>
        
          <div className={classes.item}>
        <TextField id="filled-basic" type='text'
        label="PLACE OF ISSUED"
        variant="filled" 
        value={placeIssue}
        onChange={(e)=>{
          setplaceissued(e.target.value) 
        }}
        required/>
        <div className='placerror' style={{color:"red"}}></div>
          </div>
          <div className={classes.item}>
        <TextField id="filled-basic" type='text'
        label="TYPE LICENSE"
        variant="filled" 
        value={typeLicense}
        onChange={(e)=>{
          settypeLicense(e.target.value) 
        }}
        required/>
        <div className='typeerror' style={{color:"red"}}></div>
          </div>
          <div className={classes.item}>
        <TextField id="filled-basic" type='number'
        label="RENEWAL NO"
        variant="filled" 
        value={renewalNo}
        onChange={(e)=>{
          setrenewalNo(e.target.value) 
        }}
        required/>
        <div className='renewalerror' style={{color:"red"}}></div>
          </div>
          <div className={classes.item}>
        <TextField id="filled-basic" type='text'
        label="OCCUPATION"
        variant="filled" 
        value={occupation}
        onChange={(e)=>{
          setOccupation(e.target.value) 
        }}
        required/>
        <div className='occupationerror' style={{color:"red"}}></div>
          </div>
          </div>
          <div className={classes.textFields}>
          <div className={classes.item}>
            <p>Valid upto</p>
        <TextField id="filled-basic" type='date'
        variant="filled" 
        value={validUpto}
        onChange={(e)=>{
          setvalidUpto(e.target.value) 
        }}
        required/>
        <div className='validityerror' style={{color:"red"}}></div>
          </div>
        
          <div className={classes.item}>
            <p> Date of Expiry</p>
        <TextField id="filled-basic" type='date'
        variant="filled" 
        value={dateofExpiray}
        onChange={(e)=>{
          setdateexpiray(e.target.value) 
        }}
        required/>
        <div className='expiryerror' style={{color:"red"}}></div>
          </div>
          <div className={classes.item}>
        <p>Date Issued</p>
        <TextField id="filled-basic" type='date'
        variant="filled" 
        value={dateofIssue}
        onChange={(e)=>{
          setdateissued(e.target.value) 
        }}
        required/>
        <div className='issuederror' style={{color:"red"}}></div>
          </div>
          </div>
          <p style={{textAlign:'center',color:'blue'}}>
              DRIVERS DETAILS </p>
              <div className={classes.textFields}>
        <div className={classes.item}>
          <p>Is he your permanent driver?</p>
        <TextField id="filled-basic" type='text'
        label="IS HE YOUR DRIVER"
        variant="filled" 
        value={statusDriver}
        onChange={(e)=>{
          setstatusDriver(e.target.value) 
        }}
        required/>
        <div className='statusdrivererror' style={{color:"red"}}></div>
          </div>
        
          <div className={classes.item}>
            <p>Has driver license ever been suspended?</p>
        <TextField id="filled-basic" type='text'
        label="STATUS LICENSE"
        variant="filled" 
        value={statusLicenses}
        onChange={(e)=>{
          setstatusLicense(e.target.value) 
        }}
        required/>
        <div className='statuserror' style={{color:"red"}}></div>
          </div>
          <div className={classes.item}>
            <p>Driver ever been prosecuted?</p>
        <TextField id="filled-basic" type='text'
        label="DRIVER EVER BEEN PROSECUTED"
        variant="filled" 
        value={driverProsecuted}
        onChange={(e)=>{
          setdriverProsecuted(e.target.value) 
        }}
        required/>
        <div className='prosecutederror' style={{color:"red"}}></div>
          </div>
          <div className={classes.item}>
            <p>Ever been involved in accident?</p>
        <TextField id="filled-basic" type='text'
        label="EVER BEEN INVOLVED IN ACCIDENT"
        variant="filled" 
        value={priorAccident}
        onChange={(e)=>{
          setpriorAccident(e.target.value) 
        }}
        required/>
        <div className='accidenterror' style={{color:"red"}}></div>
          </div>
          <div className={classes.item}>
            <p>Was driver sobber?</p>
        <TextField id="filled-basic" type='text'
        label="Was he sober"
        variant="filled" 
        value={sobberness}
        onChange={(e)=>{
          setsobberness(e.target.value) 
        }}
        required/>
        <div className='sobbererror' style={{color:"red"}}></div>
          </div>
          </div>
          <div className={classes.textFields}>
        <div className={classes.item}>
          <p>Ever been denied motor vehicle insurance?</p>
        <TextField id="filled-basic" type='text'
        label="Driver insurance denied"
        variant="filled" 
        value={driverInsurance}
        onChange={(e)=>{
          setdriverInsurance(e.target.value) 
        }}
        required/>
        <div className='deniederror' style={{color:"red"}}></div>
          </div>
        
          <div className={classes.item}>
        <TextField id="filled-basic" type='text'
        label="DRIVER EXPERIENCE"
        variant="filled" 
        value={driverExpirience}
        onChange={(e)=>{
          setdriverExperience(e.target.value) 
        }}
        required/>
        <div className='expererror' style={{color:"red"}}></div>
          </div>
          <div className={classes.item}>
        <TextField id="filled-basic" type='text'
        label="Any other insurance"
        variant="filled" 
        value={anyotherInsurance}
        onChange={(e)=>{
          setanyotherInsurance(e.target.value) 
        }}
        required/>
        <div className='prosecutederror' style={{color:"red"}}></div>
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

export default Patchpage3