import React from 'react';
import './LandingPage.css';
import fiveCollegeImage from './fivecollege.jpeg';


const LandingPage = () => {
   return (
       <div className='landing-page'>
           <header className='landing-header'>
               <h1>Five College World Language Center Daatabase</h1>
           </header>
           <div className="image-container">
               <img src={fiveCollegeImage} alt="Pic" className="centered-image"/>
           </div>
           <div className="text-container">
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           </div>
       </div>
   );
};
export default LandingPage;
