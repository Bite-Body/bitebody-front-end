import React, { Component } from 'react'
import Card from './Card'

class Abs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }


  async componentDidMount() {
    document.title = "Bitebody - BodyPicker - Abs";
    // GET request using fetch with async/await
    const response = await fetch('https://gentle-inlet-25364.herokuapp.com/workouts/abs');
    const data = await response.json();
    this.setState({data: data['workouts']})
    console.log(this.state);
  }

  render() {
    const { data } = this.state;

    return (

        <div className="container">
          <br/>
          <h1><center>Pick Your Body Part - Abs</center></h1>
          <br/>
          <div className="row">
            
            {data.map(data =>
            <div style={{marginLeft: '1em'}}>
              <Card name={data.workout_name}
              imgsrc= {data.image_path}
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

export default Abs