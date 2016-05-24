import React from 'react'

const DataChart = React.createClass({
  toggleFilter (e) {
    console.log(e)
  },
  renderDataChartNav (navArray) {
    const DataChartNav = navArray.map((item, i) => {
      return (
        <td className={'text-center th-header-link th-header-' + item} key={Date.now() + i}>
          <a href='#' onClick={this.props.toggleSort(item)}>
            {item}
          </a>
        </td>
      )
    })

    return (
      <thead className='bg-success'>
        <tr>
          {DataChartNav}
        </tr>
      </thead>
    )
  },
  renderRow (row) {
    const TDS = row.map((td, index) => {
      return (
        <td key={Date.now() + index} className='text-center'>
          {td}
        </td>
      )
    })
    return (
      <tr>
        {TDS}
      </tr>
    )
  },
  renderDataChart () {
    const chart = null
    self = this
    if (this.props.data.length != 0) {
      const chart = this.props.data.slice(1)
      return chart.map((row) => {
        return self.renderRow(row)
      })
    }
    return chart
  },
  render () {
    return (
        <table className='table table-bordered'>
          {this.renderDataChartNav(this.props.data[0])}
          {this.renderDataChart()}
        </table>
    )
  }
})

export default DataChart
