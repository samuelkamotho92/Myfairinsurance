import React from 'react';
import {useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import './Disapproved.css';
function Disapproved(props) {
    const [data,setData] = useState("");
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
    useEffect(()=>{
const getDisapprovedMembers = async()=>{
const baseUrl  = `http://localhost:8080/api/v1/admin/disapproved`;
const resp = await fetch(baseUrl);
const newMember = await resp.json();
setData(newMember);
    };
    getDisapprovedMembers();
    },[props.id])
if(data){
    return (
<div>
<h2 style={{testAlign:'center'}}>
    Disapproved Members</h2>
<div className='links'>
<Link to='/adminpage' 
style={{textDecoration:'none',margin:'10px'}}
className='link'
>Admin Page</Link>
<Link to='/regestered' 
style={{textDecoration:'none',margin:'10px'}}
className='link'>Regestered</Link>
<Link to='/approved' 
style={{textDecoration:'none',margin:'10px'}}
className='link'>Approved</Link>
</div>
<div className='disapproved'> 
<table className='customers'>
            <tbody>
            <tr>
            <th>Name</th>
            <th>Email</th>
            </tr>
            </tbody>
            {data.getmembers.map((item=>(
            <tbody>
        <tr key={item._id}>
        <td>{item.name}</td>
        <td>{item.email}</td>
         </tr>
        </tbody>
            )))}
            </table>
        </div>
        </div>
      )
}else{
    return(
        <div>NO MEMBER HAS BEEN DISAPPROVED YET</div>
    )
}
}

export default Disapproved