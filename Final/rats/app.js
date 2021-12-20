 mapboxgl.accessToken = 'pk.eyJ1IjoicmVhZHlsZXRzZ28iLCJhIjoiY2t0dTR2aGNjMXd3bDJubWgwcWwzcWJzMyJ9.4Qpfc2HBPT14KIrBhX0XGQ'

 // https://www.mapbox.com/mapbox-gl-js/api/#map
 let map = new mapboxgl.Map({
     container: 'map', // container element id
     style: 'mapbox://styles/mapbox/light-v10',
     center: [-73.9597, 40.7903], // long, lat
      zoom: 11
 })

const months = [
'Mar-20',
'Apr-20',
'May-20',
'Jun-20',
'Jul-20',
'Aug-20',
'Sep-20',
'Oct-20',
'Nov-20',
'Dec-20',
'Jan-21',
'Feb-21',
'Mar-21',
'Apr-21',
'May-21',
'Jun-21',
'Jul-21',
'Aug-21',
'Sep-21',
'Oct-21',
'Nov-21'

];

function filterBy(month) {
const filters = ['==', 'CreatedDate', CreatedDate];
map.setFilter('sighting-circles', filters);
map.setFilter('sighting-labels', filters);
 
// Set the label to the month
document.getElementById('month').textContent = months[CreatedDate];
}

document.getElementById('slider').addEventListener('input', (event) => {
  const CreatedDate2 = parseInt(event.target.value);
  // update the map
  map.setFilter('sightings', ['==', ['number', ['get', 'Hour']], hour]);



  // update text in the UI
  document.getElementById('active-hour').innerText = months
});

map.on('load', () => {
  map.addLayer({
    id: 'sightings',
    type: 'circle',
    source: {
      type: 'geojson',
      data: './Rats,geojson' // replace this with the url of your own geojson
    },
    paint: {
      'circle-radius': [
        'interpolate',
        ['linear'],
        ['number', ['get', 'UniqueKey']],
        0,
        50000000
      ],
      'circle-color': [
        'interpolate',
        ['linear'],
        ['number', ['get', 'UniqueKey']],
        '#2DC4B2'
      ],
      'circle-opacity': 0.8
    }
  });
});


