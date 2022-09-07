import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import {useEffect,useState} from 'react';
import Table from 'react-bootstrap/Table';
import '../Admin/table.css';
import Membernav from './Membernav';
const urlport = process.env.LOCALHOSTCONNECT;
function membersForm(props) {
    const location = useLocation();
    const {email} = location.state;
    const [data,setData] = useState();
    console.log(email);
    //get data depending on the email gotten back
    useEffect(()=>{
        const getFormdata = async ()=>{
            const baseUrl =
`http://localhost:8080/api/v1/form/personalforms`
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
            <div>
            <Membernav />
            <div className='filledData'>
            <p style={{
            textAlign:"center",
            textTransform:"uppercase",
            fontWeight:"bolder"}}>Your Form Details</p>
            <div className='sections'>
                <Table striped 
                className='customers'>
        <thead>
            <tr>
        <th>formId</th>
        <th>createdby</th>
        <th>createdAt</th>
        <th>Form status</th>
        <th>Form comments</th>
        <th>View</th>
        </tr>
      </thead>
    {data.persInfo.map((item=>(
    <tbody>
<tr key={item._id}>
<td>{item.formId}</td>
<td>{item.emailUser}</td>
<td>{item.createdAt}</td>
<td>{item.formStatus}</td>
<td>{item.adminComments}</td>
<td>
{<Link to='/formuser' 
state={{
formId:item.formId, 
emailUser:item.emailUser,
adminComments:item.adminComments,
formStatus:item.formStatus
}}>VIEW FORM</Link>}</td>
</tr>
</tbody>
)))}
</Table>
            {/* <table>
            <tbody>   
            <tr>
              <th>formId</th>
              <th>createdby</th>
              <th>createdAt</th>
              <th>Form status</th>
              <th>Form comments</th>
              <th>View</th>
            </tr>  
            </tbody>      
{data.persInfo.map((item=>(
    <tbody>
<tr key={item._id}>
<td>{item.formId}</td>
<td>{item.emailUser}</td>
<td>{item.createdAt}</td>
<td>{item.formStatus}</td>
<td>{item.adminComments}</td>
<td>
{<Link to='/formuser' 
state={{
formId:item.formId, 
emailUser:item.emailUser,
adminComments:item.adminComments,
formStatus:item.formStatus
}}>VIEW FORM</Link>}</td>
</tr>
</tbody>
       )))}
          </table> */}
            </div>
         </div>
            </div>

          )
    }else{
        return(
            <div>
                <Membernav />
                <p>No formm filled yet</p>
            </div>

        )
    }

}

export default membersForm