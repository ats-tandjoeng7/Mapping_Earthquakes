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
// We create the tile layer that will be the default background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v12',
  maxZoom: 18,
  accessToken: API_KEY
});
// We create the outdoors view tile layer that will be an option for our map.
let outdoors = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/outdoors-v12',
  maxZoom: 18,
  accessToken: API_KEY
});
// We create the light view tile layer that will be an option for our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/light-v11',
  maxZoom: 18,
  accessToken: API_KEY
});
// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/dark-v11',
  maxZoom: 18,
  accessToken: API_KEY
});
// We create the satellite view tile layer that will be an option for our map.
let sat = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/satellite-v9',
  maxZoom: 18,
  accessToken: API_KEY
});
// We create the satellite-streets view tile layer that will be an option for our map.
let satStreets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/satellite-streets-v12',
  maxZoom: 18,
  accessToken: API_KEY
});
// We create the navigation view tile layer that will be an option for our map.
let navi = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/navigation-day-v1',
  maxZoom: 18,
  accessToken: API_KEY
});
// We create the navigation-night view tile layer that will be an option for our map.
let naviNight = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/navigation-night-v1',
  maxZoom: 18,
  accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Streets: streets,
  Outdoors: outdoors,
  Light: light,
  Dark: dark,
  Satellite: sat,
  SatelliteStreets: satStreets,
  Navigation: navi,
  NavigationNight: naviNight
};
// Create the map object with center at the San Francisco airport.
//let zoomCoord = L.latLng(37.5, -122.5);
//let map = L.map('mapid').setView(zoomCoord, 10);
// Create the map object with center, zoom level and default layer.
//const zoomCoord = L.latLng(30, 30);
const zoomCoord = L.latLng(44.0, -80.0);
let map = L.map('mapid', {
  center: zoomCoord,
  zoom: 2,
  layers: [naviNight]
});
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

const githubName = "https://raw.githubusercontent.com/ats-tandjoeng7/";
// Accessing the airport GeoJSON URL
let airportData = githubName + "Mapping_Earthquakes/main/majorAirports.json";
// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = githubName + "Mapping_Earthquakes/main/torontoRoutes.json";

// create a style for the lines
let myStyle = {
    color: '#ffffa1',
    weight: 2
};

/*
// Grabbing our GeoJSON data.
d3.json(torontoData).then((data) => {
  // We turn each feature into a marker on the map.
  console.log(data);
  L.geoJson(data).addTo(map);
});
*/

// Grabbing our GeoJSON data.
d3.json(torontoData).then((data) => {
  // creating a geoJSON layer with the retrieved data
  console.log(data.features);
  L.geoJson(data, {
    style: myStyle,
    onEachFeature: function(feature, layer) {
      layer.bindPopup(`
        <h3>Airline: ${feature.properties.airline}</h3><hr>
        <h3>Destination: ${feature.properties.dst}</h3>
      `);
    }
  }).addTo(map);
});

/*
// Grabbing our GeoJSON data.
d3.json(airportData).then((data) => {
  // We turn each feature into a marker on the map.
  console.log(data.features);
  L.geoJson(data, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup(`
        <h3>Airport code: ${feature.properties.faa}</h3><hr>
        <h3>Airport name: ${feature.properties.name}</h3>
      `);
    }
  }).addTo(map);
});
*/

/*
// Grabbing our GeoJSON data.
d3.json(airportData).then((data) => {
  // We turn each feature into a marker on the map.
  console.log(data.features);
  L.geoJSON(data, {
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup(`
        <h3>Airport code: ${feature.properties.faa}</h3><hr>
        <h3>Airport name: ${feature.properties.name}</h3>
      `);
    }
  }).addTo(map);
});
*/
