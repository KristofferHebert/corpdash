import React from 'react'
import makeRequest from '../components/utils/makeRequest'
import GeoSpatialChart from '../components/charts/geospatial'

const GeoSpatialPage = React.createClass({
  getInitialState () {
    return {
      data: []
    }
  },
  componentWillMount () {
    this.getData('geospatial.json')
  },
  getData (url) {
    let options = {
      method: 'get'
    }
    var self = this

    makeRequest(url, options)
    .then((response) => {
      const data = JSON.parse(response)
      self.setState({data: data})
    })
    .catch((e) => {
      console.log(e)
    })
  },
  render () {
    return (
      <section>
        <h3>Geospatial</h3>
        <GeoSpatialChart data={this.state.data} width={960} height={500}/>
      </section>
    )
  }
})

export default GeoSpatialPage
