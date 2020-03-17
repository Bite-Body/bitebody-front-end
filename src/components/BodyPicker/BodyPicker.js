import React, { Component } from 'react'
import body from '../../static/images/Body.png'

class BodyPicker extends Component {
  
  componentDidMount() {
    document.title = "BodyPicker"
  }
  render() {
    return (
        <html>
        <body>
            
                <h1><center>Pick Yo Body Part</center></h1>
                
                <center><img src = {body} alt = "body"  width = "800" height = "900" useMap = "#bodyimage"></img></center>
                <map name = "bodyimage">
                    <area shape = "rect" coords = "240, 200, 320, 450" alt = "Left Arm" href = "https://www.google.com"/> 
                    <area shape = "rect" coords = "340, 220, 460, 280" alt = "Chest" href = "https://www.google.com"/>  
                    <area shape = "rect" coords = "470, 200, 550, 450" alt = "Right Arm" href = "https://www.google.com"/>  
                    <area shape = "rect" coords = "321, 460, 380, 800" alt = "Left Leg" href = "https://www.google.com"/>    
                    <area shape = "rect" coords = "415, 460, 480, 800" alt = "Right Leg" href = "https://www.google.com"/>  
                    <area shape = "rect" coords = "340, 285, 460, 400" alt = "Abdomen" href = "https://www.google.com"/>                                          
                </map>
                
        </body>
        </html>
        
        
    )
  }
}

export default BodyPicker