import React from 'react'
import {useState,useEffect} from 'react'
import {makeStyles} from '@material-ui/core';
import {useLocation} from 'react-router-dom';

const MemberData =  (props)=>{
    const [pageData,setpageData]  = useState('');
    //fecth data depending on id;
    const [data,setdata] = useState();
    const location = useLocation();
    const {email} = location.state
    useEffect(()=>{
    const getPersonalinfo = async (props)=>{
    const url = `http://localhost:8080/api/v1/member/getinfo`;
    const resp = await fetch(url,{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({email}),
    credentials: 'include',
    withCredentials:true
     });
const newdata = await resp.json();
const myItems =  newdata.data[0];
console.log(myItems.emailUser);
 const items = Object.entries(myItems).forEach(([key, value]) => {
    return`<h2>${key}</h2>: <p>${value}</P>`
});
setpageData(items);
            setdata(data);
      if(items){
        return(
            <p></p>
        )
      }
        }
        getPersonalinfo();
    },[props.id])
    // return(
    //     <div>
    // <h1>Your Already filled Data</h1>
    // <div style={{display:'flex',
    // justifyContent:'flex-end',alignItems:'flex-end'}}>
    // <p>{email}</p>
    // <div>
    // <p>{pageData}</p>
    // </div>
    // </div>
    
    //     </div>
    // )
    }

export default MemberData;