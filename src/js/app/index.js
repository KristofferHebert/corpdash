import React from 'react'
import { Router, browserHistory } from 'react-router'

import Routes from './router'

const App = React.createClass({
  render(){
    return (
      <Router routes={Routes} history={browserHistory} />
    )
  }
})

export default App
