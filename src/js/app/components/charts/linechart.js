import React from 'react'
import rd3 from 'rd3'
import makeRequest from '../utils/makeRequest'
import ReactTimeout from 'react-timeout'

const LnChrt = rd3.LineChart

const LineChart = React.createClass({
  getInitialState () {
    return {
      lineData: []
    }
  },
  componentWillMount () {
    this.getLineChartData('/metrics')
  },
  pollData () {
    this.timer = setInterval(() => {
      this.getLineChartData('/metrics')
    }, 5000)
  },
  componentDidMount () {
    this.pollData()
  },
  componentWillUnmount: function () {
    clearInterval(this.timer)
  },
  getLineChartData (url) {
    let options = {
      method: 'get'
    }
    var self = this

    makeRequest(url, options)
    .then((response) => {
      let lineData = JSON.parse(response)
      self.setState({lineData: lineData.data })
      console.log('line data updated')
    })
    .catch((e) => {
      console.log(e)
    })
  },
  renderChart () {
    if (this.state.lineData.length == 0) {
      return null
    } else {
      return (
        <section>
          <hr />
          <h3>Customers over Time</h3>
          <LnChrt
            legend={false}
            viewBoxObject={{
              x: 0,
              y: 0,
              width: 960,
              height: 500
            }}
            yAxisLabel='Customers'
            xAxisLabel='Time'
            data={this.state.lineData}
            xAccessor={(d) => {
              return new Date(d.x)
            }
            }
            yAccessor={(d) => d.y}
            xAxisTickInterval={{unit: 'month', interval: 4}}
            gridHorizontal={true} />
          </section>
      )
    }
  },
  render () {
    return (
      <section>
        {this.renderChart()}
      </section>
    )
  }
})

export default LineChart
