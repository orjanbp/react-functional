import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import Sidebar from './components/sidebar/sidebar'

import PageFlexbox from './pages/flexbox'
import PageCssGrid from './pages/css-grid'
import PageMasonry from './pages/masonry'

function App() {
  return (
    <Router>
      <Sidebar
        links={[
          {
            name: 'Flexbox',
            to: '/flexbox'
          },
          {
            name: 'CSS Grid',
            to: '/grid'
          },
          {
            name: 'Masonry',
            to: '/masonry'
          }
        ]}
      />
      <Route exact path="/" render={() => <Redirect to="/flexbox" />} />
      <Route path="/flexbox" component={PageFlexbox} />
      <Route path="/grid" component={PageCssGrid} />
      <Route path="/masonry" component={PageMasonry} />
    </Router>
  )
}

export default App
