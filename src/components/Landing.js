import React, { Component } from 'react'
import '../static/css/Landing.css'

var welcome = {
  fontSize: 50
};

class Landing extends Component {
  render() {
    return (
      <div id="landing">
        <div className="container">

          <div className="row">
            <div className="col-sm-12 mx-auto">
              <h1 className="text-center" style={welcome}>Welcome to Virgil's Travels!</h1>
              <hr/>
              <p>Our web application is intended to make exercising easy to do and highly accessible!</p>
            </div>
          </div>
          
        </div>
      </div>
    )
  }
}

export default Landing