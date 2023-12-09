import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Button,
	Input
} from '@mui/material';
import './TablesPages.css';

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
	{},
];

export default function Students() {
	const [email, setEmail] = useState('');
	const [enrollmentStatus, setEnrollmentStatus] = useState('');
	const [registrationStatus, setRegistrationstatus] = useState('');
	const [tableData, setTableData] = useState([]);
	var name = 'doug';

	useEffect(() => {
		fetch(`http://10.2.10.32:3001/students?name=${name}`)
			.then((data) => data.json())
			.then((data) => setTableData(data));
	}, []);

	const resetFields = () => {
		setEnrollmentStatus('');
		setRegistrationstatus('');
	};

	return (
		<div style={{ height: 600, width: '100%' }}>
			<h1>Students</h1>
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

				<FormControl
					sx={{ m: 2, minWidth: 180 }}
					disabled={registrationStatus !== ''}
				>
					<InputLabel id='enrollmentStatus-label'>Enrollment Status</InputLabel>
					<Select
						labelId='enrollmentStatus-label'
						id='enrollmentStatus'
						value={enrollmentStatus}
						label='enrollmentStatus'
						onChange={(e) => {
							setEnrollmentStatus(e.target.value);
							console.log(e.target.value);
						}}
					>
						<MenuItem value={'A'}>Admitted</MenuItem>
						<MenuItem value={'NX - MLP'}>NX - MLP needs interview</MenuItem>
						<MenuItem value={'NX - SILP'}>NX - SILP needs interview</MenuItem>
						<MenuItem value={'W'}>Withdrawn application</MenuItem>
					</Select>
				</FormControl>

				<FormControl
					sx={{ m: 2, minWidth: 180 }}
					disabled={enrollmentStatus !== ''}
				>
					<InputLabel id='registrationStatus-label'>
						Registration Status
					</InputLabel>
					<Select
						labelId='registrationStatus-label'
						id='registrationStatus'
						value={registrationStatus}
						label='registrationStatus'
						onChange={(e) => {
							setRegistrationstatus(e.target.value);
							console.log(e.target.value);
						}}
					>
						<MenuItem value='0'>Admission in progress</MenuItem>
						<MenuItem value='1'>Needs to submit course contract</MenuItem>
						<MenuItem value='2'>Submitted course contract</MenuItem>
						<MenuItem value='3'>Pre-registered</MenuItem>
						<MenuItem value='4'>
							Fall/spring - Ready to submit permission
						</MenuItem>
						<MenuItem value='5'>Confirmed</MenuItem>
						<MenuItem value='6'>Other/see notes</MenuItem>
						<MenuItem value='D1'>Did not attend</MenuItem>
						<MenuItem value='D2'>Attended add/drop</MenuItem>
						<MenuItem value='D3'>Post-add-drop</MenuItem>
						<MenuItem value='U'>Unable to accommodate</MenuItem>
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
				{/* <Button variant="contained" color="secondary" onClick={generate} sx={{ m: 3.2, minWidth: 150 }}>
					Query the Database
				</Button> */}
				<Button variant='contained' onClick={resetFields} sx={{ m: 2 }}>
					Reset Fields
				</Button>
			</div>

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
