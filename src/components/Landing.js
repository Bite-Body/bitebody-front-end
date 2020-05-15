import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Carousel from './Landing/Carousel'
import '../static/css/Landing.css'
import screenshot from '../static/images/opt_iphone.webp'
import screenshot_ipad from '../static/images/opt_ipad.webp'
var welcome = {
  fontSize: 50
};

class Landing extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      id: ''
    }
  }

  componentDidMount() {
    document.title = "Bitebody - Home"
    const token = localStorage.usertoken
    try{
      const decoded = jwt_decode(token)
      this.setState({
        first_name: decoded.identity.first_name,
        last_name: decoded.identity.last_name,
        email: decoded.identity.email,
        id: decoded.identity.id
      })
    }
    catch(error){}
  }

  render() {

    const nonLoggedIn = (
      <div id="landing">
      <div className="container">

        <div className="row">
          <div className="col-sm-12 mx-auto">
            <h1 className="text-center" style={welcome}>Welcome to BiteBody.xyz!</h1>
            <hr/>
            <p><center>Our web application is intended to make exercising easy to do and highly accessible!</center></p>
            <br/>
          </div>
        </div>


        <div className="row">
          <div className="col-sm-1 mx-auto">
            <br/>
          </div>

          <div className="col-sm-4 mx-auto">

            <center><img src={screenshot} alt="Bitebody Iphone" height="500px"></img></center>

          </div>
          <div className="col-sm-4 mx-auto">
            <center><img src={screenshot_ipad} alt="Bitebody Ipad" height="500px"></img></center>

          </div>

          <div className="col-sm-2 mx-auto">
            <br/>
          </div>
        </div>

      </div>
    </div>
    )

    const loggedIn = (
      <div id="landing">
        <div className="row">
          <div className="col-sm-12 mx-auto">
            <h1 className="text-center" style={welcome}>{this.state.first_name}, welcome to BiteBody.xyz!</h1>
            <hr/>
            <p><center>Listed below are all the features we offer to our members. :)</center></p>
            <br/>
          </div>
        </div>
        <Carousel/>
      </div>
    )

    return (
      <>
      {localStorage.usertoken ? loggedIn : nonLoggedIn}
      </>
    )
  }
}

export default Landing