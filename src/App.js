import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import FourOhFour from './components/404'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />

            <Route path="*" component={FourOhFour} />
            <Redirect from="*" to="/404" />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App