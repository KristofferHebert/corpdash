import React from 'react'

const DataChart = React.createClass({
  toggleFilter (e) {
    console.log(e)
  },
  toggleSort (e) {
    console.log(e)
  },
  renderDataChartNav () {
    return (
      <nav>
        <ul>
          <li><a onClick={this.toggleFilter}>filter</a></li>
        </ul>
      </nav>
    )
  },
  renderDataChart () {
    return 'loading'
  },
  render () {
    return (
      <table>
        {this.renderDataChartNav()}
        {this.renderDataChart()}
      </table>
    )
  }
})

export default DataChart
