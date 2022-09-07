// import React from 'react';
// import {Link} from 'react-router-dom';
// import {makeStyles} from '@material-ui/core';
// const useStyles = makeStyles((theme)=>({
//   myemail:{
// positon:'relative',
// bottom:'0px'
//   }
// }))
// const Formnavbar = (props)=>{
//   const classes =  useStyles()
//   console.log(props.email,props.formId,
//     props.currentFormId,props.emailUser);
// return(
// <div className='navbar'>
// {/* 
//   CREATE ROUTES */}
// <Link to='/personaldetails' 
// className='navlinks' 
//   state={{email: props.email ,
//   formId:props.formId ,
//   currentFormId:props.currentFormId,
//   emailUser:props.emailUser
//   }}>
//   Personal Details</Link>
//   <Link to='/insuredvehicle' className='navlinks' 
//   state={{  email: props.email ,
//     formId:props.formId , 
//     currentFormId:props.currentFormId,
//     emailUser:props.emailUser}}
//   >The Insured Vehicle</Link>
//   <Link to='/driversection' className='navlinks'
//   state={{ email: props.email ,
//     formId:props.formId ,
//     currentFormId:props.currentFormId,
//     emailUser:props.emailUser
//   }}
//   >Person Driving Section</Link>
//   <Link to='/accidents' className='navlinks'
//   state={{  email: props.email ,
//     formId:props.formId,
//     currentFormId:props.currentFormId,
//     emailUser:props.emailUser}}
//   >Accident</Link>
//    <Link to='/damages' className='navlinks'
//   state={{ email: props.email ,
//     formId:props.formId ,
//     currentFormId:props.currentFormId,
//     emailUser:props.emailUser
//   }}
//   >Damages</Link>
//    <Link to='/' className='navlinks'>
//     Home
//   </Link>
//   <Link to='/result' className='navlinks'
//   state={{email: props.email ,
//   formId:props.formId,
//   currentFormId:props.currentFormId,
//   emailUser:props.emailUser}}>
//     The Result
//   </Link>
// </div>
//     )
// }
// export default Formnavbar;

import React, {useState, useEffect} from 'react'
import '../Navbar/Nav.css';
import {Link} from 'react-router-dom';
const  Navbar =  (props)=>{
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <nav>
  {(toggleMenu || screenWidth > 800) && (
  <ul className="list">
  <li className="items">
<Link
to='/personaldetails'  
className='navlinks' 
  state={{
  email: props.email ,
  formId:props.formId ,
  currentFormId:props.currentFormId,
  emailUser:props.emailUser
  }}
>Personal Details</Link>
  </li>
      <li className="items">
      <Link
to='/insuredvehicle'  
className='navlinks' 
  state={{email: props.email ,
  formId:props.formId ,
  currentFormId:props.currentFormId,
  emailUser:props.emailUser
  }}
>Insured Vehicle</Link>  
      </li>
      <li className='items'>
      <Link
to='/driversection'  
className='navlinks' 
  state={{email: props.email ,
  formId:props.formId ,
  currentFormId:props.currentFormId,
  emailUser:props.emailUser
  }}
>Driver section</Link>  
      </li>
      <li className='items'>
      <Link
to='/accidents'  
className='navlinks' 
  state={{email: props.email ,
  formId:props.formId ,
  currentFormId:props.currentFormId,
  emailUser:props.emailUser
  }}
>Accidents</Link>    
      </li>
      <li className='items'>
      <Link
to='/damages'  
className='navlinks' 
  state={{email: props.email ,
  formId:props.formId ,
  currentFormId:props.currentFormId,
  emailUser:props.emailUser
  }}
>Damages</Link>    
      </li>
      <li className='items'>
      <Link
to='/result'  
className='navlinks' 
  state={{email: props.email ,
  formId:props.formId ,
  currentFormId:props.currentFormId,
  emailUser:props.emailUser
  }}
>Damages</Link>     
      </li>
  <li className='items'>
  <Link to='/' className='navlinks'>
  Home
</Link>  
      </li>

    </ul>
      )}
<button onClick={toggleNav} 
      className="btn">LINKS</button>
    </nav>
  )
}
export default Navbar;