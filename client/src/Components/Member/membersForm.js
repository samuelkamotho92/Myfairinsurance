import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import {useEffect,useState} from 'react';
import Table from 'react-bootstrap/Table';
import '../Admin/table.css'

function membersForm(props) {
    const location = useLocation();
    const {email} = location.state;
    const [data,setData] = useState();
    console.log(email);
    //get data depending on the email gotten back
    useEffect(()=>{
        const getFormdata = async ()=>{
            const baseUrl =`http://localhost:8080/api/v1/form/personalforms`
            const resp = await fetch(baseUrl,{
              method:"POST",
              headers:{"Content-Type":"application/json"},
              body: JSON.stringify({
                 email
                  })
                  });
                  const newdata = await resp.json();
                  console.log(newdata);
                  setData(newdata)
                      };
                      getFormdata();
    },[props.id])
    if(data){
        console.log(data);
        return (
            <div className='filledData'>
            <h2>Already filled in forms</h2>
        <p>Check your Form</p>
            <div className='sections'>
            <table>
            <tbody>   
            <tr>
              <th>_id</th>
              <th>formId</th>
              <th>createdby</th>
              <th>createdAt</th>
              <th>View</th>
            </tr>  
            </tbody>      
{data.persInfo.map((item=>(
    <tbody>
<tr key={item._id}>
<td>{item._id}</td>
<td>{item.formId}</td>
<td>{item.emailUser}</td>
<td>{item.createdAt}</td>
<td>{<Link to='/formuser' 
state={{formId:item.formId}}>Check data</Link>}</td>
</tr>
</tbody>
       )))}
          </table>
            </div>
         </div>
          )
    }else{
        return(
            <p>No from filled yet</p>
        )
    }

}

export default membersForm