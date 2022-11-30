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
//  id: 'mapbox/streets-v12',
//  id: 'mapbox/navigation-night-v1',
  id: 'mapbox/outdoors-v12',
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
  accessToken: API_KEY
});

// Create the map object with center at the San Francisco airport.
let zoomCoord = L.latLng(37.5, -122.5);
let map = L.map('mapid').setView(zoomCoord, 10);

// Add GeoJSON data.
let sanFranAirport = {
  "type": "FeatureCollection", "features": [{
    "type": "Feature",
    "properties": {
      "id": "3469",
      "name": "San Francisco International Airport",
      "city": "San Francisco",
      "country": "United States",
      "faa": "SFO",
      "icao": "KSFO",
      "alt": "14",
      "tz-offset": "-8",
      "dst": "A",
      "tz": "America/Los_Angeles"
    },
    "geometry": {
      "type":"Point",
      "coordinates": [-122.375, 37.61899948120117]
    }
  }]
};

streets.addTo(map);
// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup(`
      <h3>Airport code: ${feature.properties.faa}</h3><hr>
      <h3>Airport name: ${feature.properties.name}</h3>
      `);
  }
}).addTo(map);

/*
// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature, latlng, latlng.lat, latlng.lng);
    return L.marker(latlng).bindPopup(`
      <h2>${feature.properties.name}</h2><hr>
      <h3>${feature.properties.city}, ${feature.properties.country}</h3>
      `);
  }
}).addTo(map);
*/

// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport).addTo(map);

/*
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

