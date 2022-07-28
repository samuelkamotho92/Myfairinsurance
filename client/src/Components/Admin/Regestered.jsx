import React from 'react';
import {useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme)=>({
    regestered:{
     display:'grid',
     flexWrap:'wrap',
     gridTemplateColumns:'repeat(2 ,1fr)',
     gridAutoRows: '150px',
    },
    details:{
        backgroundColor:'teal',
        borderRadius:"15px",
        transitionDelay:'0.5s',
        transition:'1s ease',
       
        '&:hover':{
            boxShadow:"2px 5px #888888",
            padding:'3px 0px'
        },
        margin:'10px 5px',
        position:'relative'
       
    },
    item:{
        padding:"5px",
    },
    actions:{
position:'absolute',
bottom:'0px',
display:'flex',
    },
    links:{
display:'flex',
flexWrap:'wrap',
justifyContent:'flex-end',
alignItems:'flex-end',
marginRight:'20px'
},
}))
function Regestered(props) {
const [data,setData] = useState("");
const classes = useStyles();
const handleClick = async (props)=>{
const email = props;
console.log(props);
//fetch the user
try{
const url = `http://localhost:8080/api/v1/admin/approved`;
const resp =  await fetch(url,{
method:'POST',
headers:{"Content-Type":"application/json"},
body:JSON.stringify({email}),
credentials: 'include',
withCredentials:true
 });
    const getMember = await resp.json();
    console.log(getMember);
    if(getMember.message){
        alert(`${getMember.message}`);
    }
}catch(err){
console.log(err);
}
};
const sendDeclineDetails = async (props)=>{
const email = props;
console.log(props);
//fetch the user
try{
const url = `http://localhost:8080/api/v1/admin/disapproved`;
const resp =  await fetch(url,{
method:'POST',
headers:{"Content-Type":"application/json"},
body:JSON.stringify({email}),
credentials: 'include',
withCredentials:true
 });
    const getMember = await resp.json();
    console.log(getMember);
    if(getMember.message){
        alert(`${getMember.message}`);
    }
}catch(err){
console.log(err);
}
};

useEffect(()=>{
const getMembers = async (props)=>{
const baseUrl =
 `http://localhost:8080/api/v1/admin/getmembers`
const resp = await fetch(baseUrl);
const newdata = await resp.json();
console.log(newdata);
setData(newdata)
    };
getMembers();
},[props.id])

if(data){
    console.log(data);
    return (
        <div>
        <h2 style={{testAlign:'center'}}>Regestered Members</h2>
        <div className={classes.links}>
<Link to='/' style={{textDecoration:'none'}}>Home</Link>
<Link to='/approved' style={{textDecoration:'none'}}>Approved</Link>
<Link to='/disapproved' style={{textDecoration:'none'}}>Disaproved</Link>
</div>
        <div className={classes.regestered}> 
            {data.regestered.map((item=>(
            <div className={classes.details} key={item._id}>
        <div className={classes.item}>Name:{item.name}</div>
        <div className={classes.item}>Email:{item.email}</div>
       <div className={classes.actions}>
        <Button onClick={()=>handleClick(item.email)}
        style={{backgroundColor:'yellow',
        textDecoration:'none',
        margin:'0px 3px',
        cursor:'pointer'
        }}>
     Approve</Button>
        <Button onClick={()=>sendDeclineDetails(item.email)} 
        style={{backgroundColor:'red',textDecoration:'none',
        margin:'0px 3px'
        }}>Decline</Button>
       </div>
        </div>
            )))}
        </div>
        </div>
      )
}else{
    return(
        <div> NO MEMBER HAS REGESTERED YET</div>
    )
}
}

export default Regestered