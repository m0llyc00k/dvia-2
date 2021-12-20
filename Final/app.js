    //access token
    mapboxgl.accessToken = 'pk.eyJ1IjoicmVhZHlsZXRzZ28iLCJhIjoiY2t0dTR2aGNjMXd3bDJubWgwcWwzcWJzMyJ9.4Qpfc2HBPT14KIrBhX0XGQ'

    // https://www.mapbox.com/mapbox-gl-js/api/#map
    let map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.9597, 40.7903], // long, lat
      zoom: 11
    })


    var bbox = [-96, 31, -84, 40];
    var cellSide = 50;
    var options = {};
    var hexGrid = turf.hexGrid(bbox, cellSide, options);
    hexGrid.features.forEach(f => {
      f.properties = { density: Math.random() };
    });

map.on('load', function () {

    map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': hexGrid
        },
        'layout': {},
        'paint': {
            'fill-color': '#088',
            'fill-opacity': [
              "interpolate", ["linear"], ["get", "density"],
              0, 0.3,
              1, 1
            ]
        }
    });
});

