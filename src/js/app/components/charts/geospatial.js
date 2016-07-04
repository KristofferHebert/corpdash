'use strict'
import React from 'react'

// inspiration from http://bl.ocks.org/d3noob/5193723 and http://bl.ocks.org/lhoworko/7753a11efc189a936371

const GeoSpatialChart = React.createClass({
  generateStats (data) {
    return data.city + ',' + data.country + ' office <br />' + data.num + ' employees'
  },
  pollData () {
    this.timer = setInterval(() => {
      this.checkForNewData('/geo')
    }, 5000)
  },
  componentWillUnmount: function () {
    clearInterval(this.timer)
  },
  checkForNewData () {
    this.renderChart()
    console.log('geospatial chart fetched')
  },
  renderChart (width, height) {
    let self = this
    let projection = d3.geo.mercator()
      .center([0, 5])
      .scale(160)
      .rotate([-180, 0])

    // create chart dom
    let svgdom = this.refs.geo
    let svg = d3.select(svgdom)
      .attr('width', width)
      .attr('height', height)

    // create tooltip
    var tooltip = d3.select('#geo-container').append('div')
    .attr('class', 'hide tooltip')

    let path = d3.geo.path()
      .projection(projection)

    let g = svg.append('g')

    // load and display the World background
    d3.json('world.json', function (error, topology) {

    // load and display the cities from csv
      d3.csv('/geo', function (error, data) {
        g.selectAll('circle')
        .data(data)
        .enter()
        .append('a')
        .append('circle')
        .attr('cx', function (d) {
          return projection([d.lon, d.lat])[0]
        })
        .attr('cy', function (d) {
          return projection([d.lon, d.lat])[1]
        })
        .attr('r', 5)
        .style('fill', 'blue')
        .on('mousemove', function (d) {
          var mouse = d3.mouse(svg.node()).map(function (d) {
            return parseInt(d)
          })
          tooltip.classed('hide', false)
               .attr('style', 'left:' + (mouse[0] + 15) +
                       'px; top:' + (mouse[1] + 5) + 'px')
               .html(self.generateStats(d))
        })
        .on('mouseout', function () {
          tooltip.classed('hide', true)
        })
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
    this.pollData()
  },
  componentDidUpdate () {
    this.renderChart()
  },
  render () {
    return (
      <section id='geo-container'>
        <svg id='geo' ref='geo'></svg>
      </section>
    )
  }
})

export default GeoSpatialChart
