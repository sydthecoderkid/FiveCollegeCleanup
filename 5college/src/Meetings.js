import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const columns = [
	{ field: 's_time', headerName: 'start', width: 200 },
	{ field: 'e_time', headerName: 'end', width: 130 },
	{ field: 'location', headerName: 'location', width: 130 },
	{ field: 'campus', headerName: 'campus', width: 130 },
	{ field: 'day', headerName: 'day', width: 130 },
	{ field: 'meeting_type', headerName: 'meeting_type', width: 200 },
];



export default function Meetings() {
	const [sem, setSem] = useState('');
	const [year, setYear] = useState('');
	const [campus, setCampus] = useState('');
	const [day, setDay] = useState('');

	const [tableData, setTableData] = useState([]);

	const generate = () => {
		fetch(`http://10.2.10.32:3001/meetings?semester=${sem}&year=${year}&campus=${campus}&day=${day}`)
			.then((data) => data.json())
			.then((data) => setTableData(data));
	};
	useEffect(() => {
		generate()
	}, []);
	console.log(tableData);
	var counter = 0;
	return (
		<div style={{ height: 600, width: '100%' }}>
			<h1>Meetings</h1>
			<button onClick={generate}>Test Query</button>
			<FormControl sx={{ m: 2, minWidth: 180 }}>
				<InputLabel id='semester-label'>Semester</InputLabel>
				<Select
					labelId='semester-label'
					id='semester'
					value={sem}
					label='Semester'
					onChange={(e) => {
						setSem(e.target.value);
						console.log(e.target.value);
					}}
				>
					<MenuItem value={'Spring'}>Spring</MenuItem>
					<MenuItem value={'Fall'}>Fall</MenuItem>
				</Select>
			</FormControl>

			<FormControl sx={{ m: 2, minWidth: 180 }}>
				<InputLabel id='year-label'>Year</InputLabel>
				<Select
					labelId='year-label'
					id='year'
					value={year}
					label='Year'
					onChange={(e) => {
						setYear(e.target.value);
						console.log(e.target.value);
					}}
				>
					<MenuItem value={2019}>2019</MenuItem>
					<MenuItem value={2020}>2020</MenuItem>
					<MenuItem value={2021}>2021</MenuItem>
				</Select>
			</FormControl>

			<FormControl sx={{ m: 2, minWidth: 180 }}>
				<InputLabel id='campus-label'>Campus</InputLabel>
				<Select
					labelId='campus-label'
					id='campus'
					value={campus}
					label='Campus'
					onChange={(e) => {
						setCampus(e.target.value);
						console.log(e.target.value);
					}}
				>
					<MenuItem value={'Amherst'}>Amherst</MenuItem>
					<MenuItem value={'Umass'}>Umass</MenuItem>
					<MenuItem value={'Smith'}>Smith</MenuItem>
					<MenuItem value={'Mount Holyoke'}>Mount Holyoke</MenuItem>
					<MenuItem value={'Hampshire'}>Hampshire</MenuItem>
				</Select>
			</FormControl>

			<FormControl sx={{ m: 2, minWidth: 180 }}>
				<InputLabel id='day-label'>Day</InputLabel>
				<Select
					labelId='day-label'
					id='day'
					value={day}
					label='Day'
					onChange={(e) => {
						setDay(e.target.value);
						console.log(e.target.value);
					}}
				>
					<MenuItem value={'Monday'}>Monday</MenuItem>
					<MenuItem value={'Tuesday'}>Tuesday</MenuItem>
					<MenuItem value={'Wednesday'}>Wednesday</MenuItem>
					<MenuItem value={'Thursday'}>Thursday</MenuItem>
					<MenuItem value={'Friday'}>Friday</MenuItem>
				</Select>
			</FormControl>

			<DataGrid
				rows={tableData}
				getRowId={(row) => (counter += 1)}
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
