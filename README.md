# Getting Started with Create React App

## Introduction

This is a simple React application to display bus departure times. It shows a list of bus services, their next departure time, and the destination. The app also includes a clock to show the current time.

### Problem

Patrons at bus station want to know when their buses are due to depart. As they wait at their terminal, they will see a display with a countdown by minute for when their bus is due to depart the station.

The services running are as follows:

1. The X15 to SHEFFIELD departs every hour, on the hour, and is a 24-hour service.
2. The 52 to WAKEFIELD departs every 12 minutes. The service starts at 6am and the last bus departs at 9pm.
3. The X78 to DONCASTER departs every 20 minutes and is a 24-hour service.
4. The 126 to LEEDS departs every 6 minutes. The service starts at 5.30am and the last bus departs at 1.30am

We would like you to implement a bus timetable display to show the next two buses due to depart the terminus.

### Acceptance Criteria

- The display should show a clock, so people know what time it is.
- The display should show the next two buses due to leave the station
- The display should show a minute-by-minute update on when the buses are due to depart
- The display should indicate when no buses are due to depart in the next 15 minutes
- Every minute on the timetable should be represented in real-time seconds
(Le 1 hour = 60 seconds - to speed things up so we can see the buses in action)
- All buses leaving the station should be represented
- The application must be built using front end JavaScript technologies - `React/Typescript`

## Features Implemented

### Displays Current Time in HH:MM:SS Format

The `Clock` component utilizes JavaScript's native `Date` object to fetch the current time. This information is then formatted into a HH:MM:SS string that updates every second using the `setInterval` method. The UI is updated reactively using React's `useState` and `useEffect` hooks.

### Shows a List of Bus Services with Their Next Departure Time

The `BusList` component receives an array of bus services as props. Each service object contains details like the `bus name`, `destination`, `interval between buses`, and `start/end` times of operation. Using this data, the component calculates the time to the next departure for each bus. This is done by taking the modulus of the time elapsed since the service's start time with the service's interval time, and then subtracting that from the service's interval time.

### Highlights Bus Services That Are About to Depart

Inside the `BusList` component, a dynamic CSS class is assigned to each bus service based on the time remaining for its next departure. If the time to the next departure is 10 seconds or less, an `--about-to-depart` modifier class is appended, changing the appearance of the bus item to make it stand out. This is managed by conditional logic within the React component and CSS styles defined in an external stylesheet.

## Improvements

- `Sorting and Filtering`: I would liked to include options to sort bus services by time to the next departure or by their active status. Filters could also help you find buses that go to specific destinations.

- `Card-like UI for Each Bus Service`: To make it visually appealing and easy to read, I would have liked display each bus service in its own card-like UI. This would include details like the bus number, destination, and time to the next departure.

- `Maps and Routes`:To give you a better idea of where each bus goes, I'd include a small map with the route for each bus service. This step would have also included integrating the app with an API

- `User Preferences`:I could also add a feature to save your favorite bus routes for quick access.

## Output

!(./assets/final_image.png)
