import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { create } from '@mui/material/styles/createTransitions';
import React, { useEffect, useState } from "react";

const columns = [
	{ field: 'schedule_num', headerName: 'schedule_num', width: 200 },
	{ field: 'course_num', headerName: 'course_num', width: 130 },
	{ field: 'semester', headerName: 'semester', width: 130 },
	{ field: 'lang', headerName: 'lang', width: 130 },
	{ field: 'program', headerName: 'program', width: 130 },
	{ field: 'num_of_conversations', headerName: 'numConversations', width: 200 },
	{ field: 'num_of_tutorials', headerName: 'numTutorials', width: 200 },
	{ field: 'academic_year', headerName: 'academicYear', width: 200 },
	{ field: 'course_name', headerName: 'courseName', width: 200 },






];





export default function Courses() {

	const [tableData, setTableData] = useState([])
	useEffect(() => {
		fetch("http://10.2.10.32:3001/courses")
			.then((data) => data.json())
			.then((data) => setTableData(data))

	}, [])
	console.log(tableData)
	var counter = 0;
	return (

		<div style={{ height: 600, width: '100%' }}>
			<h1>Courses</h1>
			<DataGrid
				rows={tableData}
				getRowId={(row) => counter += 1}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 5, pageSize: 10 },
					},
				}}
				pageSizeOptions={[10, 15]}
				checkboxSelection
			/>
		</div>
	);
}
