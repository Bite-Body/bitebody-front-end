import React, { Component } from 'react'

class Chest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }


  async componentDidMount() {
    document.title = "Bitebody - BodyPicker - Chest"

    const response = await fetch('https://gentle-inlet-25364.herokuapp.com/workouts/Chest');
    const data = await response.json();
    this.setState({data: data['workouts']})
    console.log(this.state);
  }

  render() {
    const { data } = this.state;
    return (

      <div className="container">
      <h1><center>Pick Your Body Part - Chest</center></h1>

      {data.map(data =>
      <>
        <li>
      <strong>{data.workout_name} ({data.main_muscle_group})</strong>: {data.exercise_steps}
        </li>
        <br/>
      </>
      )}

    </div>

    )
  }
}

export default Chest