import React from 'react';
import './LandingPage.css';
import fiveCollegeImage from './fivecollegedb.jpeg';
import amherstImage from './amherst2.png' ;
import mtImage from './mtholyoke2.png' ;
import smith from './smith2.png' ;
import umass from './UMASS-amherst2.png' ;
import hampshire from './hampshire2.png' ;




const LandingPage = () => {
  return (
      <div className='landing-page'>
          <div className="image-container">
              <img src={fiveCollegeImage} alt="Pic" className="centered-image"/>
          </div>
          <div className="college-pics">
                <img src={hampshire} alt="Pic" className="centered-image3"/>
                <img src={amherstImage} alt="Pic" className="centered-image3"/>
                <img src={smith} alt="Pic" className="centered-image3"/>
                <img src={umass} alt="Pic" className="centered-image3"/>
                <img src={mtImage} alt="Pic" className="centered-image2"/>
          </div>
          <div className="text-container">
              <p className="description"> The aim of the project is to streamline and enhance the data management system for the Five College Center for World Languages.
               Previously, program data such as registration status, enrollments, hiring, course schedules, etc., was tracked in separate Google Sheets. This fragmentation leads to increased workload, potential errors, and limited reporting capabilities.
              Each page is now tailored to a particular aspect of the program data, students, courses, meetings and instructors. This organization not only reduces the likelihood of errors but also significantly cuts down on the extra work previously required to connect and cross-reference data across different sheets and semesters. The result is a more efficient, user-friendly, and integrated data management experience, aligning perfectly with the highly individualized and customizable nature of the courses offered by the Center.
                </p>
          </div>
      </div>
  );
};
export default LandingPage;