import React from 'react'
import {useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './getpages.css'
function Resultdetails(props){
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
    const [data,setData] = useState();
    useEffect(()=>{
        const id = props.formId;
        console.log(props.formId)
          const getPersonal = async ()=>{
        const baseUrl =
  `http://localhost:8080/api/v1/admin/Resultdetails`
              const resp = await fetch(baseUrl,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                  id
              })
              });
              const newdata = await resp.json();
              setData(newdata)
                  };
                  getPersonal();
      },[props.id])
      if(data){
        console.log(data);
        const getpersonInjured = async()=>{
            //check if data exist
            const email = data.getPagedata.map((item)=>{
                return item.emailUser
            });
            const userEmail = email[0];
            console.log(userEmail);
             const url =  
 `http://localhost:8080/api/v1/admin/personaldetails`;
            const resp = await fetch(url,{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({
                  userEmail
              })
            })
            const mydata = await resp.json();
            console.log(mydata);
        }
        getpersonInjured();
  return(
    <div>
      <Grid item xs={12}>
    <Item style={{textAlign:'center'}}>
    <p className='title'>Result details</p>
    </Item>
</Grid>
      {data.getPagedata.map((item)=>(
        <div className='' key={item._id}>
           <Grid container spacing={2} columns={12}>
           <Grid item xs={4}>
    <Item >AnyInjuries Occured</Item>
  </Grid>
  <Grid item xs={8}>
<Item style={{textAlign:'center'}}>{item.anyInjuries}</Item>
  </Grid>
  <Grid item xs={4}>
    <Item >Where they medicaly Attended</Item>
  </Grid>
  <Grid item xs={8}>
    <Item style={{textAlign:'center'}}>{item.medicalyAttended
}</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>Hospital Name</Item>
  </Grid>
  <Grid item xs={8}>
    <Item style={{textAlign:'center'}}>{item.hospitalName}</Item>
  </Grid>   
  <Grid item xs={4}>
    <Item>Hospital Address</Item>
  </Grid>
  <Grid item xs={8}>
    <Item style={{textAlign:'center'}}>{item.
hospitalAddress}</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>Caused harm to property</Item>
  </Grid>
  <Grid item xs={8}>
    <Item style={{textAlign:'center'}}>{item.harmProperty}</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>Name of the person owner of property</Item>
  </Grid>
  <Grid item xs={8}>
    <Item style={{textAlign:'center'}}>{item.nameOwner}</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>Address of the Owner</Item>
  </Grid>
  <Grid item xs={8}>
    <Item style={{textAlign:'center'}}>{item.addressOwner}</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>Nature of damage</Item>
  </Grid>
  <Grid item xs={8}>
    <Item style={{textAlign:'center'}}>{item.natureDamage}</Item>
  </Grid>
           </Grid>
  <div>
    </div>
          </div>
      ))}
    </div>
  )
      }else{
        return (
          <div>
            <p>
            No details found for page Six
            </p>
          </div>
        )
      }
}

export default Resultdetails