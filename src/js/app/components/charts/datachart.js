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
            <select id='toggleFilter' className='form-control' onChange={this.props.toggleFilter} value={this.props.currentFilter}>
              {options}
            </select>
        </fieldset>
      </form>
    )
  },
  renderDataChartNav (navArray) {
    return (
      <thead className='bg-success'>
        <tr>
          <td className={'text-center th-header-link th-header-' + navArray[0]} colSpan='1'>
            <a href='#' onClick={this.props.toggleSort(navArray[0])}>
              {navArray[0]}
            </a>
          </td>
          <td className={'text-center th-header-link th-header-' + navArray[1]} colSpan='1'>
            <a href='#' onClick={this.props.toggleSort(navArray[1])}>
              {navArray[1]}
            </a>
          </td>
          <td className={'text-center th-header-link th-header-' + navArray[2]} colSpan='1'>
            <a href='#' onClick={this.props.toggleSort(navArray[2])}>
              {navArray[2]}
            </a>
          </td>
          <td className={'text-center th-header-link th-header-' + navArray[3]} colSpan='2'>
            <a href='#' onClick={this.props.toggleSort(navArray[3])}>
              {navArray[3]}
            </a>
          </td>
          <td className={'text-center th-header-link th-header-' + navArray[4]} colSpan='4'>
            <a href='#' onClick={this.props.toggleSort(navArray[4])}>
              {navArray[4]}
            </a>
          </td>
          <td className={'text-center th-header-link th-header-' + navArray[5]}>
            <a href='#' onClick={this.props.toggleSort(navArray[5])}>
              {navArray[5]}
            </a>
          </td>
          <td className={'text-center th-header-link th-header-' + navArray[6]}>
            <a href='#' onClick={this.props.toggleSort(navArray[6])}>
              {navArray[6]}
            </a>
          </td>
          <td className={'text-center th-header-link th-header-' + navArray[7]}>
            <a href='#' onClick={this.props.toggleSort(navArray[7])}>
              {navArray[7]}
            </a>
          </td>
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
          <td className='text-center' colSpan='1'>
            <p>{row.id}</p>
          </td>
          <td className='text-center' colSpan='1'>
            <p>{row.customer_name}</p>
          </td>
          <td className='text-center' colSpan='1'>
            <p>{row.customer_email}</p>
          </td>
          <td className='text-center' colSpan='2'>
            <p>{this.parseDate(row.submission)}</p>
          </td>
          <td className='text-center' colSpan='4'>
            <p>{row.description}</p>
          </td>
          <td className='text-center'>
            <p>{row.open}</p>
          </td>
          <td className='text-center'>
            <p>{this.parseDate(row.closed)}</p>
          </td>
          <td className='text-center'>
            <p>{row.employee_name}</p>
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
