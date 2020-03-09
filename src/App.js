import React, { Component } from 'react'
import { BrowserRouter as HashRouter, Route, Switch, Redirect } from 'react-router-dom'

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
import Profile from './components/Profile'
import Calculator from './components/Calculator/Calculator'
import Access from './components/FooterLinks/Accessibility'
import Cookies from './components/FooterLinks/Cookies'
import Privacy from './components/FooterLinks/Privacy'
import TOS from './components/FooterLinks/TermsOfService'
import ForgotPass from './components/ForgotPassword'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path = "/forgot-password" component={ForgotPass} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path = "/tos" component = {TOS} />
            <Route exact path="/about" component={About} />
            <Route exact path="/documentation" component={Documentation} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/meal-planner" component={MealPlanner} />
            <Route exact path="/calculator" component={Calculator} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/Accessibility" component={Access} />
            <Route exact path="/Cookies" component={Cookies} />
            <Route exact path="/Privacy" component={Privacy} />
            <Route path="*" component={FourOhFour} />
            <Redirect from="*" to="/404" />
          </Switch>
          <Footer/>
        </div>
      </HashRouter>
    )
  }
}

export default App