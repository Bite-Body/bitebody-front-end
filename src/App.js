import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Footer from './components/Footer'
import FourOhFour from './components/404'
import Login from './components/Login'
import Register from './components/Register'
import FAQ from './components/FooterLinks/FAQ'
import About from './components/FooterLinks/About'
import Documentation from './components/FooterLinks/Documentation'
import Team from './components/FooterLinks/Team'
import MealPlanner from './components/MealPlanner/MealPlanner'

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
            <Route exact path="/meal-planner" component={Register} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/about" component={About} />
            <Route exact path="/documentation" component={Documentation} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/meal-planner" component={MealPlanner} />

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