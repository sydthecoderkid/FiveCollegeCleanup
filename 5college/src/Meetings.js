import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { create } from '@mui/material/styles/createTransitions';
import React, { useEffect, useState } from "react";

const columns = [
	{ field: 's_time', headerName: 'start', width: 200 },
	{ field: 'e_time', headerName: 'end', width: 130 },
	{ field: 'location', headerName: 'location', width: 130 },
	{ field: 'campus', headerName: 'campus', width: 130 },
	{ field: 'day', headerName: 'day', width: 130 },
	{ field: 'meeting_type', headerName: 'meeting_type', width: 200 },



];





export default function Meetings() {

	const [tableData, setTableData] = useState([])
	useEffect(() => {
		fetch("http://10.2.10.32:3001/meetings")
			.then((data) => data.json())
			.then((data) => setTableData(data))

	}, [])
	console.log(tableData)
	var counter = 0;
	return (

		<div style={{ height: 600, width: '100%' }}>
			<h1>Meetings</h1>
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
