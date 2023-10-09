import { useState, useEffect } from 'react';

export const useTimer = () => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    // Create an interval that increments 'time' every 1000 milliseconds (1 second)
    const interval = setInterval(() => {
      // Update the 'time' state with the new incremented value
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return time;
};
