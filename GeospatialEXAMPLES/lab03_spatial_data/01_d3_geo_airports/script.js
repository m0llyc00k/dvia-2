// code from:
// https://observablehq.com/@d3/world-airports?collection=@d3/d3-geo

/*** global variable/s ***/
const width = 1000;

await d3.json('https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_0_countries.geojson')
  .then((geojson) => {
    // Asynchronous JavaScript waiting for data promise to complete before moving on to .then() 
    if (geojson.features) {
      console.log('Number of features:', geojson.features.length)
      objects = geojson
    }


/*** helper function ***/
function height(projection, outline) {
  const [[x0, y0], [x1, y1]] = d3.geoPath(projection.fitWidth(width, outline)).bounds(outline);
  const dy = Math.ceil(y1 - y0), l = Math.min(Math.ceil(x1 - x0), dy);
  
  projection.scale(projection.scale() * (l - 1) / l).precision(0.2);
  return dy;
}

/*** our draw function ***/
function drawMap(world, data) {
  const land = topojson.feature(world, world.objects.land);
  const graticule = d3.geoGraticule10();
  const outline = { type: "Sphere" };
  const projection = d3.geoNaturalEarth1();
  const path = d3.geoPath(projection);

  const svg = d3.select('body')
    .append("svg")
    .attr("viewBox", [0, 0, width, height(projection, outline)]);

  const defs = svg.append("defs");

  defs.append("path")
      .attr("id", "outline")
      .attr("d", path(outline));

  defs.append("clipPath")
    .attr("id", "clip")
    .append("use")
    .attr("xlink:href", new URL("#outline", location));

  const g = svg.append("g")
    .attr("clip-path", `url(${new URL("#clip", location)})`);

  g.append("use")
    .attr("xlink:href", new URL("#outline", location))
    .attr("fill", "#fff");

  g.append("path")
    .attr("d", path(graticule))
    .attr("stroke", "#ddd")
    .attr("fill", "none");

  g.append("path")
    .attr("d", path(land))
    .attr("fill", "#ddd");

  svg.append("use")
    .attr("xlink:href", new URL("#outline", location))
    .attr("stroke", "#000")
    .attr("fill", "none");

  svg.append("g")
    .selectAll("circle")
    .data(data)
    .join("circle")
    .attr("transform", d => `translate(${projection([d.longitude, d.latitude])})`)
    .attr("r", 1.5)
    .append("title")
    .text(d => d.time);
}

/*** load data ***/
async function loadData() {
  const world = await d3.json('data/land-50m.json');
  const airports = await d3.csv('data/all_month.csv');

  drawMap(world, airports)
}

loadData();