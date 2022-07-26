import React from 'react'
import {useState,useEffect} from 'react'
import {makeStyles} from '@material-ui/core';
const MemberData =  (props)=>{
    //fecth data depending on id;
    const [data,setdata] = useState();
    useEffect(()=>{
        const getPersonalinfo = async (props)=>{
            const url = `http://localhost:8080/api/v1/member/getinfo`;
            const resp = await fetch(url);
            const data = resp.json();
            setdata(data);
        }
        getPersonalinfo();
    },[props.id])
    if(data){
        console.log(data);
        return(
            <div>

            </div>
        )
    }
}
export default MemberData;