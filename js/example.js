var chart = circularHeatChart()
    .segmentHeight(40)
    .innerRadius(20)
    .numSegments(12)
    .radialLabels(null)
    .segmentLabels(null)
    .margin({top: 20, right: 20, bottom: 20, left: 20});


/* An array of objects */
data = [];
for(var i=0; i<60; i++) {
    data[i] = {title: "Segment "+i, value: Math.round(Math.random()*100)};
}

chart.accessor(function(d) {return d.value;})
    .radialLabels(null)
    .segmentLabels(null);
d3.select('#chart4')
    .selectAll('svg')
    .data([data])
    .enter()
    .append('svg')
    .call(chart);

/* Add a mouseover event */
d3.selectAll("#chart4 path").on('mouseover', function() {
	var d = d3.select(this).data()[0];
    d3.select("#info").text(d.title + ' has value ' + d.value);
});
d3.selectAll("#chart4 svg").on('mouseout', function() {
    d3.select("#info").text('');
});
