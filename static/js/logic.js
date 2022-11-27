// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/dark-v11',
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
  accessToken: API_KEY
});

/*
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: API_KEY
});
*/
// Then we add our 'streets' tile layer to the map.
// Add a marker to the map for Los Angeles, CA
// Create the map object with options
var coord = Array(L.latLng(34.0522, -118.2437), L.latLng(38.575764, -121.478851), [33.835293, -117.914505]);
var color = Array('red', 'orange', 'brown', 'blue', 'pink', 'yellow');
let zoomCoord = L.latLng(coord[0]);
//let zoomCoord = L.latLng(40.7, -94.5);
let map = L.map('mapid').setView(zoomCoord, 10);

streets.addTo(map);
for (var i = 0; i < coord.length; i++) {
  L.marker(coord[i]).addTo(map);
  L.circleMarker(coord[i], {
    radius: 300,
    fillColor: '#ffa500',
    color: 'cyan',
  }).addTo(map);
  L.circle(coord[i], {
    radius: 1000,
    fillColor: color[i+2],
    color: color[i],
    fillOpacity: 0.75,
}).addTo(map);
}

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
