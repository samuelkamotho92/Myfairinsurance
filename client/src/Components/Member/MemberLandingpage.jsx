import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
function MemberLandingPage(props) {
  const handleClick = (e)=>{
e.preventDefault();
console.log('clicked');
  }
  return (
    <div className='Memberslandingpage'>
      <h2>Welcome to your Portol</h2>
    <p>{props.email}</p>
    <div className='membersContent'>
    <div className='createForm'>
    <Link to="/form" state={{ email: props.email }}>
  Form
</Link>
    </div>
    <div className='createForm'>
  <Link to='/memberinfo' state={{ email: props.email }}>View Filed Form</Link>

    </div>
    </div>
    </div>
  )
}

export default MemberLandingPage