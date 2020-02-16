import React, { Component } from 'react'
import bryan from '../../static/images/bryan.png'
import david from '../../static/images/david.png'
import BBLogo from '../../static/images/BiteBody_Logo.png'
import malik from '../../static/images/malik.jpg'
import hector from '../../static/images/hector.png'


import Card from '../Cards/CardUi'

class Team extends Component {

  render() {
    return (
    <div className = "container">
      <br/><br/>
      <h1><center>Meet the team</center></h1>
      
      <br/>
      <hr/>
      <h5>
        <center>Our team was assembled in our CECS 491A class taught by professor Fei Hoffman.
          We are all seniors at California State University Long Beach and this is our website.
          We hope you stick with us as we continue to develop our website!
        </center>

      </h5>
      <hr/>
      
     <div className = "container-fluid d-flex justify-content-center">
          
      <div className = "row justify-content-md-center">
        <div className = "col-lg-4">
        <br/>
          <Card name ="David Ibarra" imgsrc = {david} title = "David Ibarra" 
          text ="Hey my name is David Ibarra, " 
          emailLink = "iDavid9764@gmail.com"/>
        </div>
        
        <div className = "col-lg-4">
        <br/>
          <Card name ="Bryan Rojas" imgsrc = {bryan} title = "Bryan Rojas" 
          text ="Hey my name is Bryan Rojas. Please ask me about how my multiple interviews with Microsoft went!" 
          emailLink = "BryanRojacs@gmail.com"/>
        </div>

        <div className = "col-lg-4">
        <br/>
          <Card imgsrc = {hector} title ="Hector Mendoza" text = "Hey my name is Hector Mendoza, part time coder, full time Yu-Gi-Oh player."
          emailLink = "mendozahector555@gmail.com"/>
        </div>
        
        <div className = "col-lg-4">
        <br/>
          <Card imgsrc = {malik} title = "Malik Coleman" text = "Hey my name is Malik Coleman and I do NOT want to be a rapper when I grow up. Don't believe anything Mr. Nguyen says."
          emailLink = "malikai711@gmail.com"/>
        </div>

        <div className = "col-lg-4">
        <br/>
          <Card imgsrc = {BBLogo} title ="Team Late" text = "Everyone here is a part of the team! We all worked on this site together!"
          emailLink = "BiteBodyXYZ@gmail.com"/>
        
        </div>
        
      </div>

      
      
     </div>
     </div>

        

    )
  }
}

export default Team