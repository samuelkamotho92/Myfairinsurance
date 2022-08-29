import React, { useState } from 'react';
import StudentForm from './table';
import jsonData from './pageSixjson';
import '../Admin/table.css';
import {makeStyles} from '@material-ui/core';
const useStyles = makeStyles((theme)=>({
    tablestripped:{
display:'flex',
alignItems:"center",
justifyContent:"center"
    },
    formInputs:{
        margin:'25px auto'
    }
}));
function TableData(props) {
	console.log(props.email);
    const classes = useStyles();
let [studentData, setStudentData] = 
useState(jsonData);
const tableRows = studentData.map((info) => {
	return (
	<tr>
		<td>{info.id}</td>
		<td>{info.name}</td>
		<td>{info.address}</td>
        <td>{info.occupation}</td>
        <td>{info.natureofInjuries}</td>
        <td>{info.conveyed}</td>
	</tr>
	);
});

const addRows = (data) => {
	const totalStudents = studentData.length;
	data.id = totalStudents + 1;
	// studentData.push({emailUser:props.email});
	const updatedStudentData = [...studentData];
	updatedStudentData.push(data);
	console.log(updatedStudentData);
	setStudentData(updatedStudentData);
	//onclick on submit take the data push to db
};

return (
    <div>
<div className={classes.tablestripped}>
	<table >
		<thead>
		<tr>
			<th>No</th>
			<th>Name</th>
			<th>Address</th>
            <th>Occupation</th>
            <th>Nature of Injuries</th>
            <th>conveyed</th>
		</tr>
		</thead>
		<tbody>{tableRows}</tbody>
	</table>
	</div>
    <div className={classes.formInputs}>
    <StudentForm func={addRows} email={props.email}/>
    </div>
    </div>
	
);
}

export default TableData;
