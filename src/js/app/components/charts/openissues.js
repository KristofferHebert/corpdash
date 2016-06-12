import React from 'react'

const OpenIssues = React.createClass({
  renderOpenIssuesNumber (data) {
    let issues = 0
    data.forEach((d) => {
      if (d.closed === '') {
        issues++
      }
    })
    issues = (issues === 1) ? issues + ' issue' : issues + ' issues'
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
