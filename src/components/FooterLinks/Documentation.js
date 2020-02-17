import React, { Component } from 'react'
//import dd from '../../static/Documents/Design_Documentation.pdf'
import brd from '../../static/Documents/Business_Requirements.pdf'




class Docu extends Component {
  

  render() {
    
    return (
      
        
      
          
        <div className="container">
          
          <br/><br/>
          <h1><center>Documentation</center></h1>
          <hr/>
          <p>
            Welcome to our documentation page. In this page we have all of our technical documents that include
            our ideas, process, planning, and our time spent on the creation of every item in relating to the 
            website. If you wish to view the items, take a look below!
          </p>
          <br/>
          <hr/>
          <h3>Click Below for deliverables.</h3>
          <hr/>
         {//<a href={dd} >IM A BOT</a> <br/>
          } <a href={brd} >Business Requirements Document</a>
          

          

          
          <br/><br/><br/><br/><br/><br/>
        </div>
        
        
        
       
    )
  }
}

export default Docu 