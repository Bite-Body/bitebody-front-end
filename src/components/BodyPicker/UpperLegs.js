import React, { Component } from 'react'

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

export default UpperLegs