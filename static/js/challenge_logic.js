// UCB-VIRT-DATA-ANALYTICS-2022, Parto Tandjoeng.
// Add console.log to check to see if our code is working.
console.log("working");

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

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [40.7, -94.5],
  zoom: 3,
  layers: [streets]
});

// Create a base layer that holds all maps.
let baseMaps = {
  Streets: streets,
  Satellite: satStreets,
  Dark: dark,
  Light: light,
  Outdoors: outdoors,
  Navigation: navi,
  "Navigation Night": naviNight
};

// 1. Add multiple layer groups for the earthquake, tectonic plate, major earthquake data.
let allEQ = new L.layerGroup();
let tectonicPlates = new L.layerGroup();
let majorEQ = new L.layerGroup();

// 2. Add a reference to the tectonic plates group to the overlays object.
let overlays = {
  "Tectonic Plates": tectonicPlates,
  "Earthquakes": allEQ,
  "Major Earthquakes": majorEQ
};

// Then we add a control to the map that will allow the user to change which layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

// Set common color settings for both legend and marker based on magnitude
const colors = [
  '#98ee00',
  '#d4ee00',
  '#eecc00',
  '#ee9c00',
  '#ea822c',
  '#ea2c2c'
];

// Retrieve the earthquake GeoJSON data (use data for the month instead).
//d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson').then((data) => {
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson').then((data) => {
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

  // This function determines the color of the marker based on the magnitude of the earthquake,
  // and corrects color index for earthquakes with 0 or negative magnitudes.
  function getColor(magnitude) {
    if (magnitude > 5) {
      return colors[5];
    }
    idx = magnitude <= 1 ? 0 : (Math.ceil(magnitude) - 1);
    return colors[idx];
  }

  // This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }

  // creating a geoJSON layer with the retrieved data
  L.geoJson(data, {
	  // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
      console.log(data);
      return L.circleMarker(latlng);
    },
    // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
    // We create a popup for each circleMarker to display the magnitude and
    // location of the earthquake after the marker has been created and styled.
    onEachFeature: function(feature, layer) {
      layer.bindPopup(
        "Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place + "<br>Depth: " + feature.geometry.coordinates[2] + " km"
      );
    }
  }).addTo(allEQ);

  // Then we add the earthquake layer to our map.
  allEQ.addTo(map);
});

// 3. Retrieve the major earthquake GeoJSON data >4.5 mag for the week (use data for the month instead).
//d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson').then((data) => {
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson').then((data) => {
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

  // This function determines the color of the marker based on the magnitude of the earthquake,
  // and the correct color index for earthquakes with 0 or negative magnitudes.
  function getColor(magnitude) {
    idx = magnitude > 6 ? 5 : (Math.ceil(magnitude) - 2);
    return colors[idx];
  }

  // This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }

  // creating a geoJSON layer with the retrieved data
  L.geoJson(data, {
	  // We turn each feature into a circleMarker on the map.
    pointToLayer: function(feature, latlng) {
      console.log(data);
      return L.circleMarker(latlng);
    },
    // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
    // We create a popup for each circleMarker to display the magnitude and
    // location of the earthquake after the marker has been created and styled.
    onEachFeature: function(feature, layer) {
      layer.bindPopup(
        "Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place + "<br>Depth: " + feature.geometry.coordinates[2] + " km"
      );
    }
  }).addTo(majorEQ);

  // Then we add the earthquake layer to our map.
  majorEQ.addTo(map);
});

// Create a legend control object.
let legend = L.control({
  position: 'bottomright'
});

// Then add all the details for the legend
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

// Finally, we add our legend to the map.
legend.addTo(map);

// Use d3.json to make a call to get our Tectonic Plate geoJSON data.
d3.json('https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json').then((data) => {
  // create a geoJSON layer with the retrieved data and added style
  L.geoJson(data, {style: {color: '#cc00cc', weight: 2}}).addTo(tectonicPlates);
  // Then we add the Tectonic Plates layer to our map.
  map.addLayer(tectonicPlates);
});