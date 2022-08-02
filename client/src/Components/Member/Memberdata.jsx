import React from 'react'
import {useState,useEffect} from 'react'
import {makeStyles} from '@material-ui/core';
import {useLocation} from 'react-router-dom';
import Pagetwo from '../Pages/Getpagesdata/GetpageTwo';
import PageOne from '../Pages/Getpagesdata/GetpageOne';
import PageThree from '../Pages/Getpagesdata/Getpagethree';
const MemberData =  (props)=>{
  const location = useLocation();
  const {email} = location.state;
  console.log(email);
    //fecth data depending on id;

    //get all data if  the email does exists

    //regardless of the id
        return(
       <div className='myData'>
<div>
  <PageOne emailUser={email}/>
  <Pagetwo emailUser={email}/>
  <PageThree emailUser={email}/>
</div>
</div> 
        )
    }

export default MemberData;