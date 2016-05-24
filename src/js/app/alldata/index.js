import React from 'react'

import makeRequest from '../components/utils/makeRequest'
import DataChart from '../components/charts/datachart'

const AllDataPage = React.createClass({
  componentWillMount () {
    this.getData('data.csv')
  },
  toggleSort (sort) {
    return (e) => {
      e.preventDefault()
      console.log(sort)
    }
  },
  getInitialState () {
    return {
      data: [[
        'id',
        'customer_name',
        'customer_email',
        'submission',
        'description',
        'open',
        'closed',
        'employee_name'
      ]]
    }
  },
  getData (url) {
    let options = {
      method: 'get'
    }
    var self = this

    makeRequest(url, options)
    .then((response) => {
      const csv = Papa.parse(response)
      self.setState({data: csv.data})
    })
    .catch((e) => {
      console.log(e)
    })
  },
  render () {
    return (
      <section>
        <h3>All Data</h3>
        <DataChart
          data={this.state.data}
          toggleSort={this.toggleSort} />
      </section>
    )
  }
})

export default AllDataPage
