import React, { Component } from 'react'
import "../../static/css/Calendar.css"
import Card from '../WorkoutPlans/Card'

class WeightLoss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }


    async componentDidMount() {
        document.title = "Bitebody - Weight Loss";
        // GET request using fetch with async/await
        const response = await fetch('https://gentle-inlet-25364.herokuapp.com/weight_loss/all');
        const data = await response.json();
        this.setState({data: data['Weight_Loss']})
        console.log(this.state);
    }
     
    render() {
        const { data } = this.state;

      return (
        <>
        <div className="container">
          <h1><center>Weight Loss</center></h1>

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
  
  export default WeightLoss