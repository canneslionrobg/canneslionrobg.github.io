var chartRadius = Math.min(screen.width, screen.height)/4;

var chart = circularHeatChart()
    .segmentHeight(chartRadius/5)
    .innerRadius(chartRadius/5)
    .numSegments(12)
    .radialLabels(null)
    .segmentLabels(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"])
    .margin({top: 20, right: 20, bottom: 20, left: 20});


/* An array of objects */
// data = [];
// for(var i=0; i<48; i++) {
//     data[i] = {title: "Segment "+i, value: Math.round(Math.random()*100)};
// }

var data; // a global
d3.json("seasonaldata.json", function(error, json) {
  if (error) return console.warn(error);
  data = json;
  console.log(data[0]);
});

chart.accessor(function(d) {return d.value;})
    .radialLabels(null)
    .segmentLabels(null);
d3.select('#circularHeatChart')
    .selectAll('svg')
    .data([data])
    .enter()
    .append('svg')
    .call(chart);

/* Add a mouseover event */
d3.selectAll("#circularHeatChart path").on('mouseover', function() {
	var d = d3.select(this).data()[0];
    d3.select("#info").text(d.title + ' has value ' + d.value);
});
d3.selectAll("#circularHeatChart svg").on('mouseout', function() {
    d3.select("#info").text('');
});
