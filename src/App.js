import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './components/header'

import PageFlexbox from './pages/Flexbox'
import PageCssGrid from './pages/CssGrid'

function App() {
  return (
    <Router>
      <Header links={[
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
      <Route path='/' exact component={PageFlexbox} />
      <Route path='/grid' component={PageCssGrid} />
    </Router>
  );
}

export default App;
