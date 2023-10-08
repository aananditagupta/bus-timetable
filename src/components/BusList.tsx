import React from 'react';

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
  currentTime: number;
}

// BusList component
const BusList = ({ services, currentTime }: BusListProps) => {
  return (
    <ul>
      {/* Loop through each bus service and calculate the next two departure times */}
      {services.map((service) => {
        const nextBuses: number[] = [];

        // Find the next two buses
        for (let i = service.start; i <= service.end; i += service.interval) {
          if (i >= currentTime) {
            nextBuses.push(i);
            if (nextBuses.length === 2) break;
          }
        }

        return (
          <li key={service.name}>
            {/* Display the information for each bus service */}
            {service.name} to {service.destination}: {nextBuses.length > 0 ? nextBuses.map((bus) => `${bus - currentTime} min`).join(', ') : 'No buses in the next 15 minutes'}
          </li>
        );
      })}
    </ul>
  );
};

export default BusList;
