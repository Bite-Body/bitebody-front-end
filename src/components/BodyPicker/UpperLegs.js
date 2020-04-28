import React, { Component } from 'react'
import Card from './Card'

class UpperLegs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }


  async componentDidMount() {
    document.title = "Bitebody - BodyPicker - UpperLegs"

    const response = await fetch('https://gentle-inlet-25364.herokuapp.com/workouts/Upper%20legs');
    const data = await response.json();
    this.setState({data: data['workouts']})
    console.log(this.state);
  }

  render() {
    const { data } = this.state;
    return (

      <div className="container">
      <h1><center>Pick Your Body Part - UpperLegs</center></h1>

      <br/>
          <div className="row">
            
            {data.map(data =>
            <div style={{marginLeft: '1em'}}>
              <Card name={data.workout_name}
              imgsrc= "https://bryanimages.s3.amazonaws.com/fitness.jpg"
              title = {data.workout_name}
              text = {data.exercise_steps} 
              muscle = {data.main_muscle_group}/>
            </div>
            )}
          </div>

    </div>

    )
  }
}

export default UpperLegs