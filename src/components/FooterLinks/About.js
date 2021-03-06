import React, { Component } from 'react'

class About extends Component {
  
  componentDidMount() {
    document.title = "Bitebody - About"
  }

  render() {
    return (

        <div className="container">
          <br/><br/>
          <div class = "centering" data-analytics-section = "Center">
            <div class = "block center">
              <h1 class = "h1"><center>About us</center></h1>
              <hr></hr>
              <p>
              <center>Our application, BiteBody, aims to provide an interactive, all encompassing 
                Fitness Lifestyle site that provides users with various options other sites may lack. The site itself was created by
                a group of 4 computer science students attending California State University Long Beach.
                Our team consists of Bryan Rojas, David Ibarra, Hector Mendoza, and 
                Malik Coleman. This site is still in development, and we hope to see some great improvement
                coming in the near future. Thanks for checking out our about us! We hope you stick around to
                see our website progress! </center>
              </p>
              
            </div>
          </div>
          
          
         

          <br/><br/><br/>
        </div>

    )
  }
}

export default About