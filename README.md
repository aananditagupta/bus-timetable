# Getting Started with Create React App

### Problem 
Patrons at bus station want to know when their buses are due to depart. As they wait at their terminal, they will see a display with a countdown by minute for when their bus is due to depart the station.

The services running are as follows:
1. The X15 to SHEFFIELD departs every hour, on the hour, and is a 24-hour service.
2. The 52 to WAKEFIELD departs every 12 minutes. The service starts at 6am and the last bus departs at 9pm.
3. The X78 to DONCASTER departs every 20 minutes and is a 24-hour service.
4. The 126 to LEEDS departs every 6 minutes. The service starts at 5.30am and the last bus departs at 1.30am

We would like you to implement a bus timetable display to show the next two buses due to depart the terminus.

### Acceptance Criteria:
- The display should show a clock, so people know what time it is.
- The display should show the next two buses due to leave the station
- The display should show a minute-by-minute update on when the buses are due to depart
- The display should indicate when no buses are due to depart in the next 15 minutes
- Every minute on the timetable should be represented in real-time seconds
(Le 1 hour = 60 seconds - to speed things up so we can see the buses in action)
- All buses leaving the station should be represented
- The application must be built using front end JavaScript technologies - `React/Typescript`
