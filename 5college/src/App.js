import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Students from './Students';
import LandingPage from './LandingPage';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/students' element={<Students />} />
			</Routes>
		</Router>
	);
};

export default App;
