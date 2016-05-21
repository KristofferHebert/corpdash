import React from 'react'
import { Link } from 'react-router'

const Wrapper = React.createClass({
  render () {
    return (
      <main>
        <nav>
          <ul>
            <li><Link activeClassName='active' to='/'>Geospatial</Link></li>
            <li><Link activeClassName='active' to='/key-metrics'>Key Metrics</Link></li>
            <li><Link activeClassName='active' to='/all-data'>All Data</Link></li>
          </ul>
        </nav>
        {this.props.children}
        <footer>CorpDash - 2016</footer>
      </main>
    )
  }
})

export default Wrapper
