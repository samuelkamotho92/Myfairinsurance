import React from 'react';
import {useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Memberspage from '../Member/MemberLandingpage'
const urlport = process.env.LOCALHOSTCONNECT;
const MembersPage = (props)=>{
    const [data,setdata] = useState('');
    const nav = useNavigate();
    const cookies = new Cookies();
    let myTk = cookies.get('jwt');
useEffect(()=>{
    const getInfo = async()=>{
    const url = 
    `http://localhost:8080/api/v1/member/authverify`;
    const resp = await fetch(url,{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({myTk}),
    credentials: 'include',
  withCredentials:true
    })
    const newdata = await resp.json();
    const email = newdata.email;
    setdata(email);
    console.log(email);
}
getInfo();
},[props.id]);
if(myTk){
    //return and decode our token,keep user signed in
    console.log(myTk)
    //create a pageId upon logging in the site

    //check if there is any other id passed
const formId = Math.floor(Date.now()/1000);
console.log(formId);
return(
<Memberspage 
email={data} formId={formId}/>
)
}else{
   alert('kindly sign up')
   nav('/member')
}
    }


export default MembersPage;