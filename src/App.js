import React, { Component } from 'react'
import { BrowserRouter as HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Footer from './components/Footer'
import FourOhFour from './components/404'
import Login from './components/Login'
import Register from './components/Register'
import RegisterKey from './components/RegisterKey'
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
import Features from './components/FooterLinks/Features'
import Goals from './components/FooterLinks/Goals'
import BodyPicker from './components/BodyPicker/BodyPicker'
import BodyPickerTriceps from './components/BodyPicker/Triceps'
import BodyPickerBiceps from './components/BodyPicker/Biceps'
import BodyPickerBack from './components/BodyPicker/Back'
import BodyPickerGlutes from './components/BodyPicker/Glutes'
import BodyPickerLowerLegs from './components/BodyPicker/LowerLegs'
import BodyPickerCardio from './components/BodyPicker/Cardio'
import BodyPickerShoulders from './components/BodyPicker/Shoulders'
import BodyPickerChest from './components/BodyPicker/Chest'
import BodyPickerForearms from './components/BodyPicker/Forearms'
import BodyPickerAbs from './components/BodyPicker/Abs'
import BodyPickerUpperLegs from './components/BodyPicker/UpperLegs'
import BodyPickerAll from './components/BodyPicker/All'
import TOS from './components/FooterLinks/TermsOfService'
import CompleteReg from './components/CompleteRegistration'
import ForgotPass from './components/ForgotPassword'
import ResetPass from './components/ResetPassword'
import EmailNotSent from './components/EmailUnableToSend'
import EmailSent from './components/EmailSentSuccessfully'
import PassResetComplete from './components/PasswordSuccessfullyReset'
import WorkoutPlans from './components/WorkoutPlans/WorkoutPlans'
import MealSelection from './components/MealSelection/MealSelection'
import SearchWorkout from './components/SearchWorkouts/SearchWorkout'
import CreateWorkout from './components/CreateWorkout/CreateWorkout'
import EditProfile from './components/Profile/EditProfile'
import WeightLoss from './components/WeightLoss/WeightLoss'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot-password" component={ForgotPass} />
            <Route exact path="/reset-password" component={ResetPass}/>
            <Route exact path="/email-not-sent" component = {EmailNotSent}/>
            <Route exact path="/email-sent" component = {EmailSent}/>
            <Route exact path="/pass-reset-success" component = {PassResetComplete}/>
            <Route exact path="/CR" component = {CompleteReg}/>
            <Route exact path="/register" component={Register} />
            <Route exact path="/finalize-registration" component = {RegisterKey} />
            <Route exact path="/faq" component={FAQ} />
            <Route exact path="/tos" component = {TOS} />
            <Route exact path="/about" component={About} />
            <Route exact path="/documentation" component={Documentation} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/meal-planner" component={MealPlanner} />
            <Route exact path="/calculator" component={Calculator} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/accessibility" component={Access} />
            <Route exact path="/cookies" component={Cookies} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/body-picker" component={BodyPicker} />
            <Route exact path="/body-picker/triceps" component={BodyPickerTriceps} />
            <Route exact path="/body-picker/biceps" component={BodyPickerBiceps} />
            <Route exact path="/body-picker/back" component={BodyPickerBack} />
            <Route exact path="/body-picker/glutes" component={BodyPickerGlutes} />
            <Route exact path="/body-picker/lower-legs" component={BodyPickerLowerLegs} />
            <Route exact path="/body-picker/cardio" component={BodyPickerCardio} />
            <Route exact path="/body-picker/shoulders" component={BodyPickerShoulders} />
            <Route exact path="/body-picker/chest" component={BodyPickerChest} />
            <Route exact path="/body-picker/forearms" component={BodyPickerForearms} />
            <Route exact path="/body-picker/abs" component={BodyPickerAbs} />
            <Route exact path="/body-picker/upper-legs" component={BodyPickerUpperLegs} />
            <Route exact path="/body-picker/all" component={BodyPickerAll} />
            <Route exact path="/goals" component={Goals} />
            <Route exact path="/workout-plans" component={WorkoutPlans} />
            <Route exact path="/meal-selection" component={MealSelection} />
            <Route exact path="/searchWorkouts" component={SearchWorkout} />
            <Route exact path="/createWorkouts" component={CreateWorkout} />
            <Route exact path="/edit-profile" component={EditProfile} />
            <Route exact path="/weight-loss" component={WeightLoss} />
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