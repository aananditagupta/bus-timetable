import React, { useState, useEffect } from 'react';
import './BusList.css';

// Define the type for a single bus service
interface BusService {
  name: string;
  destination: string;
  interval: number;
  start: number;
  end: number;
}

// Define the type for the component's props
interface BusListProps {
  services: BusService[];
  currentTime: number; // elapsed seconds
}

// BusList component
const BusList = ({ services, currentTime }: BusListProps) => {
  const [randomOffsets, setRandomOffsets] = useState<number[]>([]);

  useEffect(() => {
    setRandomOffsets(services.map(() => Math.floor(Math.random() * 60)));
  }, [services]);

  return (
    <div>
      {services.map((service, index) => {
        // Determine if the service is active right now
        let isActive = false;
        if (service.start > service.end) {
          isActive = (currentTime >= service.start || currentTime <= service.end);
        } else {
          isActive = (currentTime >= service.start && currentTime <= service.end);
        }

        if (isActive || currentTime < service.start) {
          const timeSinceLastDeparture = (currentTime - service.start + 86400) % (service.interval * 60);
          const timeToNextDeparture = service.interval * 60 - timeSinceLastDeparture + randomOffsets[index];

          // Format time in hh:mm:ss
          const hours = Math.floor(timeToNextDeparture / 3600);
          const minutes = Math.floor((timeToNextDeparture % 3600) / 60);
          const seconds = timeToNextDeparture % 60;
          const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

          // Determine the CSS class based on time to departure
          let className = "bus-item";
          if (timeToNextDeparture <= 10) {
            className += " bus-item--about-to-depart";
          }

          return (
            <div key={index} className={className}>
              <div>Bus: {service.name}</div>
              <div>Destination: {service.destination}</div>
              <div>Interval: Every {service.interval} mins</div>
              <div>Time to Next Departure: {formattedTime}</div>
              <br />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default BusList;
