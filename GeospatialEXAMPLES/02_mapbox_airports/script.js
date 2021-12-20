
//   Code from https://docs.mapbox.com/help/tutorials/custom-markers-gl-js/ 


mapboxgl.accessToken = 'pk.eyJ1IjoicmVhZHlsZXRzZ28iLCJhIjoiY2t0dTR2aGNjMXd3bDJubWgwcWwzcWJzMyJ9.4Qpfc2HBPT14KIrBhX0XGQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-20, 37.8],
    zoom: 1
  });


map.on('load', () => {
map.addSource('countries', {
type: 'geojson',
// Use a URL for the value for the `data` property.
url: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson'
});


map.addLayer({
'id': 'country-outline',
'type': 'vector',
'source': 'earthquakes',
'paint': {
'line-color': '#888',
'line-width': 1
}
});

  /*** load data ***/
  async function loadData() {
    const airports = await d3.csv('data/all_month.csv');


    // add markers to map
    airports.forEach(function(d) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat([d.longitude, d.latitude])
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML('<h3>' + d.time + '</h3>'))
      .addTo(map);
    });
  }

  loadData();