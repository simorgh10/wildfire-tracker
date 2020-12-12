
use React hooks useEffect
iconify
map-react

Generate key for NASA API on NASA open API https://api.nasa.gov/

1 - npx create-react-app .
2 - npm i map-react @iconify/react @iconify/icons-mdi
? what to do when vulnerabilities ?
3 - npm start

create Maps API key in Google Cloud Platform

Change the title of the project

 Get rid of App.css, App.test.js, logo.svg, setupTests.js
 
 
 clean code in App.js
 
 create components folder and inside file Map.js
 arrow component with center and zoom props
 
 setup default props
 call Map component from App
 
 for css
 .body set margin and font-family
 for map class width, height, position, 
 
 display map
 
 create a new file LocationMarker.js in components props lat lng onClick
 import Icon and LocationIcon
 
 classes location-marker and location-icon (font-size, color)
 
 display map with a fire on default prop
 
 
 load events from NASA url using useState and useEffects
 
 display spinner waiting for events to be loaded
 
  create a component Loader to display spinner
  class loader (flex column align-items justify-content center min-height )
 img 400px
 margin-top -100px
 
 display all eventData
 
 new component LocationInfoBox prop info (id, title)
 class location-info
 
 pass on location info from Map into LocationInfoBox
 
 class location-info (position top right width min-height padding background-color border-radius font-size) color
 location-info ui list-style-type
 padding
 
 location-info li
padding op and bottom 


header component
padding background color
top right left z-index
h1 font-size padding margin text-align

body overflow