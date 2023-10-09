import React from 'react';
import BusList from '../components/BusList/BusList';
import Clock from '../components/Clock/Clock';
import { useTimer } from '../hooks/useTimer';

const HomePage = () => {
  const services = [
    { name: 'X15', destination: 'SHEFFIELD', interval: 60, start: 0, end: 1439 },
    { name: '52', destination: 'WAKEFIELD', interval: 12, start: 360, end: 1260 },
    { name: 'X78', destination: 'DONCASTER', interval: 20, start: 0, end: 1439 },
    { name: '126', destination: 'LEEDS', interval: 6, start: 330, end: 8100 },
  ];

  const currentTime = useTimer();

  if (!services || currentTime === null) {
    return <div>Error: Required data is not available.</div>;
  }
  
  return (
    <div className="home-page">
        
        <h1>Bus Departure Times</h1>
        <Clock />
        <BusList services={services} currentTime={currentTime} />
    </div>
  );
};

export default HomePage;
