import React from 'react'
import rd3 from 'rd3'

const LnChrt = rd3.LineChart

const LineChart = React.createClass({
  renderOpenIssuesNumber (data) {
    let issues = 0
    data.forEach((d) => {
      if (d.closed === '') {
        issues++
      }
    })
    issues = (issues === 1) ? issues + ' issue' : issues + ' issues'
    return (
      <h3>Currently {issues} open</h3>
    )
  },
  render () {
    return (
      <LnChrt
        legend={true}
        data={this.state.data}
        width='100%'
        height={400}
        viewBoxObject={{
          x: 0,
          y: 0,
          width: 500,
          height: 400
        }}
        title='Line Chart'
        yAxisLabel='Paying Customers'
        xAxisLabel='Over Time'
        domain={{x: [, 6], y: [-10 ]}}
        gridHorizontal={true}
      />
    )
  }
})

export default LineChart
