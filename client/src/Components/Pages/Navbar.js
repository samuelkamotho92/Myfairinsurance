import React from 'react';
import {Link} from 'react-router-dom';

const Formnavbar = ()=>{
return(
<div className='navbar'>
<Link to='/personaldetails' className='navlinks' 
  style={{textDecoration:'none',backgroundColor:'green',padding:'10px'}}>Personal Details</Link>
  <Link to='/insuredvehicle' className='navlinks' 
  style={{textDecoration:'none',backgroundColor:'green',padding:'10px'}}>The Insured Vehicle</Link>
  <Link to='/driversection' className='navlinks'
  style={{textDecoration:'none',backgroundColor:'green',padding:'10px'}}
  >Person Driving Section</Link>
  <Link to='/accident' className='navlinks'
  style={{textDecoration:'none',backgroundColor:'green',padding:'10px'}}
  >Accident</Link>
   <Link to='/damages' className='navlinks'
  style={{textDecoration:'none',backgroundColor:'green',padding:'10px'}}
  >Damages</Link>
</div>
    )
}
export default Formnavbar;
