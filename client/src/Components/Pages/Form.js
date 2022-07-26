import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import {Link} from 'react-router-dom'
import Navbar from './Navbar'
const Form = ()=>{
    return(
        <div>
 <Navbar />
<h2 
style={{textAlign:'center',
textTransform:'uppercase'}}>
    
Motor Vehicle Claim Form</h2>
<p style={{textAlign:'center',textTransform:'uppercase'}}>
The issue of this form should not to be taken as an admission
 of Liablity</p>
<p style={{textAlign:'center',textTransform:'uppercase',margin:"20px auto"}}>
In no case admit your fault or make any or offer payment without any written authority of the company
Answer All questions fully to avoid  unneccsary correspondance delay
in the settlement of claim
</p>
        </div>
       
    )
}
export default Form