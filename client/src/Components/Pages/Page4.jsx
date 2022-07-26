import React from 'react';
import TextField from '@mui/material/TextField';
import {useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import "../Navbar/Navbar.css"
import {useNavigate,useLocation,Link} from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Patchepage4 from '../Pages/Patching/patchpage4';
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
const Page4 = (props)=>{
    const classes = useStyles();
    const location = useLocation();
    const nav = useNavigate();
    const {email} = location.state;
    const {formId} = location.state;
    console.log(email,formId);
    const {currentFormId} = location.state;
    const  curremailUser = location.state.emailUser;
    console.log(currentFormId,curremailUser,email,formId);
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
    const [emailUser,setemailUser] = useState(email);
    const [formIdUser,setformIdUser] = useState(formId);
    const [currentFormidenty,setcurentFormid]  = useState(currentFormId);
    console.log(currentFormidenty);
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
if(data.message){
    alert(`${data.message}`);
    nav(`${data.redirect}` , 
    { state:{
      email:email,formId:formId, 
      currentFormId:currentFormidenty
    } 
    })
}
    }

    if(formId && email){
      useEffect(()=>{
        const getData = async()=>{
          const dburl =
    `http://localhost:8080/api/v1/form/pageFour`;
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
          setdateOccurence(data.getPagedata.dateOccurence);
         settime(data.getPagedata.time);
         setplace(data.getPagedata.place);
         setLocation(data.getPagedata.yourLocation);
         setpositionVehicle(data.getPagedata.positionVehicle);
         setwidthStreet(data.getPagedata.widthStreet);
         setspeedBefore(data.getPagedata.speedBefore);
         setspeedDuring(data.getPagedata.speedDuring);
         setvehicleLocked(data.getPagedata.vehicleLocked);
         setantitheft(data.getPagedata.antitheft);
         setnatureAccident(data.getPagedata.natureAccident);
         setcauseAccident(data.getPagedata.causeAccident);
         setsketch(data.getPagedata.sketchScene);
            //  })
          }
        }
        getData();
        },[props.id]);
      return(
<div className=''>
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
<h1 className={classes.ptext} >
The accident 
</h1>
<form onSubmit={handleSubmit}>
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
<Patchepage4 
currentFormidenty={currentFormId}
curremailUser={curremailUser}
/>
      )
  }
}
export default Page4;