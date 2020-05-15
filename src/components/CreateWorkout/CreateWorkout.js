import React, { Component } from 'react'
import axios from 'axios'

class WorkoutPlans extends Component {
  constructor() {
    super()
    this.state = {
      detailed_muscle_group: '',
      difficulty: 'Beginner',
      equipment: '',
      excercise_steps: '',
      id: '',
      image_path: '',
      main_muscle_group: 'Abs',
      mechanics: 'N/A',
      other_muscle_groups: '',
      type: 'Cardio',
      workout_name: '',
      loading: false
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  onSubmit(e) {
    this.setState({loading: true })

    e.preventDefault()

    let payload = {
      "detailed_muscle_group": "",
      "difficulty": this.state.difficulty,
      "equipment": this.state.equipment,
      "excercise_steps": this.state.excercise_steps,
      "id": "0",
      "image_path": "https://bryanimages.s3.amazonaws.com/fitness.jpg",
      "main_muscle_group": this.state.main_muscle_group,
      "mechanics": this.state.mechanics,
      "other_muscle_groups": "",
      "type": this.state.type,
      "workout_name": this.state.workout_name
    }

    console.log(payload)

    e.preventDefault()

    axios.post('workouts', payload)
    .then(response => {
      console.log(JSON.stringify(response.data))
      this.setState({loading: false })
    })
    .catch(err => {
      console.log(err)
      this.setState({loading: false })
    })

  }

    render() {
      return (
        <div id="landing">
        <div className="container">

        <div className="row">
            <div className="col-sm-1">
            </div>

            <div className="col-sm-10">
                <div className="card"  style={{width: '100%'}}>
                <div className="card-header">
                    <h3 style={{fontSize: '1.2em'}}>Workout Creator</h3>
                </div>
                <div className="card-body">

                

                    <form onSubmit={this.onSubmit}>

                    <center>
                    <div className="form-group">

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Workout Name</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <input type="text" name="workout_name" value={this.state.workout_name} onChange={this.onChange} class="form-control" id="formGroupExampleInput" placeholder="Name of your workout"/>
                      </div>
                    </div>

                    <br/>
                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Main Body Part</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <select className="form-control" id="exampleFormControlSelect1" name="main_muscle_group" value={this.state.main_muscle_group} onChange={this.onChange}>
                          <option>Abs</option>
                          <option>Biceps</option>
                          <option>Triceps</option>
                          <option>Calves</option>
                          <option>Glutes</option>
                          <option>Upper Back</option>
                          <option>Lower Back</option>
                          <option>Chest</option>
                          <option>Forearm</option>
                        </select>
                      </div>
                    </div>

                    <br/>

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Difficulty</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <select className="form-control" id="exampleFormControlSelect1" name="difficulty" value={this.state.difficulty} onChange={this.onChange}>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Expert</option>
                        </select>
                      </div>
                    </div>

                    <br/>

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Type</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <select className="form-control" id="exampleFormControlSelect1" name="type" value={this.state.type} onChange={this.onChange}>
                          <option>Cardio</option>
                          <option>Strength</option>
                          <option>Stretching</option>
                          <option>Power Lifting</option>
                          <option>Olympic Weight Lifting</option>
                        </select>
                      </div>
                    </div>

                    <br/>

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Mechanics</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <select className="form-control" id="exampleFormControlSelect1" name="mechanics" value={this.state.mechanics} onChange={this.onChange}>
                          <option>N/A</option>
                          <option>Isolation</option>
                          <option>Compound</option>
                        </select>
                      </div>
                    </div>

                    <br/>

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Equipment</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <input type="text" name="equipment" value={this.state.equipment} onChange={this.onChange} class="form-control" id="formGroupExampleInput" placeholder="Equipment needed for workout"/>
                      </div>
                    </div>

                    <br/>

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Exercise Steps</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <textarea type="text" name="excercise_steps" value={this.state.excercise_steps} onChange={this.onChange} class="form-control" id="formGroupExampleInput" placeholder="Equipment needed for workout"/>
                      </div>
                    </div>

                    </div>
                      <button type="submit" className="btn btn-primary"> <span role="img" aria-label="muscle">💪🏽</span> Generate Workout!</button>
                    </center>
               
                    </form>

                </div>
                </div>
            </div>

            <div className="col-sm-1">
            
            </div>

          </div>

        </div>
      </div>
      )
    }
  }
  
  export default WorkoutPlans