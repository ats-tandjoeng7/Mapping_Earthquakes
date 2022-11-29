/* 
  // Available mapbox api 
  id: 'mapbox/streets-v12',
  id: 'mapbox/outdoors-v12',
  id: 'mapbox/light-v11',
  id: 'mapbox/dark-v11',
  id: 'mapbox/satellite-v9',
  id: 'mapbox/satellite-streets-v12',
  id: 'mapbox/navigation-day-v1',
  id: 'mapbox/navigation-night-v1',
*/
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//  id: 'mapbox/light-v11',
  id: 'mapbox/light-v11',
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
  accessToken: API_KEY
});

// Then we add our 'streets' tile layer to the map.
// Add a marker to the map for Los Angeles, CA
// Create the map object with options
let coords = [[34.0522, -118.2437], L.latLng(38.575764, -121.478851), [33.835293, -117.914505]];
let colors = Array('red', 'orange', 'brown', 'blue', 'pink', 'yellow');
// Coordinates for each point to be used in the line.
let line = [
  [33.9416, -118.4085],
  [37.6214, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];
let line1 = [
  [37.6214, -122.3790],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];
// let zoomCoord = L.latLng(coords[0]);
// let zoomCoord = L.latLng(40.7, -94.5);
// let map = L.map('mapid').setView(zoomCoord, 4);
let zoomCoord = L.latLng(40.1975, -97.6664);
let map = L.map('mapid').setView(zoomCoord, 5);

streets.addTo(map);

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
//  color: "red"
  color: "yellow"
}).addTo(map);

//let dashedLine = '<svg viewBox="0 0 30 12" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-dasharray="4" /></svg>';
let dashedLine = '<svg height="80" width="300"><g fill="none" stroke="black" stroke-width="4"><path stroke-dasharray="10,10" d="M5 40 l215 0" /></g></svg>';

L.polyline(line1, {
  color: "blue",
  weight: 4,
  opacity: 0.5,
  // dashArray: 'dash, gap, dash, gap, ..'
  dashArray: '15, 30, 45, 60'
}).addTo(map);

// get data from cities.js, an array containing each city's location, state, and population.
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach((city, i) => {
  console.log(city);
  L.marker(city.location)
  //  .bindPopup(`<h2>${city.city}, ${city.state}</h2><hr><h3>Population ${city.population.toLocaleString()}</h3>`)
    .addTo(map);
  L.circleMarker(city.location, {
    radius: city.population/200000, // units: px
    weight: 4,
//    fillColor: '#ffa500',
    color: 'orange'
  })
    .bindPopup(`<h2>${city.city}, ${city.state}</h2><hr><h3>Population ${city.population.toLocaleString()}</h3>`)
    .addTo(map);
  L.circle(city.location, {
    radius: 100, // units: m
    fillColor: colors[colors.length - 1 - i],
    color: colors[i],
    fillOpacity: 0.75
  }).addTo(map);
});

/*
// Loop through the cities array and create one marker for each city.
cityData.forEach((city, i) => {
  console.log(city);
//  L.marker(city.location)
//    .bindPopup(`<h2>${city.city}, ${city.state}</h2><hr><h3>Population ${city.population.toLocaleString()}</h3>`)
//    .addTo(map);
  L.circleMarker(city.location, {
    radius: city.population/100000, // units: px
//    fillColor: '#ffa500',
//    color: 'cyan'
  })
    .bindPopup(`<h2>${city.city}, ${city.state}</h2><hr><h3>Population ${city.population.toLocaleString()}</h3>`)
    .addTo(map);
  L.circle(city.location, {
    radius: 100, // units: m
    fillColor: colors[colors.length - 1 - i],
    color: colors[i],
    fillOpacity: 0.75
  }).addTo(map);
});
*/

/*
// Array.forEach loop with arr function
coords.forEach((coord, i) => {
  L.marker(coord).addTo(map);
  L.circleMarker(coord, {
    radius: 100, // units: px
    fillColor: '#ffa500',
    color: 'cyan'
  }).addTo(map);
  L.circle(coord, {
    radius: 100, // units: m
    fillColor: colors[i+2],
    color: colors[i],
    fillOpacity: 0.75
  }).addTo(map);
});

// sequential for loop
for (let i = 0; i < coords.length; i++) {
  L.marker(coords[i]).addTo(map);
  L.circleMarker(coords[i], {
    radius: 300,
    fillColor: '#ffa500',
    color: 'cyan',
  }).addTo(map);
  L.circle(coords[i], {
    radius: 1000,
    fillColor: colors[colors.length - 1 - i],
    color: colors[i],
    fillOpacity: 0.75,
}).addTo(map);
}
*/

