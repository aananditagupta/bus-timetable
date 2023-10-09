import React, { useEffect, useState } from 'react';

// Clock component to show the current time in hh:mm:ss format
const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  const updateTime = () => {
    setCurrentTime(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(updateTime, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return (
    <div className="clock-container">
      <h1>
        Current Time: {formattedHours}:{formattedMinutes}:{formattedSeconds}
      </h1>
    </div>
  );
};

export default Clock;
