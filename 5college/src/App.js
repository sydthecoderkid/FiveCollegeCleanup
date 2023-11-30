import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Students from './Students';
import Instructors from './Instructors';
import Courses from './Courses';
import Meetings from './Meetings';
import LandingPage from './LandingPage';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/students' element={<Students />} />
				<Route path='/instructors' element={<Instructors />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/meetings' element={<Meetings />} />
			</Routes>
		</Router>
	);
};

export default App;
