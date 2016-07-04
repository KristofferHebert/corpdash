import React from 'react'
import { Router, hashHistory } from 'react-router'
import Routes from './router'
// css outputs to style tag
import styles from '../../css/main.css'

const App = React.createClass({
  render () {
    return (
      <Router routes={Routes} history={hashHistory}/>
    )
  }
})

export default App
