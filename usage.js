function graphDaily(day) {

  // parse the date / time
  var parseTime_2 = d3.timeParse("%u %H");

  // Get the data again

  d3.csv("weekly.csv", function(error, data) {
    if (error) throw error;
    //filter the data
    var filteredData = data.slice(day * 23 , (day + 1) * 23 );
    filteredData.columns = ["date", "close"];
    console.log(filteredData);
    filteredData.forEach(function(d) {
        d.date = parseTime_2(d.date);
        d.close = +d.close;
    });

    // Scale the range of the data
    x.domain(d3.extent(filteredData, function(d) { return d.date; }));
    y.domain([0, d3.max(filteredData, function(d) { return d.close; })]);

    // Add the valueline path.
    svg_2.select("path")
        .data([filteredData])
        .attr("class", "line")
        .attr("d", valueline);

    // Add the X Axis
    svg_2.select("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x)
            .ticks(4), d3.axisLeft(y));
  });

}

// ** Update data section (Called from the onclick)
function updateData(low, high) {

    // parse the date / time
    var parseTime = d3.timeParse("%m/%d/%y");

    // Get the data again

    d3.csv("monthlyUsage.csv", function(error, data) {
      if (error) throw error;
      console.log(data);
      //filter the data
      var filteredData = data.filter(entry => entry.date.substring(0, 2) > low && entry.date.substring(0, 2) < high);
      filteredData.columns = ["date", "close"];
      console.log(filteredData);
      filteredData.forEach(function(d) {
          d.date = parseTime(d.date);
          d.close = +d.close;
      });

      // Scale the range of the data
      x.domain(d3.extent(filteredData, function(d) { return d.date; }));
      y.domain([0, d3.max(filteredData, function(d) { return d.close; })]);

      // Add the valueline path.
      svg.select("path")
          .data([filteredData])
          .attr("class", "line")
          .attr("d", valueline);

      // Add the X Axis
      svg.select("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x)
              .ticks(4), d3.axisLeft(y));
    });
}

/* Monthly Graph data */

// set the dimensions and margins of the graph
var margin = {top: 5, right: 0, bottom: 20, left: 45},
    width = 240 - margin.left - margin.right,
    height = 135 - margin.top - margin.bottom;

// parse the date / time
var parseTime = d3.timeParse("%m/%d/%y");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#month").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("monthlyUsage.csv", function(error, data) {
  if (error) throw error;
  console.log(data);
  //filter the data
  var filteredData = data.filter(entry => entry.date.substring(0, 2) > 0 && entry.date.substring(0, 2) < 2);
  filteredData.columns = ["date", "close"];
  console.log(filteredData);
  filteredData.forEach(function(d) {
      d.date = parseTime(d.date);
      d.close = +d.close;
  });

  // Scale the range of the data
  x.domain(d3.extent(filteredData, function(d) { return d.date; }));
  y.domain([0, d3.max(filteredData, function(d) { return d.close; })]);

  // Add the valueline path.
  svg.append("path")
      .data([filteredData])
      .attr("class", "line")
      .attr("d", valueline);

  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x)
          .ticks(4));

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

  // text label for the y axis
      svg.append("text")
       .attr("transform", "rotate(-90)")
       .attr("y", 0 - margin.left)
       .attr("x",0 - (height / 2))
       .attr("dy", "1em")
       .style("text-anchor", "middle")
       .text("Minutes");

});


/* Daily Graph data */

// parse the date / time
var parseTime_2 = d3.timeParse("%u %H");

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg_2 = d3.select("#daily").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("weekly.csv", function(error, data) {
  if (error) throw error;
  console.log(data);
  //filter the data
  var filteredData = data.slice(0,23);
  filteredData.columns = ["date", "close"];
  console.log(filteredData);
  filteredData.forEach(function(d) {
      d.date = parseTime_2(d.date);
      d.close = +d.close;
  });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain([0, d3.max(data, function(d) { return d.close; })]);

  // Add the valueline path.
  svg_2.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline);

  // Add the X Axis
  svg_2.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x)
          .ticks(4));

  // Add the Y Axis
  svg_2.append("g")
      .call(d3.axisLeft(y));

  // text label for the y axis
  svg_2.append("text")
       .attr("transform", "rotate(-90)")
       .attr("y", 0 - margin.left)
       .attr("x",0 - (height / 2))
       .attr("dy", "1em")
       .style("text-anchor", "middle")
       .text("Seconds");
});
