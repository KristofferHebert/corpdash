import React from 'react'
import GeoSpatialChart from '../components/charts/geospatial'
import getData from '../components/utils/getdata'

const GeoSpatialPage = React.createClass({
  render () {
    return (
      <section>
        <h3>Geospatial</h3>
        <GeoSpatialChart width={960} height={500}/>
      </section>
    )
  }
})

export default GeoSpatialPage
