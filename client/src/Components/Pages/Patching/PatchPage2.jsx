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
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import '../../Navbar/Nav.css';
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
const Page2 = (props)=>{
    const location = useLocation();
    const {email} = location.state;
    const {formId} = location.state;
    // const {currentFormId} = location.state;
console.log(currentFormId);
const currentFormId = props.currentFormidenty;
  const curremailUser = props.curremailUser
  console.log(currentFormId,curremailUser);
    // const {currentFormId} = location.state;
    const [make, setmake] = useState("");
    const [horsepw, sethorsepw] = useState("");
    const [regno, setregno] = useState("");
    const [price, setprice] = useState("");
    const [yearmanu, setyearmanu] = useState("");
    const [datepurch, setdatepurch] = useState("");
    const [age, setage] = useState("");
    const [purposeVehicle, setPurpose] = useState("");
    const [stateVehicle,setstateVehicle] = useState("");
    const [order, setorder] = useState("");
    const [mileage, setMileage] = useState("");
    const [knowledge, setKnowledge] = useState("");
    const [passenger, setPassenger] = useState("");
    const [hauled, setHauled] = useState("");
    const [nature, setnatureGoods] = useState("");
    const [weight, setweight] = useState("");
    const [goodsOwner, setgoodsOwner] = useState("");
    const [emailUser,setemailUser] = useState(curremailUser);
    const [formIdUser,setformIdUser] = useState(currentFormId);
  const [pageId,setpageId] = useState('');
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
  
   }, []);
    console.log(formIdUser);
    const classes = useStyles();
    const nav = useNavigate();
 
 const handleSubmit = async () => {
    console.log(formId,emailUser);
    const url =
     `http://localhost:8080/api/v1/member/pageTwo/${pageId}`;
    const resp = await fetch(url,
       {
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
        make,
        horsepw,
        regno,
        price,
        yearmanu,
        datepurch,
        age,
        purposeVehicle,
        stateVehicle,
        order,
        mileage,
        knowledge,
        passenger,
        hauled,
        nature,
        weight,
        goodsOwner,
        emailUser,
        formIdUser,
      }),
    });
    const data = await resp.json();
    console.log(data);
    if(data){
      alert(`data updated succesfully`);
      nav(`${data.redirect}` , 
      { state: 
  {
  emailUser:curremailUser,
  formId:formId ,
  currentFormId:currentFormId
      } 
      })
    }
  };

  const pageValues = async(e)=>{
    e.preventDefault();
    let pageContext = pageId.length > 1 ? handleSubmit(): pagetwovalues();
  console.log('submitted successfuly');
  return pageContext;
  }
  const pagetwovalues = async()=>{
    console.log(formId,emailUser);
    //submit data
    //set the formIduser as the  currentFormidenty
    console.log(currentFormId);
    setformIdUser(currentFormId);

const url =
 `http://localhost:8080/api/v1/member/pageTwo`;
   const resp = await fetch(url,
      {
       method:"POST",
       headers:{"Content-Type":"application/json"},
     body: JSON.stringify({
       make,
       horsepw,
       regno,
       price,
       yearmanu,
       datepurch,
       age,
       purposeVehicle,
       stateVehicle,
       order,
       mileage,
       knowledge,
       passenger,
       hauled,
       nature,
       weight,
       goodsOwner,
       emailUser,
       formIdUser
     }),
     credentials: 'include',
     withCredentials:true
   });
   const data = await resp.json();
    console.log(data);
 alert('data uploaded successfuly');
 nav(`${data.redirect}` , 
 {state: 
{
emailUser:curremailUser,
formId:formId,
currentFormId:currentFormId
 } 
 })
  }
     //get the page id

     //get data also display them if they exist in the fields

     //if not leave them
     useEffect(()=>{
        const  getPageId = async()=>{
        const url = 
`http://localhost:8080/api/v1/member/pageTwoid`;
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
  setmake(data.pageData[0].make);
  sethorsepw(data.pageData[0].horsepw);
setregno(data.pageData[0].regno);
setprice(data.pageData[0].price);
setyearmanu(data.pageData[0].yearmanu);
setdatepurch(data.pageData[0].datepurch);
setstateVehicle(data.pageData[0].stateVehicle);
setorder(data.pageData[0].order);
setPurpose(data.pageData[0].purposeVehicle)
setMileage(data.pageData[0].mileage);
setKnowledge(data.pageData[0].knowledge);
setweight(data.pageData[0].weight);
setPassenger(data.pageData[0].passenger);
setHauled(data.pageData[0].hauled);
setnatureGoods(data.pageData[0].nature);
setweight(data.pageData[0].weight);
setgoodsOwner(data.pageData[0].goodsOwner);
setage(data.pageData[0].age);
        }
        }
        getPageId()
            },[props.id])
  const hardReload = () => {
    console.log("refreshed");
  };
  console.log(pageId);
    return (
      <div className="vehicle form">
<nav>
  {(toggleMenu || screenWidth > 800) && (
  <ul className='list'>
  <li className='items'>
  <Link to='/personaldetails' className='navlinks' 
    state={{
      emailUser:curremailUser,formId:formId ,
      currentFormId:currentFormId
      }}>
    PersonalDetails</Link>
  </li>
  <li className='items'>
  <Link to='/insuredvehicle'
     className='navlinks' 
    state={{
      emailUser:curremailUser,
      formId:formId ,
      currentFormId:currentFormId}}
    >Vehicle</Link>
  </li>
  <li className='items'>
  <Link to='/driversection' 
    className='navlinks'
   state={{ 
    emailUser:curremailUser,formId:formId ,
    currentFormId:
    currentFormId}}
    >DRIVER</Link>
  </li>
  <li  className='items'>
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
        <h2 className={classes.ptext}>Insured Vehicle</h2>
           <form onSubmit={pageValues}>
          <div className={classes.textFields}>
            <div className={classes.item}>
              <TextField
                type="text"
                id="make"
                label="CAR MAKE"
                variant="outlined"
                required
                value={make}
                onChange={(e) => {
                  setmake(e.target.value);
                }}
              />
              <div className="carerror" style={{ color: "red" }}></div>
            </div>
            <div className={classes.item}>
              <TextField
                type="text"
                id="horsepw"
                label="HORSE POWER"
                variant="outlined"
                required
                value={horsepw}
                onChange={(e) => {
                  sethorsepw(e.target.value);
                }}
              />
              <div className="horsepwerror" style={{ color: "red" }}></div>
            </div>
            <div className={classes.item}>
              <TextField
                type="text"
                id="regno"
                label="REG NO"
                variant="outlined"
                required
                style={{ margin: "20px 0px" }}
                value={regno}
                onChange={(e) => {
                  setregno(e.target.value);
                }}
              />
              <div className="regnoerror" style={{ color: "red" }}></div>
            </div>
          </div>
  
          <div className={classes.textFields}>
            <div className={classes.item}>
              <TextField
                type="text"
                id="price paid"
                label="PRICE PAID"
                variant="outlined"
                required
                style={{ margin: "20px 0px" }}
                value={price}
                onChange={(e) => {
                  setprice(e.target.value);
                }}
              />
              <div className="pricepaiderror" style={{ color: "red" }}></div>
            </div>
            <div className={classes.item}>
              <p>YEAR OF MANUFACTURE</p>
              <TextField
                type="date"
                id="yearmanu"
                label=""
                variant="outlined"
                required
                style={{ margin: "20px 0px" }}
                value={yearmanu}
                onChange={(e) => {
                  setyearmanu(e.target.value);
                }}
              />
              <div className="manuerror" style={{ color: "red" }}></div>
            </div>
            <div className={classes.item}>
              <p>DATE OF PURCHASE</p>
              <TextField
                type="date"
                id="datepurchase"
                label=""
                variant="outlined"
                required
                style={{ margin: "20px 0px" }}
                value={datepurch}
                onChange={(e) => {
                  setdatepurch(e.target.value);
                }}
              />
              <div className="pricepaiderror" style={{ color: "red" }}></div>
            </div>
          </div>
          <div className={classes.textFields}>
            <div className={classes.item}>
          <p style={{marginTop:"10px"}}>PURPOSE OF VEHICLE</p>
                <TextField
                type="text"
                id="purpse"
                label="PURPOSE"
                variant="outlined"
                required
                style={{ margin: "20px 0px" }}
                value={purposeVehicle}
                onChange={(e) => {
                  setPurpose(e.target.value);
                }}
              />
            </div>
            <div className={classes.item}>
            <p style={{marginTop:"10px"}}>
                  Mileage at time of accident</p>
       <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">NEW OR OLD</InputLabel> */}
                <Select
            labelId="demo-simple-select-label"
            id="mileage"
            value={mileage}
            label="Age"
            onChange={(e) => {
              setMileage(e.target.value);
            }}
          >
            <MenuItem value="new">YES</MenuItem>
            <MenuItem value="old">NO</MenuItem>
            </Select>
                </FormControl>
            </div>
            <div className={classes.item}>
                <p style={{marginTop:"10px"}}>
                  Vehicle new or old</p>
                <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">NEW OR OLD</InputLabel> */}
                <Select
            labelId="age"
            id="age"
            value={age}
            label="Age"
            onChange={(e) => {
              setage(e.target.value);
            }}
          >
            <MenuItem value="new">New</MenuItem>
            <MenuItem value="old">Old</MenuItem>
            </Select>
                </FormControl>
            </div>
          </div>
          <div className={classes.textFields}>
            <div className={classes.item}>
              <p style={{marginTop:"10px"}}>Vehicle being used with your knowledge</p>
                   <FormControl fullWidth>
                {/* <InputLabel id="demo-simple-select-label">NEW OR OLD</InputLabel> */}
                <Select
            labelId="KNOWLEDGE"
            id="knowledge"
            value={knowledge}
            label="Age"
            onChange={(e) => {
              setKnowledge(e.target.value);
            }}
          >
            <MenuItem value="new">YES</MenuItem>
            <MenuItem value="old">NO</MenuItem>
            </Select>
            </FormControl>
            </div>
            <div className={classes.item}>
              <p id="passenger">if the claim is respect to motorcycle?</p>
            <FormControl fullWidth>
            {/* <InputLabel id="demo-simple-select-label">NEW OR OLD</InputLabel> */}
            <p style={{marginTop:'5px'}}>was pillion passenger being carried?</p>
            <Select
            labelId="pillion passenger being carried"
            id="PASSENGER"
            value={passenger}
            // label=""
            onChange={(e) => {
              setPassenger(e.target.value);
            }}
          >
            <MenuItem value="new">YES</MenuItem>
            <MenuItem value="old">NO</MenuItem>
            </Select>
                </FormControl>
            </div>
            <div className={classes.item}>
              <p id="hauled">Claim respect to a lorry</p>
               <FormControl fullWidth>
                <p style={{marginTop:'5px'}}>Was trailer hauled?</p>
            <Select
          type="text"
          id="hauled"
          label="Was trailer hauled"
          variant="outlined"
          labelId="ewrwqer"
          required
          // style={{ margin: "20px 0px" }}
          value={hauled}
          onChange={(e) => {
            setHauled(e.target.value);
          }}
          >
            <MenuItem value="new">YES</MenuItem>
            <MenuItem value="old">NO</MenuItem>
            </Select>
                </FormControl>
            </div>
          </div>
  
          <div className={classes.textFields}>
            <div className={classes.item}>
              <p id="knowldege">claim respect to a lorry</p>
              <TextField
                type="text"
                id="goodState"
                label="nature of goods carried"
                variant="outlined"
                required
                style={{ margin: "20px 0px" }}
                value={nature}
                onChange={(e) => {
                  setnatureGoods(e.target.value);
                }}
              />
            </div>
            <div className={classes.item}>
              <p id="owner">Claim respect to a lorry</p>
              <TextField
                type="text"
                id="weight"
                label="Weights of Goods"
                variant="outlined"
                required
                style={{ margin: "20px 0px" }}
                value={weight}
                onChange={(e) => {
                  setweight(e.target.value);
                }}
              />
            </div>
            <div className={classes.item}>
              <p id="owner">Claim respect to a lorry</p>
              <TextField
                type="text"
                id="owner"
                label="Owner of Goods"
                variant="outlined"
                required
                style={{ margin: "20px 0px" }}
                value={goodsOwner}
                onChange={(e) => {
                  setgoodsOwner(e.target.value);
                }}
              />
            </div>
          </div>
          <Button
            style={{ margin: "50px 15px" }}
            type="submit"
            variant="outlined"
            size="large"
            className={classes.btn}
          >
            UPDATE & SUBMIT
          </Button>
          <span
            variant="outlined"
            className={classes.clear}
            onClick={(e) => {
              hardReload();
            }}
          >
            CLEAR ALL
          </span>
        </form>
      </div>
    );
}
export default Page2;