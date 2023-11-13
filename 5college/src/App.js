import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [meetingResults, setMeetingResults] = useState([]);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const locations = ["Amherst", "UMass", "Hampshire", "Smith", "Holyoke"]; 
  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    // Placeholder for API call to fetch meetings based on day and location
    console.log('Selected Day:', selectedDay, 'Selected Location:', selectedLocation);

    // Mock result - replace with actual API call
    setMeetingResults([
      { id: 1, name: "Course 1", day: selectedDay, location: selectedLocation },
      { id: 2, name: "Course 2", day: selectedDay, location: selectedLocation },
      // ... more results
    ]);
  };

  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Five College World Language Center</h1>
      </header>
      <section className="search-section">
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <select className="search-dropdown" value={selectedDay} onChange={handleDayChange}>
            <option value="">Select a Day</option>
            {days.map((day) => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
          <select className="search-dropdown" value={selectedLocation} onChange={handleLocationChange}>
            <option value="">Select a Campus</option>
            {locations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
          <button className="search-button" type="submit">Search</button>
        </form>
      </section>
      <section className="results-section">
        {meetingResults.map((meeting) => (
          <div key={meeting.id} className="meeting-result">
            <h3>{meeting.name}</h3>
            <p>Day: {meeting.day}</p>
            <p>Campus: {meeting.location}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LandingPage;