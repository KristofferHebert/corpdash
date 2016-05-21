// inspired by https://github.com/reactjs/react-router/blob/master/examples/active-links/app.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Pages
import Wrapper from './components/wrapper'
import GeoSpatialPage from './geospatial/index'
import KeyMetricsPage from './keymetrics/index'
import AllDataPage from './alldata/index'

const Routes = (
  <Route path='/' component={Wrapper}>
    <IndexRoute component={GeoSpatialPage} />
    <Route path='/key-metrics' component={KeyMetricsPage} />
    <Route path='/all-data' component={AllDataPage} />
  </Route>
)

export default Routes
