import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import _ from 'lodash'

import Sidebar from './components/sidebar/sidebar'

import PageFlexbox from './pages/flexbox'
import PageCssGrid from './pages/css-grid'
import PageMasonry from './pages/masonry'

const routes = [
  {
    name: 'Layout: Flexbox',
    to: '/flexbox-layout',
    component: PageFlexbox
  },
  {
    name: 'Layout: CSS Grid',
    to: '/grid-layout',
    component: PageCssGrid
  },
  {
    name: 'Layout: Masonry',
    to: '/masonry-layout',
    component: PageMasonry
  }
]

function App() {
  return (
    <Router>
      <Sidebar links={routes} />
      <Route
        exact
        path="/"
        render={() => <Redirect to={_.first(routes).to} />}
      />

      {routes.map(route => (
        <Route path={route.to} component={route.component} />
      ))}
    </Router>
  )
}

export default App
