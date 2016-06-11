import React from 'react'
import GeoSpatialChart from '../components/charts/geospatialchart.js'

const GeoSpatialPage = React.createClass({
  render () {
    return (
      <section>
        <h3>Geospatial</h3>
        <GeoSpatialChart width={960} height={500} />
      </section>
    )
  }
})

export default GeoSpatialPage
