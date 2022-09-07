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
import '../../Navbar/Nav.css'
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

function patchpage4(props) {
    const classes = useStyles();
    const nav = useNavigate();
    const location = useLocation()
    const {email} = location.state;
    const {formId} = location.state;
    const currentFormId = props.currentFormidenty;
    const curremailUser = props.curremailUser
    console.log(curremailUser,currentFormId);
    const [dateOccurence,setdateOccurence] = useState('');
    const [time,settime] = useState('');
    const [place,setplace] = useState('');
    const [yourLocation,setLocation] = useState('');
    const [positionVehicle,setpositionVehicle] = useState('');
    const [widthStreet,setwidthStreet] = useState('');
    const [speedBefore,setspeedBefore] = useState('');
    const [speedDuring,setspeedDuring] = useState('');
    const [vehicleLocked,setvehicleLocked] = useState('');
    const [antitheft,setantitheft] = useState('');
    const [natureAccident,setnatureAccident] = useState('');
    const [causeAccident,setcauseAccident] = useState('');
    const [sketchScene,setsketch]  = useState('');
    const [emailUser,setemailUser] = useState(curremailUser);
    const [formIdUser,setformIdUser] = useState(currentFormId);
    const [pageId,setpageId] = useState('');
    console.log(emailUser,formIdUser)
    let pageIdy;
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
    const handleSubmit = async()=>{
        const url = 
        `http://localhost:8080/api/v1/member/pageFour/${pageId}`;
        const resp = await fetch (url,{
            method:"PATCH",
            headers:{ "Content-Type": "application/json" },
            body:JSON.stringify ({
        dateOccurence,
        time,
        place,
        yourLocation,
        positionVehicle,
        widthStreet,
        speedBefore,
        speedDuring,
        vehicleLocked,
        antitheft,
        natureAccident,
        causeAccident,
        sketchScene,
        emailUser,
        formIdUser,
            })
        })
        const data = await resp.json();
        if(data){
            console.log(data)
            alert('data UPDATED succesfuly');
           
        }
            }
            
         const pageValues = async(e)=>{
            e.preventDefault();
            let pageContext = 
            pageId.length > 1 ? handleSubmit(): pagefourvalues();
          console.log('submitted successfuly');
          return pageContext;
          }


          const pagefourvalues = async()=>{
            const url = `http://localhost:8080/api/v1/member/pageFour`;
            const resp = await fetch (url,{
                method:"POST",
                headers:{ "Content-Type": "application/json" },
                body:JSON.stringify ({
            dateOccurence,
            time,
            place,
            yourLocation,
            positionVehicle,
            widthStreet,
            speedBefore,
            speedDuring,
            vehicleLocked,
            antitheft,
            natureAccident,
            causeAccident,
            sketchScene,
            emailUser,
            formIdUser,
                })
            })
            const data = await resp.json();
            if(data){
                console.log(data)
                alert('data submitted succesfuly');
               
            }
                }

                useEffect(()=>{
                    const  getPageId = async()=>{
                    const url = 
            `http://localhost:8080/api/v1/member/pageFourid`;
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
                    }
                    }
                    getPageId()
                        },[props.id])
            console.log(pageId);

    return(
        <div className=''>
          <nav>
  {(toggleMenu || screenWidth > 800
  ) && (
    <ul className='list'>
  <li classItems='items'>
  <Link to='/personaldetails' className='navlinks' 
          state={{
            emailUser:curremailUser,formId:formId ,
            currentFormId:currentFormId}}>
            Personal Details</Link>
  </li>
  <li classItems='items'>
  <Link to='/insuredvehicle' className='navlinks' 
          state={{  
           emailUser:curremailUser,formId:formId ,
      currentFormId:currentFormId}}
          >The Insured Vehicle</Link>
  </li>
  <li classItems='items'>
  <Link to='/driversection' className='navlinks'
          state={{
            emailUser:curremailUser,formId:formId ,
            currentFormId:currentFormId}}
          >Person Driving Section</Link>
  </li>
  <li classItems='items'>
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
            emailUser:curremailUser,formId:formId ,
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
         <div className='navbar'>
          
        {/* 
          CREATE ROUTES */}
 
        </div>
        <h1 className={classes.ptext} >
        The accident 
        </h1>
        <form onSubmit={pageValues}>
        <div className={classes.textFields}>
        <div className={classes.item}>
            <p>When did the accident happen?</p>
        <TextField id="filled-basic" type='date'
        label=""
        variant="filled" 
        value={dateOccurence}
        onChange={(e)=>{
          setdateOccurence(e.target.value) 
        }}
        required/>
        <div className='dateerror' style={{color:"red"}}></div>
          </div>
          <div className={classes.item}>
          <p>At what time did the accident happen?</p>
        <TextField id="filled-basic" type='text'
        label="At what Time"
        variant="filled" 
        value={time}
        onChange={(e)=>{
          settime(e.target.value) 
        }}
        required/>
        <div className='timeerror' style={{color:"red"}}></div>
          </div>
          <div className={classes.item}>
          <p>At what place did the accident happen?</p>
        <TextField id="filled-basic" type='text'
        label="At what place"
        variant="filled" 
        value={place}
        onChange={(e)=>{
          setplace(e.target.value) 
        }}
        required/>
        <div className='placeerror' style={{color:"red"}}></div>
          </div>
          </div>
          <div className={classes.textFields}>
          <div className={classes.item}>
        <TextField id="filled-basic" type='text'
        label="Width of the street or road"
        variant="filled" 
        value={widthStreet}
        onChange={(e)=>{
          setwidthStreet(e.target.value) 
        }}
        required/>
        <div className='widtherror' style={{color:"red"}}></div>
          </div>
          <div className={classes.item}>
        <TextField id="filled-basic" type='text'
        label="Speed of Vehicle before accident"
        variant="filled" 
        value={speedBefore}
        onChange={(e)=>{
          setspeedBefore(e.target.value) 
        }}
        required/>
        <div className='spbeforeerror' style={{color:"red"}}></div>
          </div>
          <div className={classes.item}>
        <TextField id="filled-basic" type='text'
        label="Speed During Accident"
        variant="filled" 
        value={speedDuring}
        onChange={(e)=>{
          setspeedDuring(e.target.value) 
        }}
        required/>
        <div className='spduringerror' style={{color:"red"}}></div>
          </div>
          </div>
          <div></div>
          <p style={{textAlign:'center',color:'blue'}}>
              Incase of Theft</p>
              <div className={classes.textFields}>
              <div className={classes.item}>
        <FormControl fullWidth>
                  {/* <InputLabel id="demo-simple-select-label">NEW OR OLD</InputLabel> */}
                  <p style={{marginTop:'5px'}}>
                    Were you in the vehicle?</p>
                  <Select
                  labelId="were you in vehicle"
                  id="location"
                  value={yourLocation}
                  // label=""
                  onChange={(e)=>{
                    setLocation(e.target.value) 
                  }}
                >
                  <MenuItem value="new">YES</MenuItem>
                  <MenuItem value="old">NO</MenuItem>
                  </Select>
                      </FormControl>
                      <div className='locationerror' style={{color:"red"}}></div>
          </div>
        <div className={classes.item}>
        <FormControl fullWidth>
                  <p style={{marginTop:'5px'}}>
                    Were you in the vehicle?</p>
                  <Select
                  labelId="were you in vehicle"
                  id="vehicle-locked"
                  value={vehicleLocked}
                  onChange={(e)=>{
                    setvehicleLocked(e.target.value) 
                  }}
                >
                  <MenuItem value="new">YES</MenuItem>
                  <MenuItem value="old">NO</MenuItem>
                  </Select>
                      </FormControl>
        <div className='lockederror' style={{color:"red"}}></div>
          </div>
          <div className={classes.item}>
        <FormControl fullWidth>
                  <p style={{marginTop:'5px'}}>
                  Is vehicle fitted</p>
                  <Select
                  labelId="were you in vehicle"
                  id="fitted_antitheft"
                  value={antitheft}
                  onChange={(e)=>{
                      setantitheft(e.target.value) 
                  }}
                >
                  <MenuItem value="new">YES</MenuItem>
                  <MenuItem value="old">NO</MenuItem>
                  </Select>
                      </FormControl>
        <div className='antithefterror' style={{color:"red"}}></div>
          </div>
          </div>
          <div className={classes.textFields}>
          <div className={classes.item}>
        <TextField id="filled-basic" type='text'
        label="What was the cause of accident"
        variant="filled" 
        value={causeAccident}
        onChange={(e)=>{
          setcauseAccident(e.target.value) 
        }}
        required/>
        <div className='causeerror' style={{color:"red"}}></div>
          </div>
          <div className={classes.item}>
        <TextField id="filled-basic" type='text'
        label="Explain nature Accident"
        variant="filled" 
        value={natureAccident}
        onChange={(e)=>{
          setnatureAccident(e.target.value) 
        }}
        required/>
        <div className='natureerror' style={{color:"red"}}></div>
          </div>
          <div className={classes.item}>
        <TextField id="filled-basic" type='text'
        label="Enter sketch"
        variant="filled" 
        value={sketchScene}
        onChange={(e)=>{
          setsketch(e.target.value) 
        }}
        required/>
        <div className='sketcherror' style={{color:"red"}}></div>
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

export default patchpage4