import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { create } from '@mui/material/styles/createTransitions';
import React, { useEffect, useState } from "react";

const columns = [
	{ field: 'email', headerName: 'email', width: 200 },
	{ field: 'first_name', headerName: 'First name', width: 130 },
	{ field: 'last_name', headerName: 'Last name', width: 130 },
	{ field: 'academic_career', headerName: 'academicCareer', width: 130 },
	{ field: 'campus', headerName: 'campus', width: 130 },
	{ field: 'graduation_year', headerName: 'graduationYear', width: 130 },
	{ field: 'phone', headerName: 'phone', width: 100 },
	{ field: 'preferred_name', headerName: 'preferredName', width: 130 },
	{ field: 'pronouns', headerName: 'pronouns', width: 100 },
	{

	},

];





export default function Students() {

	const [tableData, setTableData] = useState([])
	useEffect(() => {
		fetch("http://10.2.10.32:3001/students")
			.then((data) => data.json())
			.then((data) => setTableData(data))

	}, [])

	return (

		<div style={{ height: 600, width: '100%' }}>
			<h1>Students</h1>
			<DataGrid
				rows={tableData}
				getRowId={(row) => row.email}
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
