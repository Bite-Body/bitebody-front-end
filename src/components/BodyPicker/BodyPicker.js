import React, { Component } from 'react'
import body from '../../static/images/Body.png'
class BodyPicker extends Component {
  
  componentDidMount() {
    document.title = "BodyPicker"
  }
  render() {
    return (
        <div className="container">
        <br/><br/>
        <div class = "centering" data-analytics-section = "Center">
          <div class = "block center">
            <h1 class = "h1"><center>BodyPicker</center></h1>
            <hr></hr>
            <p>
            <center>Our application's body picker features is currently being worked on. </center>
            </p>
            
          </div>
        </div>
        
        
       

        <br/><br/><br/>
      </div>
    )
  }
}

export default BodyPicker