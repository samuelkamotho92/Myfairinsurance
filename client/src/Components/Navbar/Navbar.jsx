import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/' className='navlinks' 
        style={{textDecoration:'none'}}>Home</Link>
        <Link to='admin' className='navlinks' 
        style={{textDecoration:'none'}}>Admin</Link>
        <Link to='member' className='navlinks'
        style={{textDecoration:'none'}}
        >Member</Link>
    </div>
  )
}

export default Navbar