import React, { Component } from 'react'
import Card from './Card'

class Triceps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }


  async componentDidMount() {
    document.title = "Bitebody - BodyPicker - Triceps"

    const response = await fetch('https://gentle-inlet-25364.herokuapp.com/workouts/Triceps');
    const data = await response.json();
    this.setState({data: data['workouts']})
    console.log(this.state);
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
      <br/>
      <h1><center>Pick Your Body Part - Triceps</center></h1>
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

export default Triceps