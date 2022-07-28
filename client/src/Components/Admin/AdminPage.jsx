import React from 'react';
import {Link} from 'react-router-dom'
import './Admin.css'
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
         <div className='filledData'>
            <h2>Already filled in forms</h2>
        <p>Check the various Information alredy filled in per section</p>
            <div className='sections'>
            <div>
           <Link to='/getpersonaldata'>Personal Details section</Link>
            </div>
            <div>
            <Link to='/getinsuredvehicle'>Insured Vehicle</Link>  
            </div>
            <div>
            <Link to='/getdriverdetails'>Driver Details</Link>
            </div>
            <div>
            <Link to='/accidentsection'>Acciddent Section</Link> 
           </div>
            <div>
            <Link to='/damagesection'>Damage Section</Link>
            </div>
            <div>
            <Link to='/resultsection'>The Result section</Link>
            </div>
            <div>
            <Link to='/generalsection'>
            General Section
            </Link>
            </div>
            <div>
            <Link to='/finalsection'>
            Final section
            </Link>
            </div>
            </div>
         </div>
         </div>
         )
}
export default AdminPage;