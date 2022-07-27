import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import {useState,useEffect} from 'react';
import Cookies from 'universal-cookie';
// const getsDetails = (props)=>{
// const [data,setdata] = useState('');
// const cookies = new Cookies();
// let myTk = cookies.get('jwt');
// let email;
// useEffect(()=>{
// const getInfo = async()=>{
// const url = `http://localhost:8080/api/v1/member/authverify`;
// const resp = await fetch(url,{
// method:'POST',
// headers:{"Content-Type":"application/json"},
// body:JSON.stringify({myTk}),
// credentials: 'include',
// withCredentials:true
// })
// const newdata = await resp.json();
// email = newdata.email;
// setdata(email);
// console.log(data);
// }
// getInfo();
// },[props.id]);
// console.log(email)
// return email;
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
