import React from 'react';
import {useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme)=>({
    approved:{
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
function Approved(props) {
    const classes = useStyles();
    const [data,setData] = useState("");
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
const getApprovedMembers = async()=>{
const baseUrl  = `http://localhost:8080/api/v1/admin/approved`;
const resp = await fetch(baseUrl);
const newMember = await resp.json();
setData(newMember);
    };
    getApprovedMembers();
    },[props.id])
if(data){
    return (
        <div className='approved'>
    <h2 style={{testAlign:'center'}}>Approved Members</h2>
<div className={classes.links}>
<Link to='/adminpage' style={{textDecoration:'none'}}>Admin Page</Link>
<Link to='/regestered' style={{textDecoration:'none'}}>Regestered</Link>
<Link to='/disapproved' style={{textDecoration:'none'}}>Disaproved</Link>
</div>
<div className={classes.approved}> 
            {data.getApproved.map((item=>(
            <div className={classes.details} key={item._id}>
        <div className={classes.item}>Name:{item.name}</div>
        <div className={classes.item}>Email:{item.email}</div>
       <div className={classes.actions}>
        {/* <Button onClick={()=>sendDeclineDetails(item.id)}
        style={{backgroundColor:'yellow',
        textDecoration:'none',
        margin:'0px 3px',
        cursor:'pointer'
        }}>
     Disapproved</Button> */}
       </div>
        </div>
            )))}
        </div>
        </div>
      )
}else{
    return(
<div> YOU HAVENT APPROVED ANY MEMBER YET</div>
    )
}

}

export default Approved