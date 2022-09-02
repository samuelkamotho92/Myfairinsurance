import React from 'react';
import {Link} from 'react-router-dom'
import {useEffect,useState} from 'react';
import Table from 'react-bootstrap/Table';
// import './table.css'
// import {useNavigate} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './Admin.css';
import './table.css';
import profilepic from '../../assets/profile.jpg';
const AdminPage = (props)=>{   
const urlport = process.env.LOCALHOSTURL
const [data,setnewdata] = useState();  
const [toggler,settoggler] = useState(false);
const formJs = ()=>{
    // let sidebar = document.querySelector(".sidebar");
    // let sidebarBtn = document.querySelector(".sidebarBtn");
    
    //   sidebar.classNameList.toggle("active");
    //   if(sidebar.classNameList.contains("active")){
    //   sidebarBtn.classNameList.replace("bx-menu" ,"bx-menu-alt-right");
    // }else
    //   sidebarBtn.classNameList.replace("bx-menu-alt-right", "bx-menu");
settoggler(!toggler);
console.log('CLICKED');
console.log(toggler)
}
const getMyInfo = async(props)=>{
    }
    useEffect(()=>{
        const getData = async()=>{
            const dburl = 
    `http://localhost:8080/api/v1/admin/formdatas`;
            const resp = await fetch(dburl);
            const newdata = await resp.json();
            console.log(newdata.myForms);
              setnewdata(newdata);
        }
       getData();
    },[props.id]);
console.log(data)
if(data){

  //do fetch for various links
        return(
            <div className='admin page'>
  <div className="sidebar">
    <div className="logo-details">
      <i className='bx bxl-c-plus-plus'></i>
      <span className="logo_name">May
        <br/>fairinsurance</span>
    </div>
      <ul className="nav-links">
        <li>
           <a href="#" className="active">
            <i className='bx bx-grid-alt' ></i>
            <span className="links_name">HOME</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-box' ></i>
            <span className="links_name">REGESTERED MEMBER</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-list-ul' ></i>
            <span className="links_name">APPROVED MEMBER</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className='bx bx-pie-chart-alt-2' ></i>
            <span className="links_name">DISAPPROVED MEMBER</span>
          </a>
        </li>
        <li className="log_out">
          <a href="#">
            <i className='bx bx-log-out'></i>
            <span className="links_name">Log out</span>
          </a>
        </li>
      </ul>
  </div>
  <section className="home-section">
  <nav>
      <div className="sidebar-button">
        <i className='bx bx-menu sidebarBtn'></i>
        <span className="dashboard">Admin Dashboard</span>
      </div>
      {/* <div className="search-box">
        <input type="text" placeholder="Search..."/>
        <i className='bx bx-search' ></i>
      </div> */}
      <div className="profile-details">
        <img src={profilepic} alt=""/>
        <Link to='/'>   <span className="admin_name">
          MAYFAIRINSURANCE ADMIN</span></Link>
        <i className='bx bx-chevron-down' ></i>
      </div>
    </nav>
    <div className='home-content'>
    <div className="overview-boxes">
      <div className="box">
            <Link to='/regestered'>
          <div className="right-side">
            <div className="box-topic">REGESTERED MEMBERS</div>
            {/* <div className="number">20</div> */}
            {/* <div className="indicator">
              <i className='bx bx-up-arrow-alt'></i>
              <span className="text">Currently</span>
            </div> */}
          </div>
            </Link>
            <i className='bx bx-user'></i>
        </div>
 <div className="box">
  <Link to='/approved'>
  <div className="right-side"> 
            <div className="box-topic">APPROVED MEMBERS</div>
            {/* <div className="number">10</div> */}
            {/* <div className="indicator">
              <i className='bx bx-up-arrow-alt'></i>
              <span className="text">Currently</span>
            </div> */}
          </div>
  </Link>
  <i className='bx bx-user'></i>
        </div>
<div className="box">
  <Link to='/disapproved'>
  <div className="right-side">
            <div className="box-topic">DISAPPROVED MEMBERS</div>
            {/* <div className="number">0</div>
            <div className="indicator">
              <i className='bx bx-down-arrow-alt down'></i>
              <span className="text">CURRENTLY</span>
            </div> */}
          </div>
  </Link>
  <i className='bx bx-user'></i>
        </div>
</div>
      <div className="sales-boxes">
    <div className="recent-sales box">
    <div className="title">ALREADY FILLED IN FORMS</div>
   <div className='filledData'>
                <div className='sections'>
                    <table>
                        <tbody>   
            <tr>
              <th>formId</th>
              <th>createdby</th>
              <th>createdAt</th>
              <th>form status</th>
               <th>Admin comments</th>
              <th>View</th>
            </tr>  
            </tbody>        
    {data.myForms.map((item=>(
        <tbody>
    <tr key={item._id}>
    <td>{item.formId}</td>
    <td>{item.emailUser}</td>
    <td>{item.createdAt}</td>
    <td>{item.formStatus}</td>
    <td>{item.adminComments}</td>
    <td>{<Link to='/formuser' 
    state={{
formId:item.formId,
emailUser:"admintest1234@gmail.com",
adminComments:item.adminComments,
formStatus:item.formStatus
    } 
      
      }>Check data</Link>}</td>
    </tr>
    </tbody>
           )))}
           </table>
                </div>
             </div>
    </div>
    </div>
    </div>
    </section>
          
             </div>
        )
}else{
    return(
        <div className='admins page'>
                   <h2>Welcome To Admin Page</h2>
        <div className='membersInfo'
        style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className='regestered'>
     <Link to='/regestered'>Regesterd Members</Link>
            </div>
            <div className='regestered'>
     <Link to='/approved'>Approved Members</Link>
            </div>
            <div className='regestered'>
     <Link to='/disapproved'>disapproved Members</Link>
            </div>
             </div>
             <div className='filledData'>
                <h2>Already filled in forms</h2>
        <div>
</div>
<p>No user form yet</p>
        </div>
        </div>
    )

}

}
export default AdminPage;