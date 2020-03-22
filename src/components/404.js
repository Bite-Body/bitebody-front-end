import React, { Component } from 'react'
import FourOhFourImage from '../static/images/404.png'

class FourOhFour extends Component {
  
  componentDidMount() {
    document.title = "404"
  }
  render() {
    return (
      <div className="container">
        <div style= {{marginTop: '2em', marginBottom: '2em'}} className="d-flex justify-content-center align-items-center" id="main">
            <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">404</h1>
            <div className="inline-block align-middle">
              <h2 className="font-weight-normal lead" id="desc">The page you requested was not found.</h2>
            </div>
        </div>
        <div className="row">
          <div className="col-12">
            <center><img className="img-fluid" src={FourOhFourImage} alt="404 error"></img></center>
          </div>
        </div>
      </div>
    )
  }
}

export default FourOhFour