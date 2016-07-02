import React from 'react'

import makeRequest from '../components/utils/makeRequest'
import DataChart from '../components/charts/datachart'
import _ from 'lodash'

const AllDataPage = React.createClass({
  componentWillMount () {
    this.getData('/data')
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
    if (filter !== 'none' && this.state.filters.indexOf(filter)) {
      return _.filter(data, (d) => {
        if (filter === 'open') {
          return d.open == 'true'
        } else if (filter === 'closed') {
          return d.closed != ''
        }
      })
    } else {
      return data
    }
  },
  applySort (sort, data) {
    if (sort !== 'none') {
      return _.sortBy(data, sort)
    } else {
      return data
    }
  },
  getInitialState () {
    return {
      currentFilter: 'none',
      currentSort: 'none',
      filters: ['none', 'closed', 'open'],
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
      console.log('data table fetched')
    })
    .catch((e) => {
      console.log(e)
    })
  },
  pollData () {
    this.timer = setInterval(() => {
      this.getData('/data')
    }, 5000)
  },
  componentDidMount () {
    this.pollData()
  },
  componentWillUnmount: function () {
    clearInterval(this.timer)
  },
  render () {
    return (
      <section>
          <section className='overflow'>
            <DataChart
              data={this.applySort(this.state.currentSort, this.applyFilter(this.state.currentFilter, this.state.data))}
              nav={this.state.nav}
              toggleSort={this.toggleSort}
              toggleFilter={this.toggleFilter}
              filters={this.state.filters}
              currentFilter={this.state.currentFilter} />
          </section>
      </section>
    )
  }
})

export default AllDataPage
