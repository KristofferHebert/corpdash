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
      data: [
        {
          'id': null,
          'customer_name': null,
          'customer_email': null,
          'submission': null,
          'description': null,
          'open': null,
          'closed': null,
          'employee_name': null
        }
      ],
      nav: [
        'id',
        'customer_name',
        'customer_email',
        'submission',
        'description',
        'open',
        'closed',
        'employee_name'
      ]
    }
  },
  csvToCollection (csv) {
    return csv.splice(1)
      .map((r) => {
        return {
          'id': r[0],
          'customer_name': r[1],
          'customer_email': r[2],
          'submission': r[3],
          'description': r[4],
          'open': r[5],
          'closed': r[6],
          'employee_name': r[7]
        }
      })
  },
  getData (url) {
    let options = {
      method: 'get'
    }
    var self = this

    makeRequest(url, options)
    .then((response) => {
      const csv = Papa.parse(response)
      self.setState({data: self.csvToCollection(csv.data)})
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
          nav={this.state.nav}
          toggleSort={this.toggleSort} />
      </section>
    )
  }
})

export default AllDataPage
