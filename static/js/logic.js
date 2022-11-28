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
//  id: 'mapbox/streets-v11',
  id: 'mapbox/dark-v11',
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
  accessToken: API_KEY
});

// Then we add our 'streets' tile layer to the map.
// Add a marker to the map for Los Angeles, CA
// Create the map object with options
var coords = Array([34.0522, -118.2437], L.latLng(38.575764, -121.478851), [33.835293, -117.914505]);
var colors = Array('red', 'orange', 'brown', 'blue', 'pink', 'yellow');
// let zoomCoord = L.latLng(coords[0]);
let zoomCoord = L.latLng(40.7, -94.5);
let map = L.map('mapid').setView(zoomCoord, 4);

streets.addTo(map);

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
for (var i = 0; i < coords.length; i++) {
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

