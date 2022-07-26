import React from 'react';
import {useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';
const MembersPage = (props)=>{
    const nav = useNavigate();
    const cookies = new Cookies();
const myTk = cookies.get('jwt');

if(myTk){
    //return and decode our token,keep user signed in
    console.log(myTk)
return(
    // <div>Working not yet</div>
     <div className='membesPage'>
    <h2>Welcome to your Portol</h2>
    <div className='membersContent'>
    <div className='createForm'>
    <Link to='/form'>Form</Link>
    </div>
    <div className='createForm'>
    <Link to='/memberinfo'>View Filed Form</Link>
    </div>
    </div>
            </div>
        )
}else{
   alert('kindly sign up')
   nav('/member')
}
}

export default MembersPage;