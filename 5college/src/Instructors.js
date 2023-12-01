import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { create } from '@mui/material/styles/createTransitions';
import React, { useEffect, useState } from "react";

const columns = [
	{ field: 'email ', headerName: 'email', width: 200 },
	{ field: 'first_name', headerName: 'First name', width: 130 },
	{ field: 'last_name', headerName: 'Last name', width: 130 },
	{ field: 'preferred_name', headerName: 'preferredName', width: 130 },
	{ field: 'pronouns', headerName: 'pronouns', width: 100 },
	{ field: 'role', headerName: 'role', width: 100 },
	{ field: 'academic_career', headerName: 'academicCareer', width: 130 },
	{ field: 'languages_taught', headerName: 'languages', width: 130 },
	{ field: 'campus', headerName: 'campus', width: 130 },
	{ field: 'phone', headerName: 'phone', width: 100 },
	{ field: 'graduation_year', headerName: 'graduationYear', width: 130 },
	{ field: 'approved_to_hire', headerName: 'approvedToHire', width: 130 },
	{ field: 'paperwork_status', headerName: 'paperworkStatus', width: 130 },
	{ field: 'notes', headerName: 'notes', width: 130 },
	{ field: 'hiring_history', headerName: 'hiringHist', width: 130 },








];





export default function Instructors() {

	const [tableData, setTableData] = useState([])
	useEffect(() => {
		fetch("http://10.2.10.32:3001/instructors")
			.then((data) => data.json())
			.then((data) => setTableData(data))

	}, [])
	console.log(tableData)
	var counter = 0;
	return (

		<div style={{ height: 600, width: '100%' }}>
			<h1>Instructors</h1>
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
