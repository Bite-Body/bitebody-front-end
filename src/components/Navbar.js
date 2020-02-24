import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import headerLogo from '../static/images/BiteBody_Logo_Navbar.png'
import '../static/css/Navbar.css'

class Navbar extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </>
    )

    const userLink = (
      <>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Features</a>
          <div class="dropdown-menu">
            <div class="dropdown-divider"></div>
            <Link class="dropdown-item" to="/">Pick yo body part</Link>
            <Link class="dropdown-item" to="/">Search Workouts</Link>
            <Link class="dropdown-item" to="/">Create Workouts</Link>
            <Link class="dropdown-item" to="/">Workout Plans</Link>
            <div class="dropdown-divider"></div>
            <Link class="dropdown-item" to="/meal-planner">Meal Planner</Link>
            <Link class="dropdown-item" to="/calculator">Calorie Calculator</Link>
          </div>
        </li>

        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </>
    )

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
      <Link class="navbar-brand" to="/"><img alt="logo" src={headerLogo} height="40px"></img></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end " id="navbarsExample10">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {localStorage.usertoken ? userLink : loginRegLink}
          </ul>
        </div>
        
      </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)