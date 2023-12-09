import { DataGrid } from '@mui/x-data-grid';
import {
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

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
	const [tableData, setTableData] = useState([]);
	const [role, setRole] = useState('');
	const [email, setEmail] = useState('');
	const [year, setYear] = useState('');
	const [semester, setSemester] = useState('');
	const [courseNum, setCourseNum] = useState('');

	useEffect(() => {
		// Update this URL to include query parameters based on the state
		fetch(
			`http://10.2.10.32:3001/instructors?role=${role}&email=${email}&year=${year}&semester=${semester}&course_num=${courseNum}`
		)
			.then((data) => data.json())
			.then((data) => setTableData(data));
	}, [role, email, year, semester, courseNum]); // Add dependencies here

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
					<InputLabel id='email-label'>Email</InputLabel>
					<Select
						labelId='email-label'
						id='email'
						value={email}
						label='Email'
						onChange={(e) => {
							setEmail(e.target.value);
							console.log(e.target.value);
						}}
					>
						<MenuItem value={'Any'}>Any</MenuItem>
						<MenuItem value={'abanner@fivecolleges.edu'}>
							abanner@fivecolleges.edu
						</MenuItem>
						<MenuItem value={'kjones@fivecolleges.edu'}>
							kjones@fivecolleges.edu
						</MenuItem>
						<MenuItem value={'mlane@fivecolleges.edu'}>
							mlane@fivecolleges.edu
						</MenuItem>
						<MenuItem value={'abanner@fivecolleges.edu'}>
							abanner@fivecolleges.edu
						</MenuItem>
						<MenuItem value={'hj@fivecolleges.edu'}>
							hj@fivecolleges.edu
						</MenuItem>
						<MenuItem value={'akim@fivecolleges.edu'}>
							akim@fivecolleges.edu
						</MenuItem>
						<MenuItem value={'jmoreno@fivecolleges.edu'}>
							jmoreno@fivecolleges.edu
						</MenuItem>
						<MenuItem value={'mbrown@fivecolleges.edu'}>
							mbrown@fivecolleges.edu
						</MenuItem>
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
