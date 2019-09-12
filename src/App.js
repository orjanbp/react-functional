import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/header/header'

import PageFlexbox from './pages/flexbox'
import PageCssGrid from './pages/css-grid'

function App() {
  return (
    <>
      <Header
        links={[
          {
            name: 'Flexbox',
            to: '/'
          },
          {
            name: 'CSS Grid',
            to: '/grid'
          }
        ]}
      />
      <Router>
        <Route path="/" exact component={PageFlexbox} />
        <Route path="/grid" component={PageCssGrid} />
      </Router>
    </>
  )
}

export default App
