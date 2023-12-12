import { DataGrid } from '@mui/x-data-grid';
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
	Input
} from '@mui/material';
import React, { useEffect, useState } from 'react';

const columns = [
	{ field: 'email', headerName: 'Email', width: 200 },
	{ field: 'first_name', headerName: 'First Name', width: 130 },
	{ field: 'last_name', headerName: 'Last Name', width: 130 },
	{ field: 'preferred_name', headerName: 'Preferred Name', width: 130 },
	{ field: 'pronouns', headerName: 'Pronouns', width: 100 },
	{ field: 'role', headerName: 'Role', width: 100 },
	{ field: 'academic_career', headerName: 'Academic Career', width: 130 },
	{ field: 'languages_taught', headerName: 'Languages', width: 130 },
	{ field: 'campus', headerName: 'Campus', width: 130 },
	{ field: 'phone', headerName: 'Phone', width: 130 },
	{ field: 'graduation_year', headerName: 'Grad. Year', width: 130 },
	{ field: 'approved_to_hire', headerName: 'Approved To Hire', width: 130 },
	{ field: 'paperwork_status', headerName: 'Paperwork Status', width: 130 },
	{ field: 'notes', headerName: 'Notes', width: 130 },
	{ field: 'hiring_history', headerName: 'Hiring Hist', width: 130 },
	{ field: 'course_num', headerName: 'Course Num', width: 150 },
	{ field: 'semester', headerName: 'Semester', width: 130 },
	{ field: 'academic_year', headerName: 'Academic Year', width: 130 },
];

export default function Instructors() {
	const [tableData, setTableData] = useState([]);
	const [role, setRole] = useState('');
	const [email, setEmail] = useState('');
	const [year, setYear] = useState('');
	const [semester, setSemester] = useState('');
	const [courseNum, setCourseNum] = useState('');

	const generate = () => {

		var roleToPass = role
		var emailToPass = email
		var yearToPass = year
		var semToPass = semester
		var courseNumToPass = courseNum


		if (roleToPass.length <= 2 || roleToPass == 'Any') roleToPass = undefined
		if (emailToPass.length <= 2 || emailToPass == 'Any') emailToPass = undefined
		if (yearToPass.length <= 2 || yearToPass == 'Any') yearToPass = undefined
		if (courseNumToPass.length <= 2 || courseNumToPass === 'Any') courseNumToPass = undefined
		if (semToPass.length <= 2 || semToPass === 'Any') semToPass = undefined

		fetch(`http://10.2.10.32:3001/instructors?role=${roleToPass}&email=${emailToPass}&year=${yearToPass}&semester=${semToPass}&course_num=${courseNumToPass}`)
			.then((data) => data.json())
			.then((data) => setTableData(data));
	};
	useEffect(() => {
		generate()
	}, []); // Add dependencies here

	var counter = 0;
	console.log(tableData)

	const resetFields = () => {
		setRole('');
		setEmail('');
		setYear('');
		setSemester('');
		setCourseNum('');
	};

	var counter = 0;

	return (
		<div style={{ height: 600, width: '100%' }}>
			<h1>Instructors</h1>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<FormControl sx={{ m: 2, minWidth: 180 }}>
                    <InputLabel id='email-label'>Email</InputLabel>
                    <Input 
                    	labelId='email-label'
                        id='email'
                        value={email}
                        label='Email'
                        onChange={(e) => {
                            setEmail(e.target.value);
                            console.log(e.target.value);
                        }}
                >
                     </Input>
                </FormControl>

				<FormControl sx={{ m: 2, minWidth: 180 }}>
					<InputLabel id='role-label'>Role</InputLabel>
					<Select
						labelId='role-label'
						id='role'
						value={role}
						label='Role'
						onChange={(e) => {
							setRole(e.target.value);
							console.log(e.target.value);
						}}
					>
						<MenuItem value={'Any'}>Any</MenuItem>
						<MenuItem value={'Conversation Partner'}>
							Conversation Partner
						</MenuItem>
						<MenuItem value={'Mentor'}>Mentor</MenuItem>
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
						<MenuItem value={'Any'}>Any</MenuItem>
						<MenuItem value={2019}>2019</MenuItem>
						<MenuItem value={2020}>2020</MenuItem>
						<MenuItem value={2021}>2021</MenuItem>
						<MenuItem value={2021}>2022</MenuItem>
						<MenuItem value={2021}>2023</MenuItem>
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
						<MenuItem value={'Any'}>Any</MenuItem>
						<MenuItem value={'Spring'}>Spring</MenuItem>
						<MenuItem value={'Fall'}>Fall</MenuItem>
					</Select>
				</FormControl>

				<FormControl sx={{ m: 2, minWidth: 180 }}>
					<InputLabel id='courseNum-label'>Course Number</InputLabel>
					<Select
						labelId='courseNum-label'
						id='courseNum'
						value={courseNum}
						label='Course Number'
						onChange={(e) => {
							setCourseNum(e.target.value);
							console.log(e.target.value);
						}}
					>
						<MenuItem value={'Any'}>Any</MenuItem>
						<MenuItem value={'FORLANGC 111HM'}>FORLANGC 111HM</MenuItem>
						<MenuItem value={'FORLANGC 111LL'}>FORLANGC 111LL</MenuItem>
						<MenuItem value={'FORLANGC 111LM'}>FORLANGC 111LM</MenuItem>
						<MenuItem value={'FORLANGC 111ND'}>FORLANGC 111ND</MenuItem>
						<MenuItem value={'FORLANGC 111VN'}>FORLANGC 111VN</MenuItem>
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
