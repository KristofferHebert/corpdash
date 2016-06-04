import React from 'react'

import makeRequest from '../components/utils/makeRequest'
import DataChart from '../components/charts/datachart'

const AllDataPage = React.createClass({
  componentWillMount () {
    this.getData('data.csv')
  },
  toggleSort (sort) {
    return (e) => {
      e.preventDefault()
      let updatedSort = this.state
      updatedSort.currentSort = sort
      this.setState(updatedSort)
    }
  },
  toggleFilter (e) {
    let updatedFilter = this.state
    updatedFilter.currentFilter = e.target.value
    this.setState(updatedFilter)
  },
  applyFilter (filter, data) {
    if (filter !== 'none' && this.state.filters.indexOf('filter')) {
      return _.filter(data, (d) => {
        if (d[filter])
          return d[filter]
      })
    } else {
      return data
    }
  },
  applySort (sort, data) {
    if (filter !== 'none' && this.state.filters.indexOf('filter')) {
      return _.filter(data, (d) => {
        if (d[filter])
          return d[filter]
      })
    } else {
      return data
    }
  },
  getInitialState () {
    return {
      currentFilter: 'none',
      currentSort: 'none',
      filters: ['none', 'open', 'closed'],
      data: [
        {
          'id': null,
          'customer_name': null,
          'customer_email': null,
          'submission': null,
          'description': null,
          'open': null,
          'closed': null,
          'employee_name': null
        }
      ],
      nav: [
        'id',
        'customer_name',
        'customer_email',
        'submission',
        'description',
        'open',
        'closed',
        'employee_name'
      ]
    }
  },
  csvToCollection (csv) {
    return csv.splice(1)
      .map((r) => {
        return {
          'id': r[0],
          'customer_name': r[1],
          'customer_email': r[2],
          'submission': r[3],
          'description': r[4],
          'open': r[5],
          'closed': r[6],
          'employee_name': r[7]
        }
      })
  },
  getData (url) {
    let options = {
      method: 'get'
    }
    var self = this

    makeRequest(url, options)
    .then((response) => {
      const csv = Papa.parse(response)
      self.setState({data: self.csvToCollection(csv.data)})
    })
    .catch((e) => {
      console.log(e)
    })
  },
  render () {
    return (
      <section>
        <h3>All Data</h3>
          <DataChart
            data={this.applyFilter(this.state.currentFilter, this.state.data)}
            nav={this.state.nav}
            toggleSort={this.toggleSort}
            toggleFilter={this.toggleFilter}
            filters={this.state.filters}
            currentFilter={this.state.currentFilter} />
      </section>
    )
  }
})

export default AllDataPage
