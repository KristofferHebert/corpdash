import React from 'react'
import rd3 from 'rd3'

const BrChrt = rd3.BarChart

const BarChart = React.createClass({
  renderBarChart () {
    if (this.props.barData.length === 0) {
      return null
    }

    return (
      <BrChrt
        data={this.props.barData}
        width={600}
        height={300}
        xAxisLabel='Over Time'
        yAxisLabel='Reported Issues' />
    )
  },
  render () {
    return (
      <section>
        <h3>Reported issues over a period of time</h3>
        {this.renderBarChart()}
      </section>
    )
  }
})

export default BarChart
