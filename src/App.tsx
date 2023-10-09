import React from 'react';
import BusList from './components/BusList/BusList';
import Clock from './components/Clock/Clock';
import { useTimer } from './hooks/useTimer';

// Example bus services data
const services = [
  { name: 'X15', destination: 'SHEFFIELD', interval: 60, start: 0, end: 86399 },
  { name: '52', destination: 'WAKEFIELD', interval: 12, start: 21600, end: 75599 },
  { name: 'X78', destination: 'DONCASTER', interval: 20, start: 0, end: 86399 },
  { name: '126', destination: 'LEEDS', interval: 6, start: 19800, end: 5399 },
];

// App component
const App = () => {
  const currentTime = useTimer();
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
