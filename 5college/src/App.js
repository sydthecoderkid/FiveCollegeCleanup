import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Students from './Students';
import Instructors from './Instructors';
import Courses from './Courses';
import Meetings from './Meetings';
import LandingPage from './LandingPage';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const App = () => {
	return (
		<Router>
      <Navbar>
       <Container>
         {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
           <Nav className="me-auto">
             <Nav.Link href="#home">Home</Nav.Link>
             <Nav.Link href="students">Students</Nav.Link>
             <Nav.Link href="#instructors">Instructors</Nav.Link>
             <Nav.Link href="#courses">Courses</Nav.Link>
             <Nav.Link href="#meetings">Meetings</Nav.Link>
         </Nav>
       </Container>
     </Navbar>

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