import React from 'react'
import OpenIssues from '../components/charts/openissues'
import makeRequest from '../components/utils/makeRequest'
import LineChart from '../components/charts/linechart'
import BarChart from '../components/charts/barchart'

const KeyMetricsPage = React.createClass({
  getInitialState () {
    return {
      data: [],
      barData : [
        {
          'name': 'Series A',
          'values': [
            { 'x': 1, 'y':  91},
            { 'x': 2, 'y': 290},
            { 'x': 3, 'y': -25}
          ]
        },
        {
          'name': 'Series B',
          'values': [
            { 'x': 1, 'y':  9},
            { 'x': 2, 'y': 49},
            { 'x': 3, 'y': -20}
          ]
        },
        {
          'name': 'Series C',
          'values': [
            { 'x': 1, 'y':  14},
            { 'x': 2, 'y': 77},
            { 'x': 3, 'y': -70}
          ]
        }
      ]
    }
  },
  componentWillMount () {
    this.getData('data.csv')
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
        <h3>Keymetrics</h3>
        <OpenIssues data={this.state.data} />
        <LineChart />
        <BarChart barData={this.state.barData} />
      </section>
    )
  }
})

export default KeyMetricsPage
