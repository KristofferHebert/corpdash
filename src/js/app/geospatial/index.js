import React from 'react'
import GeoSpatialChart from '../components/charts/geospatial'
import getData from '../components/utils/getdata'

const GeoSpatialPage = React.createClass({
  getInitialState () {
    return {
      data: []
    }
  },
  componentWillMount () {
    this.getData('geospatial.json')
      .then((response) => {
        const data = JSON.parse(response)
        self.setState({data: data})
      })
      .catch((e) => {
        console.log(e)
      })
  },
  getData,
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
