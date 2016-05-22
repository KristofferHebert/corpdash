import React from 'react'

import makeRequest from '../components/utils/makeRequest'
import DataChart from '../components/charts/datachart'

const AllDataPage = React.createClass({
  componentWillMount () {
    this.getData('data.csv')
  },
  getData (url) {
    let options = {
      method: 'get'
    }

    makeRequest(url, options)
    .then((response) => {
      console.log(response)
    })
    .catch((e) => {
      console.log(e)
    })
  },
  getInitialState () {
    return {
      data: []
    }
  },
  render () {
    return (
      <section>
        <h3>All Data</h3>
        <DataChart data={this.state.data} />
      </section>
    )
  }
})

export default AllDataPage
