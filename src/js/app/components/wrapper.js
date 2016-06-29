import React from 'react'
import { Link } from 'react-router'

const Wrapper = React.createClass({
  render () {
    return (
      <main>
        <nav className='navbar navbar-default' role='banner'>
          <div className='container'>
            <div className='navbar-header'>
              <a href='/' className='navbar-brand'>CorpDash</a>
            </div>
            <ul className='nav navbar-nav navbar-right' role='navigation'>
              <li><Link activeClassName='active' to='/'>Geospatial</Link></li>
              <li><Link activeClassName='active' to='/key-metrics'>Key Metrics</Link></li>
              <li><Link activeClassName='active' to='/all-data'>All Data</Link></li>
            </ul>
          </div>
        </nav>
        <section className='container' role='main'>
          <section className='row'>
            <div className='col-md-9 col-md-offset-2'>
              {this.props.children}
            </div>
          </section>
        </section>
        <footer className='text-center'><p>CorpDash - 2016</p></footer>
      </main>
    )
  }
})

export default Wrapper
