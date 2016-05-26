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
  parseDate (datestring) {
    if (datestring) {
      return new Date(datestring).toDateString()
    }
    return null
  },
  renderRow (row, i) {
    return (
      <tbody key={Date.now() + i}>
        <tr>
          <td className='text-center'>
            {row.id}
          </td>
          <td className='text-center'>
            {row.customer_name}
          </td>
          <td className='text-center'>
            {row.customer_email}
          </td>
          <td className='text-center'>
            {this.parseDate(row.submission)}
          </td>
          <td className='text-center'>
            {row.description}
          </td>
          <td className='text-center'>
            {row.open}
          </td>
          <td className='text-center'>
            {this.parseDate(row.closed)}
          </td>
          <td className='text-center'>
            {row.employee_name}
          </td>
        </tr>
      </tbody>
    )
  },
  renderDataChart () {
    const chart = null
    self = this
    if (this.props.data.length !== 0) {
      const chart = this.props.data
      return chart.map((row, i) => {
        return self.renderRow(row, i)
      })
    }
    return chart
  },
  render () {
    return (
        <table className='table table-bordered'>
          {this.renderDataChartNav(this.props.nav)}
          {this.renderDataChart()}
        </table>
    )
  }
})

export default DataChart
