// UCB-VIRT-DATA-ANALYTICS-2022, Parto T.
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

// Create a base layer that holds all maps.
let baseMaps = {
  Street: streets,
  Outdoor: outdoors,
  Light: light,
  Dark: dark,
  Satellite: sat,
  SatelliteStreets: satStreets,
  Navigation: navi,
  NavigationNight: naviNight
};

// Create the earthquake layer for our map.
let earthquakes = new L.layerGroup();

// We define an object that contains the overlays.
// This overlay will be visible all the time.
let overlays = {
  Earthquakes: earthquakes
};

// Create the map object with center, zoom level and default layer.
const zoomCoord = L.latLng(39.5, -98.5);
let map = L.map('mapid', {
  center: zoomCoord,
  zoom: 3,
  layers: [streets]
});
// Then we add a control to the map that will allow the user to change which layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

// Create a legend control object.
let legend = L.control({
  position: 'bottomright'
});

// Identical colors for legend and magnitudes
const colors = [
  '#98ee00',
  '#d4ee00',
  '#eecc00',
  '#ee9c00',
  '#ea822c',
  '#ea2c2c'
];

legend.onAdd = function(map) {
  let div = L.DomUtil.create('div', 'info legend');
  const magnitudes = [0, 1, 2, 3, 4, 5];
  // Looping through our intervals to generate a label with a colored square for each interval.
  for (var i = 0; i < magnitudes.length; i++) {
    console.log(colors[i]);
    div.innerHTML +=
      "<i style='background: " + colors[i] + "'></i> " +
      magnitudes[i] + (magnitudes[i + 1] ? "&ndash;" + magnitudes[i + 1] + "<br>" : "+");
  }
  return div;
};
legend.addTo(map);

const quakeData = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson';

// Grabbing our GeoJSON data.
d3.json(quakeData).then((data) => {
  // This function returns the style data for each of the earthquakes we plot on the map.
  // We pass the magnitude of the earthquake into two functions to calculate the color and radius.
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.properties.mag),
      color: '#000000',
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }

  // This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }

  // This function determines the color of the circle based on the magnitude of the earthquake.
  function getColor(magnitude) {
    let colorIdx = Math.floor(magnitude);
    if (colorIdx <= 5) {
      return colors[colorIdx];
    }
    return colors[5];
  }

  // creating a geoJSON layer with the retrieved data
  L.geoJson(data, {
    // turn each feature into a circleMarker on the map
    pointToLayer: function(feature, latlng) {
      console.log(data);
      return L.circleMarker(latlng);
    },
    // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
    // We create a popup for each circleMarker to display the magnitude and
    // location of the earthquake after the marker has been created and styled.
    onEachFeature: function(feature, layer) {
      layer.bindPopup(`
        <h2>Magnitude ${feature.properties.mag}</h2><hr>
        <h3>Location: ${feature.properties.place}</h3>
        <h3>Depth: ${feature.geometry.coordinates[2]} km</h3>
      `);
    }
  }).addTo(earthquakes);
  // Then we add the earthquake layer to our map
  earthquakes.addTo(map);
});

/*
// Grabbing our GeoJSON data.
d3.json(quakeData).then((data) => {
  // creating a geoJSON layer with the retrieved data
  console.log(data);
  L.geoJson(data, {
//    style: myStyle,
    onEachFeature: function(feature, layer) {
      layer.bindPopup(`
        <h2>location: ${feature.properties.place}</h2><hr>
        <h3>Magnitude: ${feature.properties.mag}</h3>
        <h3>Depth: ${feature.geometry.coordinates[2]} km</h3>
      `);
    }
  }).addTo(map);
});
*/
