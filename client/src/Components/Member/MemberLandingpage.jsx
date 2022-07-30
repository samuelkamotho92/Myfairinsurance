import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
function MemberLandingPage(props) {
  console.log(props.email,props.formId);
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
    <Link to="/form" 
    state={{ email: props.email ,formId:props.formId}} >
  Form
</Link>
    </div>
    <div className='createForm'>
  <Link to='/memberinfo' 
  state={{ email: props.email , formId:props.formId}}>View Filed Form</Link>

    </div>
    </div>
    </div>
  )
}

export default MemberLandingPage