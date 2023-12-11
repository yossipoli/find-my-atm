Your next mission is to create a web application named "Find My ATM". 

Prerequisites:

React
Material-UI
Leaflet js
Typescript
government API
GitHub
Application Motivation:

As of today, more and more banks closed branches and move to digital.
It's much harder to find ATMs for the bank's customers.
Therefore, we created a new application named "Find My ATM".
The application will enable the end-user to find ATMs by searching the city name e.g. "חדרה".


Application Specification: 

The user will get on his screen 3 objects (see screenshot below)
Map
Search text field (to search city name)
filters
 filter by ATM type:
default is all

filter by Bank name:
default is all

List of ATMs that are found according to the end-user search criteria .
the list will include:
ATM Type (orange for משיכת מזומן and blue for "מכשיר מידע/ואו מתן הוראות")
Bank Name
Address
Once the user inserts a valid city name (in Hebrew) located in Israel he will get a list of ATMs and the map will zoom in the area of the found ATMs
With on click of the ATM list item, the map will move to this machine location and zoom in.

The API is based on the free government API - https://data.gov.il/he/dataset/automated-devices/resource/b9d690de-0a9c-45ef-9ced-3e5957776b26

Required Framework: ReactJS
