import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import {useState,useEffect} from 'react';

const Home = ()=>{
    return (
<div className='home'>
<Navbar />
<div>
<h3>Welcome to MayFair Insurance</h3>
<p>Best and trusted Insurance company in kenya</p>
</div>
<div>
<p>
Kindly Regster yourself to get the automated form,
 to claim
your vehicle insurance
</p>
</div>
</div>
    )
}

export default Home
