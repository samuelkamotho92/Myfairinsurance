import React from 'react';
import {useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@mui/material/Button';

function Personaldetails(props) {
    const [data,setData] = useState();
    //search a member and get detail
    useEffect(()=>{
        const getPersonal = async (props)=>{
            const baseUrl =
         `http://localhost:8080/api/v1/admin/personaldetails`
            const resp = await fetch(baseUrl);
            const newdata = await resp.json();
            console.log(newdata);
            setData(newdata)
                };
            getMembers();
    },[props.id])
  return (
    <div>Personal Details</div>
  )
}

export default Personaldetails