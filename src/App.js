import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import FourOhFour from './components/404'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />

          <Route path="*" component={FourOhFour} />
          <Redirect from="*" to="/404" />
        </div>
      </Router>
    )
  }
}

export default App