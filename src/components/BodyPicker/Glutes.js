import React, { Component } from 'react'

class Glutes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }


  async componentDidMount() {
    document.title = "Bitebody - BodyPicker - Glutes"

    const response = await fetch('https://gentle-inlet-25364.herokuapp.com/workouts/Glutes');
    const data = await response.json();
    this.setState({data: data['workouts']})
    console.log(this.state);
  }

  render() {
    const { data } = this.state;
    return (

      <div className="container">
      <h1><center>Pick Your Body Part - Glutes</center></h1>

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

export default Glutes