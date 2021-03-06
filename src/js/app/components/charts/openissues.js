import React from 'react'

const OpenIssues = React.createClass({
  renderOpenIssuesNumber (data) {
    let issues = 0
    data.forEach((d) => {
      if (d.closed === '') {
        issues++
      }
    })

    if (issues === 1) {
      issues = issues + ' issue'
    } else {
      issues = issues + ' issues'
    }

    return (
      <h3>Currently {issues} open</h3>
    )
  },
  render () {
    return (
      <section>
        {this.renderOpenIssuesNumber(this.props.data)}
      </section>
    )
  }
})

export default OpenIssues
