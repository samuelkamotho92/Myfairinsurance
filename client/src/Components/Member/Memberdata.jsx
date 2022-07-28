import React from 'react'
import {useState,useEffect} from 'react'
import {makeStyles} from '@material-ui/core';
import {useLocation} from 'react-router-dom';
import Pagetwo from '../Pages/Getpagesdata/GetpageTwo';
import PageOne from '../Pages/Getpagesdata/GetpageOne';
import PageThree from '../Pages/Getpagesdata/Getpagethree';
const MemberData =  (props)=>{
    //fecth data depending on id;
        return(
       <div className='myData'>
<div>
  <PageOne />
  <Pagetwo />
  <PageThree />
</div>
</div> 
        )
    }

export default MemberData;