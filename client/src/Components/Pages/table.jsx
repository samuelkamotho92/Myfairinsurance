import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function StudentForm(props) {
    const email = props.email;
console.log(props.email);
const [name, setName] = useState('');
const [address, setAddress] = useState('');
const [occupation,setOccupation] = useState('');
const [natureofInjuries,setnatureofInjuries] = useState('');
const [conveyed,setconveyed] =  useState('');
const [emailUser,setEmailuser] = useState(email);
const changeName = (event) => {
	setName(event.target.value);
};

const changeaddress = (event) => {
	setAddress(event.target.value);
};

const changeoccupation = (event)=>{
    setOccupation(event.target.value);
}

const changenatureofInjuries = (event)=>{
    setnatureofInjuries(event.target.value);
}
const changeconveyed = (event)=>{
    setconveyed(event.target.value);
}

const transferValue = async(event) => {
    //pass email of the user
	event.preventDefault();
	const val = {
	name,
	address,
occupation,
natureofInjuries,
conveyed,
emailUser
	};
    console.log(val);
	props.func(val);
	clearState();
        //push to the db
const url = `http://localhost:8080/api/v1/form/resultpatient`;
const resp = await fetch(url,{
    method:"POST",
  headers:{"Content-Type":"application/json"},
  body: JSON.stringify({
    nameofPatient:val.name,
    addressofPatient:val.address,
    occupationofPatient:val.occupation,
    natureofInjuries:val.natureofInjuries,
    conveyed:val.conveyed,
    emailUser:val.emailUser
})
});
const newdata = await resp.json();
console.log(newdata);
};

const clearState = () => {
    setName('')
    setAddress('')
    setOccupation('')
    setnatureofInjuries('')
    setconveyed('')
    setEmailuser('')
};
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
return (
	<div>
   
        <form>
<Grid container spacing={2} columns={12}>
    <Grid item md={6} xs={6} lg={6}>
          <Item style={{textAlign:'start'}}>
          <label>Name</label>
          </Item>
      </Grid>
       <Grid item md={6} xs={6} lg={6}>
        <TextField id='filled-basic' 
        type='textarea' style={{margin:"5px"}}
         label="ENTER NAME" 
         value={name}
        onChange={changeName} required>
        </TextField>
</Grid>
<Grid item md={6} xs={6} lg={6}>
<Item style={{textAlign:'start'}}>
<label>Address</label>
</Item>
</Grid>
<Grid item md={6} xs={6} lg={6}>
<TextField id='filled-basic' 
        type='textarea' style={{margin:"5px"}}
         label="ENTER ADDRESS" 
         value={address}
        onChange={changeaddress} required>
        </TextField>
</Grid>
<Grid item md={6} xs={6} lg={6}>
<Item style={{textAlign:'start'}}>
<label>Occupation</label>
</Item>
</Grid>
<Grid item md={6}  xs={6} lg={6}>
<TextField id='filled-basic' 
        type='textarea' style={{margin:"5px"}}
         label="ENTER OCCUPATION" 
         value={occupation}
        onChange={changeoccupation} required>
        </TextField>
</Grid>
<Grid item md={6} xs={6} lg={6}>
<Item style={{textAlign:'start'}}>
<label>Nature of Accidents</label>
</Item>
</Grid>
<Grid item md={6} xs={6} lg={6}>
<TextField id='filled-basic' 
        type='textarea' style={{margin:"5px"}}
         label="ENTER NATURE OF ACCIDENT" 
         value={natureofInjuries}
        onChange={changenatureofInjuries} required>
        </TextField>
</Grid>
<Grid item md={6} xs={6} lg={6}>
<Item style={{textAlign:'start'}} >
<label>Were you conveyed or not</label>
</Item>
</Grid>
<Grid item md={6} xs={6} lg={6}>
<TextField id='filled-basic' 
        type='textarea' style={{margin:"5px"}}
         label="WHERE YOU CONVYED" 
         value={conveyed}
        onChange={changeconveyed} required>
        </TextField>
</Grid>
</Grid>
<Button  style={{margin:"50px 15px"}}
variant="outlined"
size="large" 
onClick={transferValue}
>
ADD PERSON DETAILS
</Button>
        </form> 
	</div>
);
}

export default StudentForm;
