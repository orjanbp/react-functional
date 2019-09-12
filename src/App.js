import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/header/header'

import PageFlexbox from './pages/flexbox'
import PageCssGrid from './pages/css-grid'
import PageMasonry from './pages/masonry'

function App() {
  return (
    <Router>
      <Header
        links={[
          {
            name: 'Flexbox',
            to: '/'
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
      <Route path="/" exact component={PageFlexbox} />
      <Route path="/grid" component={PageCssGrid} />
      <Route path="/masonry" component={PageMasonry} />
    </Router>
  )
}

export default App
