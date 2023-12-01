import React, { useState } from 'react';
import axios from 'axios';
import './LandingPage.css';

const LandingPage = () => {


	return (
		<div className='landing-page'>
			<header className='landing-header'>
				<h1>Five College World Language Center</h1>
			</header>
			<body>
				<img src={require('./fivecollege.jpeg').default} alt="Pic"/>
			</body>
		


			
			
			
		</div>
	);
};

export default LandingPage;
