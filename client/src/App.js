import React from 'react';
import './App.css';
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from './Components/Home/Home';
import Member from './Components/Member/Member.jsx';
import Regestered from './Components/Admin/Regestered';
import Admin from './Components/Admin/Adminlog';
import Forgotpassword from './Components/forgotpassword/forgotpass';
import ApprovedMembers from './Components/ApprovedMembers/Approved';
import DisapprovedMembers from './Components/DisapprovedMembers/Disapproved';
import Adminpage from './Components/Admin/AdminPage';
import Memberpage from './Components/Member/MembersPage';
import Memberlogin from './Components/Member/Loginpage';
import MemberForgotpass from './Components/Member/Forgotpass'
import MemberReset from './Components/Member/Reset'
import Memberinfo from './Components/Member/Memberdata';
import Memberslandingpage from './Components/Member/MemberLandingpage'
import Memberformdata from './Components/Member/membersForm'
import Form from'./Components/Pages/Form';
import Page1 from './Components/Pages/Page1';
import Page2 from './Components/Pages/Page2';
import Page3 from './Components/Pages/Page3';
import Page4 from './Components/Pages/Page4';
import Page5 from './Components/Pages/Page5';
import Formuser from './Components/Admin/formUser';
import {useLocation} from 'react-router-dom';
import Cookies from 'universal-cookie';
import {useState,useEffect} from 'react';
function App(props) {
const cookies =  new Cookies();
  //check for the token if present
const mytoken = cookies.get('jwt');
//if token not admin , not logged in
console.log(mytoken);
// mytoken?<Navigate to="/memberpage"/>:
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}>Home</Route>
      <Route path='adminpage' 
      element={!mytoken?<Navigate to="admin"/>:<Adminpage/>}>
      Admin Page</Route>
    <Route path='approved' element={<ApprovedMembers />}>Approved</Route>
    <Route path='disapproved' element={<DisapprovedMembers />}>Disapproved</Route> 
      <Route path="admin" element={<Admin/>}>Admin</Route>
      <Route path="member" element={mytoken?<Navigate to='/memberlogin'/>:<Member/>}>Member</Route>
  <Route path='regestered' element={<Regestered />}>Regestered</Route>
  <Route path='form' 
  element={<Form />}>Form</Route>
   <Route path='personaldetails' element={<Page1/>}>
Personal deatils
</Route>
   <Route path='insuredvehicle' element={<Page2/>}>
    Insured Vehicle</Route>
    <Route path='driversection' element={<Page3/>}>
    Driver</Route>
    <Route path='accidents' element={<Page4/>}>
    Accident</Route>
    <Route path='damages' element={<Page5/>}>
    Damages</Route>
       <Route path='memberpage' element={<Memberpage/>}>
  Members Page</Route>
          <Route path='memberlogin' element={<Memberlogin/>}>
    Member Login</Route>
    <Route path='memberinfo' element={<Memberinfo/>}>
    Member Data</Route>
    <Route path='memberformdata' 
    element={<Memberformdata/>}>
    Member Data</Route>
    <Route path='forgotepass' element={<MemberForgotpass/>}>
    Member Data</Route>
    <Route path='memberResetpass' element={<MemberReset/>}>
    Member Reset password</Route>
    <Route path='memberslandingpage' 
    element={<Memberslandingpage/>}>
   Members landing page</Route>
   <Route path='/formuser' 
    element={<Formuser/>}>
   Form User</Route>
      </Routes>
    </div>
  );
}

export default App;

