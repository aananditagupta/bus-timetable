import React, { useState, useEffect } from 'react';
import BusList from './components/BusList';
import Clock from './components/Clock';

// Example bus services data
const services = [
  { name: 'X15', destination: 'SHEFFIELD', interval: 60, start: 0, end: 1439 },
  { name: '52', destination: 'WAKEFIELD', interval: 12, start: 360, end: 1260 },
  { name: 'X78', destination: 'DONCASTER', interval: 20, start: 0, end: 1439 },
  { name: '126', destination: 'LEEDS', interval: 6, start: 330, end: 90 },
];

// App component
const App = () => {
  // For the purpose of this example, let's assume currentTime is 720 (12:00 PM)
  const currentTime = 720;

  return (
    <div className="App">
      {/* Use the new Clock component to display the current local time */}
      <Clock />

      {/* Use BusList to display the bus services */}
      <BusList services={services} currentTime={currentTime} />
    </div>
  );
};

export default App;
