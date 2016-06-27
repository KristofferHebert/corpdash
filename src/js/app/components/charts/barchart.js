import React from 'react'
import rd3 from 'rd3'

const BrChrt = rd3.BarChart

const BarChart = React.createClass({
  getDefaultProps () {
    return {
      barData: []
    }
  },
  renderBarChart () {
    if (this.props.barData.length === 0) {
      return null
    } else {
      return (
        <BarChart
          data={this.props.barData}
          width={500}
          height={300}
          xAxisLabel='Value'
          yAxisLabel='Label'
          />
      )
    }
  },
  render () {
    return (
      <section>
        <h3>BarChart</h3>
        {this.renderBarChart()}
      </section>
    )
  }
})

export default BarChart
