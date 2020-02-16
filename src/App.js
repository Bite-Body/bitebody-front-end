import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Footer from './components/Footer'
import FourOhFour from './components/404'
import Login from './components/Login'
import Register from './components/Register'
import faq from './components/FooterLinks/FAQ'
import about from './components/FooterLinks/About'
import Documentation from './components/FooterLinks/Documentation'
import Team from './components/FooterLinks/Team'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/faq" component={faq} />
            <Route exact path="/about" component={about} />
            <Route exact path="/documentation" component={Documentation} />
            <Route exact path="/Team" component={Team} />
            <Route path="*" component={FourOhFour} />
            <Redirect from="*" to="/404" />
          </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App