import React from 'react';
import {Link} from 'react-router-dom'
const AdminPage = ()=>{
    return(
        <div className='admin page'>
        <h2>Welcome To Admin Page</h2>
    <div className='membersInfo'
    style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <div className='regestered'>
    <h3>Check Out Regestered Members</h3> 
 <Link to='/regestered'>Regesterd Members</Link>
        </div>
        <div className='regestered'>
    <h3>Check Out Approved Members</h3> 
 <Link to='/approved'>Approved Members</Link>
        </div>
        <div className='regestered'>
    <h3>Check Out Disapproved Members</h3> 
 <Link to='/disapproved'>disapproved Members</Link>
        </div>
         </div>
         </div>
         )
}
export default AdminPage;