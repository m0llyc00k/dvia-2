/* global d3 */


// use d3 to pass data through p5 - helpful tool. In additiona to map funciton it has dom functions...


// IEFE (immediately evoceted function expression)
(async () => {
    const data = await d3.csv('./data/iris.csv');
    console.log(data)
    
    const max_value = d3.max(data, (d) => {
        return d.petal_length;
    })//function like map
    
     const max_index = d3.maxIndex(data, (d) => {
        return d.petal_length;
    })
    
    console.log(max_value);
    console.log(max_index);
    console.log(data[max_index])
    
    //sync dataset, g represents group and data entry is d (but they can called be anything)
    const sortedData = d3.groupSort(
        data, 
        g => d3.median(g, d => d.petal_length), // sort values using median, like in JS [1, 4, 5, 4].sort((a,b)=>a-b)
        (d) => {
            return {
                name: d.species,
                petal_length: d.petal_length
            }
        }
    );
    console.log(sortedData)
    
    //group array into bins, create bin generator first
    const bin = d3
            .bin()
            .domain([0,max_value])
            .thresholds(max_value)
            .value(d=>d.petal_length)
    
    const binned_data = bin(sortedData)
    
    console.log('binned_data')
    console.log(binned_data)
    
    const svg = d3
    .create('svg')
        .attr('viewbox', [0, 0, 600, 300])
        .style('border', '1px solid red')
        .style('display', 'inline-block')
        
    const x_scale = d3
        .scaleBand()
        .domain(binned_data.map((d, i) => i))
        .range([0, WIDTH])
    
    const y_value = d3.scaleLinear()
    
    
    svg
    .append ('g')
    .selectAll('rect')
    .data(binned.data)
    .join('rect')
    .attr('data-value', (d) => d.length)
    .attr('height', 50)
    .attr('width', x_scale.bandwidth)
    .attr('x', (d, i) => x_scale(i))

    
    app.append(() => svg.node())
    
})()
    