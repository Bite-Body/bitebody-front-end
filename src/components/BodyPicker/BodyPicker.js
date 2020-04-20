import React, { Component } from 'react'
import '../../static/css/BodyPicker.css'

class BodyPicker extends Component {
  
  componentDidMount() {
    document.title = "BodyPicker"
  }
  
  render() {
    const whiteText = {
      color: '#fff'
    }

    return (
      <>
      <h1><center>Pick Yo Body Part</center></h1>
      <div className="container">
        <div className="row">

          <div className="col-md-12">
            <center>
              <div id="bodypartTable2">
                <ul class="buttonTableLeft">
                    <li><a class="exerciseblueButton" style={whiteText} href="/body-picker/triceps">Triceps</a></li>
                    <li id="exercisebiceps"><a class="exerciseblueButton" style={whiteText} href="/body-picker/biceps">Biceps</a></li>
                    <li id="exerciseback"><a class="exerciseblueButton" style={whiteText} href="/body-picker/back">Back</a></li>
                    <li id="exerciseglutes"><a class="exerciseblueButton" style={whiteText} href="/body-picker/glutes">Glutes</a></li>
                    <li id="exerciselowerlegs"><a class="exerciseblueButton" style={whiteText} href="/body-picker/lower-legs">Lower Legs</a></li>
                </ul>
                <ul class="buttonTableMiddle">
                    <li id="exercisecardio"><a class="exerciseblueButton" style={whiteText} href="/body-picker/cardio">Cardio</a></li>
                    <li id="exerciseall"><a class="exerciseblueButton" style={whiteText} href="/body-picker/all">View All Exercises</a></li>
                </ul>
                <ul class="buttonTableRight">
                    <li id="exerciseshoulders"><a class="exerciseblueButton" style={whiteText} href="/body-picker/shoulders">Shoulders</a></li>
                    <li id="exercisechest"><a class="exerciseblueButton" style={whiteText} href="/body-picker/chest">Chest</a></li>
                    <li id="exerciseforearms"><a class="exerciseblueButton" style={whiteText} href="/body-picker/forearms">Forearms</a></li>
                    <li id="exerciseabs"><a class="exerciseblueButton" style={whiteText} href="/body-picker/abs">Abs</a></li>
                    <li id="exerciseupperlegs"><a class="exerciseblueButton" style={whiteText} href="/body-picker/upper-legs">Upper Legs</a></li>
                </ul>
              </div>
            </center>
          </div>


        </div>
      </div>
      </>
    )
  }
}

export default BodyPicker