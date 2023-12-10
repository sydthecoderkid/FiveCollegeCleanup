import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Button,
} from '@mui/material';

const columns = [
	{ field: 'schedule_num', headerName: 'Schedule Num', width: 130 },
	{ field: 'course_num', headerName: 'Course Num', width: 150 },
	{ field: 'semester', headerName: 'Semester', width: 130 },
	{ field: 'lang', headerName: 'Language', width: 130 },
	{ field: 'program', headerName: 'Program', width: 130 },
	{ field: 'num_of_conversations', headerName: '# Of Conversations', width: 200 },
	{ field: 'num_of_tutorials', headerName: '# Of Tutorials', width: 200 },
	{ field: 'academic_year', headerName: 'Academic Year', width: 200 },
];

export default function Courses() {
	const [program, setProgram] = useState('');
	const [lang, setLang] = useState('');
	const [academicYear, setAcademicYear] = useState('');
	const [semester, setSemester] = useState('');

	const [tableData, setTableData] = useState([]);

	const generate = () => {
		var programToPass = program;
		var langToPass = lang;
		var yearToPass = academicYear;
		var semToPass = semester;

		if (programToPass.length <= 2 || programToPass == 'Any')
			programToPass = undefined;
		if (langToPass.length <= 2 || langToPass == 'Any') langToPass = undefined;
		if (yearToPass.length <= 2 || yearToPass == 'Any') yearToPass = undefined;
		if (semToPass.length <= 2 || semToPass === 'Any') semToPass = undefined;

		fetch(
			`http://10.2.10.32:3001/courses?program=${programToPass}&lang=${langToPass}&academic_year=${yearToPass}&semester=${semToPass}`
		)
			.then((data) => data.json())
			.then((data) => setTableData(data));
	};

	useEffect(() => {
		generate();
	}, []);

	const resetFields = () => {
		setProgram('');
		setLang('');
		setAcademicYear('');
		setSemester('');
	};

	console.log(tableData);
	var counter = 0;
	return (
		<div style={{ height: 600, width: '100%' }}>
			<h1>Courses</h1>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<FormControl sx={{ m: 2, minWidth: 180 }}>
					<InputLabel id='program-label'>Program</InputLabel>
					<Select
						labelId='program-label'
						id='program'
						value={program}
						label='Program'
						onChange={(e) => {
							setProgram(e.target.value);
							console.log(e.target.value);
						}}
					>
						<MenuItem value={'SILP'}>SILP</MenuItem>
						<MenuItem value={'MLP'}>MLP</MenuItem>
						<MenuItem value={'SLC'}>SLC</MenuItem>
					</Select>
				</FormControl>

				<FormControl sx={{ m: 2, minWidth: 180 }}>
					<InputLabel id='year-label'>Academic Year</InputLabel>
					<Select
						labelId='year-label'
						id='year'
						value={academicYear}
						label='Year'
						onChange={(e) => {
							setAcademicYear(e.target.value);
							console.log(e.target.value);
						}}
					>
						<MenuItem value={2022}>2022</MenuItem>
						<MenuItem value={2023}>2023</MenuItem>
					</Select>
				</FormControl>

				<FormControl sx={{ m: 2, minWidth: 180 }}>
					<InputLabel id='lang-label'>Language</InputLabel>
					<Select
						labelId='lang-label'
						id='lang'
						value={lang}
						label='Language'
						onChange={(e) => {
							setLang(e.target.value);
							console.log(e.target.value);
						}}
					>
						<MenuItem value={'German'}>German</MenuItem>
						<MenuItem value={'Spanish'}>Spanish</MenuItem>
						<MenuItem value={'Chinese'}>Chinese</MenuItem>
						<MenuItem value={'Hindi'}>Hindi</MenuItem>
						<MenuItem value={'Vietnamese'}>Vietnamese</MenuItem>
					</Select>
				</FormControl>

				<FormControl sx={{ m: 2, minWidth: 180 }}>
					<InputLabel id='semester-label'>Semester</InputLabel>
					<Select
						labelId='semester-label'
						id='semester'
						value={semester}
						label='Semester'
						onChange={(e) => {
							setSemester(e.target.value);
							console.log(e.target.value);
						}}
					>
						<MenuItem value={'Fall'}>Fall</MenuItem>
						<MenuItem value={'Spring'}>Spring</MenuItem>
					</Select>
				</FormControl>
			</div>

			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Button variant="contained" color="secondary" onClick={generate} sx={{ m: 3.2, minWidth: 150 }}>
					Query the Database
				</Button>
				<Button variant='contained' onClick={resetFields} sx={{ m: 2 }}>
					Reset Fields
				</Button>
			</div>
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
