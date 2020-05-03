import React, { Component } from 'react'
import "../../static/css/Calendar.css"
import Card from './Card'

class WorkoutPlans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }


    async componentDidMount() {
        document.title = "Bitebody - Curated Workouts";
        // GET request using fetch with async/await
        const response = await fetch('http://api.bitebody.xyz/curated_workout/all');
        const data = await response.json();
        this.setState({data: data['curated_workouts']})
        console.log(this.state);
    }
     
    render() {
        const { data } = this.state;

      return (
        <>
        <div className="container">
          <h1><center>Curated Workouts</center></h1>

          <br/>
          <div className="row">
            
            {data.map(data =>
            <div style={{marginLeft: '1em'}}>
              <Card
              imgsrc = {data.image}
              name = {data.name}
              level = {data.level}
              goal = {data.goal}
              type = {data.workout_type} 
              time = {data.time_per_workout}
              pdf = {data.workout_pdf}
              />
            </div>
            )}
          </div>

        </div>
        </>
      )
    }
  }
  
  export default WorkoutPlans