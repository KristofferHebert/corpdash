import React from 'react'
import OpenIssues from '../components/charts/openissues'
import makeRequest from '../components/utils/makeRequest'
import LineChart from '../components/charts/linechart'
import BarChart from '../components/charts/barchart'

const KeyMetricsPage = React.createClass({
  getInitialState () {
    return {
      data: [],
      barData : []
    }
  },
  componentWillMount () {
    this.getOpenIssueData('/data')
    this.getBarData('reported')
  },
  pollData () {
    this.timer = setInterval(() => {
      this.getBarData('reported')
      this.getOpenIssueData('/data')
    }, 5000)
  },
  componentDidMount () {
    this.pollData()
  },
  componentWillUnmount: function () {
    clearInterval(this.timer)
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
  getOpenIssueData (url) {
    let options = {
      method: 'get'
    }
    var self = this

    makeRequest(url, options)
    .then((response) => {
      const csv = Papa.parse(response)
      self.setState({data: self.csvToCollection(csv.data)})
      console.log('open issues data updated')
    })
    .catch((e) => {
      console.log(e)
    })
  },
  getBarData (url) {
    let options = {
      method: 'get'
    }
    var self = this

    makeRequest(url, options)
    .then((response) => {
      const barData = JSON.parse(response)
      self.setState({barData: barData.data})
      console.log('bar chart updated')
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
        <BarChart barData={this.state.barData}/>
      </section>
    )
  }
})

export default KeyMetricsPage
