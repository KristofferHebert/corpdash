import React from 'react'
import rd3 from 'rd3'
import makeRequest from '../utils/makeRequest'

const LnChrt = rd3.LineChart

const LineChart = React.createClass({
  getInitialState () {
    return {
      lineData: [{
        name: 'Customers over Time',
        values: [{ x: 1436959681000, y: 11 },
          { x: 1442122919000, y: 9 }],
        strokeWidth: 3,
        strokeDashArray: '5,5'
      }]
    }
  },
  componentWillMount () {
    this.getLineChartData('metrics.json')
  },
  getLineChartData (url) {
    let options = {
      method: 'get'
    }
    var self = this

    makeRequest(url, options)
    .then((response) => {
      const lineData = response
      self.setState({lineData: lineData })
    })
    .catch((e) => {
      console.log(e)
    })
  },
  render () {
    return (
      <section>
        <LnChrt
          legend={true}
          width='100%'
          height={400}
          viewBoxObject={{
            x: 0,
            y: 0,
            width: 550,
            height: 400
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
})

export default LineChart
