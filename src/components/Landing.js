import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import '../static/css/Landing.css'
import screenshot from '../static/images/iphone_scr.png'

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
    return (
      <div id="landing">
        <div className="container">

          <div className="row">
            <div className="col-sm-12 mx-auto">
              <h1 className="text-center" style={welcome}>Welcome {this.state.first_name} to BiteBody.xyz!</h1>
              <hr/>
              <p><center>Our web application is intended to make exercising easy to do and highly accessible!</center></p>
              <br/>
            </div>
          </div>


          <div className="row">
            <div className="col-sm-2 mx-auto">
              <br/>
            </div>

            <div className="col-sm-4 mx-auto">

              <center><img src={screenshot} alt="Bitebody Iphone" height="500px"></img></center>

            </div>
            <div className="col-sm-4 mx-auto">
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <center><p><h3>Our application is accessible on mobile view as well!</h3></p></center>

            </div>

            <div className="col-sm-2 mx-auto">
              <br/>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Landing