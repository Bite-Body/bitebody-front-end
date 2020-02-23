import React, { Component } from 'react'
import bryan from '../../static/images/BryanBB.png'
import david from '../../static/images/DavidBB.png'
import BBLogo from '../../static/images/BiteBody_Logo_Navbar.png'
import malik from '../../static/images/MalikBB.jpg'
import hector from '../../static/images/HectorBB.png'


import Card from '../Cards/CardUi'

class Team extends Component {
  componentDidMount() {
    document.title = "Bitebody - Team"
  }
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
          text ="Hey my name is David Ibarra, and I've enjoyed my time learning code at CSULB" 
          emailLink = "iDavid9764@gmail.com"/>
        </div>
        
        <div className = "col-lg-4">
        <br/>
          <Card name ="Bryan Rojas" imgsrc = {bryan} title = "Bryan Rojas" 
          text ="Hey my name is Bryan Rojas. I am excited to be leading this team as they learn industry level technologies." 
          emailLink = "BryanRojacs@gmail.com"/>
        </div>

        <div className = "col-lg-4">
        <br/>
          <Card imgsrc = {hector} title ="Hector Mendoza" text = "Hey my name is Hector Mendoza, and I am ecstatic to put my coding skills into practice for our final project."
          emailLink = "mendozahector555@gmail.com"/>
        </div>
        
        <div className = "col-lg-4">
        <br/>
          <Card imgsrc = {malik} title = "Malik Coleman" text = "Hey my name is Malik Coleman and I am looking forward to delivering on our app's vision."
          emailLink = "malikai711@gmail.com"/>
        </div>

        <div className = "col-lg-4">
        <br/>
          <Card imgsrc = {BBLogo} title ="Team Late" text = "Everyone here is a part of the team! We all worked on this site together! This website would not be possible without Fei's instructing, Maik's vision, David's management, Hector's adaptability, and Bryan's leadership. We look forward to continuing this website in the hopes of learning frameworks, tools, languages, best practices, and most important of all: Working together in a team to provide a quality product. "
          emailLink = "BiteBodyXYZ@gmail.com"/>
        
        </div>
        
      </div>

      
      
     </div>
     </div>

        

    )
  }
}

export default Team