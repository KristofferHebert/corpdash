import React from 'react'
import { Router, hashHistory } from 'react-router'

import Routes from './router'

const App = React.createClass({
  render () {
    return (
      <Router routes={Routes} history={hashHistory}/>
    )
  }
})

export default App
