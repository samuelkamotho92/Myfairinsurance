import React from 'react'
import {useState,useEffect} from 'react';
import './getpages.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function Accidents(props) {
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: "#212121",
    backgroundColor:'#f5f5f5'
  }));
  const Itemfield = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "#212121",
    backgroundColor:'wheat'
  }));
    const [data,setData] = useState();
    useEffect(()=>{
        const id = props.formId;
        console.log(props.formId)
          const getPersonal = async ()=>{
        const baseUrl =
        `http://localhost:8080/api/v1/admin/accidentsDetails`
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
  return(
    <div>
            <Grid item xs={12}>
    <Item style={{textAlign:'center'}}>
    <p className='title'>Accident details</p>
    </Item>
</Grid>
      {data.getPagedata.map((item)=>(
        <div className='' key={item._id}>
             <Grid container spacing={2} columns={12}>
             <Grid item xs={4}>
    <Item >Date of Occurence</Item>
  </Grid>
  <Grid item xs={8} >
    <Itemfield style={{textAlign:'center'}}>{item.dateOccurence}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item>Time</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.time}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item>Place(Street or Road and Town)</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.place}</Itemfield>
  </Grid>   
  <Grid item xs={4}>
    <Item >Were you in the vehicle</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.yourLocation}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item >Was it reported</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.reported}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item>On what side of the street was it reported to you</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.positionVehicle}</Itemfield>
  </Grid> 
  <Grid item xs={4}>
    <Item >What was the width of the street</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.widthStreet}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item >And at what speed was it being driven at time of accident</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.speedBefore}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item>And at what speed was it being driven at time of accident</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.speedDuring}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item >Was the vehicle properly locked</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.vehicleLocked}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item>is it fitted with any anti-theft device such as burglar alarms,steering lock,etc</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.antitheft}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item>Nature of Accidents</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.natureAccident}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item>Cause of Accident</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.causeAccident}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item>Sketch Scene</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.sketchScene}</Itemfield>
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
            No details found for page Four
            </p>
          </div>
        )
      }
}

export default Accidents