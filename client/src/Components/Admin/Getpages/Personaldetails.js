import React from 'react';
import {useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@mui/material/Button';
import './getpages.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import Table from 'react-bootstrap/Table';

function Personaldetails(props) {
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
    //search a member and get detail
    useEffect(()=>{
      const id = props.formId;
      console.log(props.formId)
        const getPersonal = async ()=>{
      const baseUrl =`http://localhost:8080/api/v1/admin/personaldetails`
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
    <p className='title'>This are your personal details</p>
    </Item>
</Grid>
    {data.getPagedata.map((item,key)=>(
      <div className='' key={item._id} style={{margin:"20px auto"}}>
      <Grid container spacing={2} columns={12}>
  <Grid item xs={4}>
    <Item >Form Id</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.formIdUser}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item>Policy No</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.policyNo}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item>Claim No</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.claimNo}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item>Renewal Date</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.renewDate}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item>Name of the insured</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.insuredName}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item>Postal Address</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.postalAddress}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item>Telphone Number</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.tellNo}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item>Street</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.street}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item >District</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.district}</Itemfield>
  </Grid>
  <Grid item xs={4}>
    <Item>Occupation</Item>
  </Grid>
  <Grid item xs={8}>
    <Itemfield style={{textAlign:'center'}}>{item.occupation}</Itemfield>
  </Grid>
</Grid>
        </div>
    ))}
  </div>
)
    }else{
      return (
        <div>
          <p>
          No details found of Page One
          </p>
        </div>
      )
    }
}

export default Personaldetails