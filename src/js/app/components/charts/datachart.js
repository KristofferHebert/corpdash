'use strict'

import React from 'react'

const DataChart = React.createClass({
  renderToggleFilter () {
    const options = this.props.filters.map((filter, i) => {
      return (
        <option value={filter} key={new Date() + i}>{filter}</option>
      )
    })
    return (
      <form className='form-inline pull-right toggle-filter-container'>
        <fieldset className='form-group'>
          <label htmlFor='toggleFilter'>Filter by:</label>
            <select id='toggleFilter' className='form-control' onChange={this.props.toggleFilter}>
              {options}
            </select>
        </fieldset>
      </form>
    )
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
        <section>
          {this.renderToggleFilter()}
          <table className='table table-bordered'>
            {this.renderDataChartNav(this.props.nav)}
            {this.renderDataChart()}
          </table>
        </section>
    )
  }
})

export default DataChart
