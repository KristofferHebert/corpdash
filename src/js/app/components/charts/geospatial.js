'use strict'
import React from 'react'

// inspiration from http://bl.ocks.org/d3noob/5193723 and http://bl.ocks.org/lhoworko/7753a11efc189a936371

const GeoSpatialChart = React.createClass({
  renderChart (width, height) {
    let projection = d3.geo.mercator()
      .center([0, 5 ])
      .scale(150)
      .rotate([-180, 0])

    // create chart dom
    let svgdom = this.refs.geo
    let svg = d3.select(svgdom).append('svg')
      .attr('width', width)
      .attr('height', height)

    // create tooltip
    var tooltip = d3.select(svgdom).append('div')
    .attr('class', 'hidden tooltip')

    let path = d3.geo.path()
      .projection(projection)

    let g = svg.append('g')

    // load and display the World background
    d3.json('world.json', function (error, topology) {

    // load and display the cities from csv
      d3.csv('geo.csv', function (error, data) {
        g.selectAll('circle')
          .data(data)
          .enter()
          .append('a')
    			.attr('xlink:href', function (d) {
      return 'https://www.google.com/search?q=' + d.city
    })
           .append('circle')
           .attr('cx', function (d) {
             return projection([d.lon, d.lat])[0]
           })
           .attr('cy', function (d) {
             return projection([d.lon, d.lat])[1]
           })
           .attr('r', 5)
           .style('fill', 'blue')
      })

      g.selectAll('path')
        .data(topojson.object(topology, topology.objects.countries)
          .geometries)
          .enter()
          .append('path')
          .attr('d', path)

      let zoom = d3.behavior.zoom()
        .on('zoom', function () {
          g.attr('transform', 'translate(' +
            d3.event.translate.join(',') + ')scale(' + d3.event.scale + ')')
          g.selectAll('circle')
            .attr('d', path.projection(projection))
          g.selectAll('path')
            .attr('d', path.projection(projection))
        })

      // add zoom functionality
      svg.call(zoom)
    })
  },
  componentDidMount () {
    this.renderChart()
  },
  componentDidUpdate () {
    this.renderChart()
  },
  render () {
    return (
      <section id='geo' ref='geo'></section>
    )
  }
})

export default GeoSpatialChart
