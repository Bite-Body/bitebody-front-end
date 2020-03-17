import React, { Component } from 'react'
import axios from 'axios'
import Results from './Results'

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://2o8jsg6z03.execute-api.us-west-1.amazonaws.com/default/'

class MealPlanner extends Component {
  constructor() {
    super()
    this.state = {
      diet_type: 'Any',
      calories: '',
      errors: '',
      results: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  onSubmit(e) {
    if(this.state.error !== ''){
      this.setState({ errors: '' })
    }

    let current_calories = parseInt(this.state.calories)

    if(this.state.calories === ''){
      this.setState({ errors: 'Empty fields.' })
    }
    else if(current_calories < 800 | current_calories > 5200){
      this.setState({ errors: 'Invalid amount of calories, please choose a value between 800 to 5200 calories.' })
    }

    let payload = {}
    payload['request'] = {}
    payload['request']['diet-type'] = this.state.diet_type
    payload['request']['calories'] = this.state.calories

    e.preventDefault()

    axios.post('mealplanner', payload)
    .then(response => {
      this.setState({ results: JSON.stringify(response.data)})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    const errors = (
      <>
        <div className="alert alert-danger" style={{marginLeft: '1em', marginRight: '1em'}} role="alert">
          <strong>Errors:</strong><br/>
            <ul>
              <li>{this.state.errors}</li>
            </ul>
        </div>
      </>
    )
    
    const results = (
      <>
        <Results diet={this.state.diet_type} calories={this.state.calories} results={this.state.results}/>
      </>
    )

    const gen_meal_planner = (
      <button type="submit" className="btn btn-primary"> <span role="img" aria-label="sandwich">🥪</span> Generate Meal Plan</button>
    )

    const regen_meal_planner = (
      <button type="submit" className="btn btn-primary"> <span role="img" aria-label="redo">🔁</span> Regenerate Meal Plan</button>
    )

    return (
      <div id="landing">
        <div className="container">

        <div className="row">
            <div className="col-sm-1">
            </div>

            <div className="col-sm-10">
                <div className="card"  style={{width: '100%'}}>
                <div className="card-header">
                    <h3 style={{fontSize: '1.2em'}}>Meal Planner</h3>
                </div>
                <div className="card-body">

                {this.state.errors === '' ? null : errors}

                    <form onSubmit={this.onSubmit}>

                      <center>
                      <div className="form-group">

                      <div className="row">
                        <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                          <label for="exampleFormControlSelect1">Diet Type</label>
                        </div>
                        <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                          <select className="form-control" id="exampleFormControlSelect1" name="diet_type" value={this.state.diet_type} onChange={this.onChange}>
                            <option>Any</option>
                            <option>Vegan</option>
                            <option>Vegetarian</option>
                            <option>Paleo</option>
                            <option>Ketogenic</option>
                          </select>
                        </div>
                      </div>

                      <br/>

                      <div className="row">
                        <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                          <label for="exampleFormControlSelect1">Calories</label>
                        </div>
                        <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                          <input type="text" name="calories" value={this.state.calories} onChange={this.onChange} class="form-control" id="formGroupExampleInput" placeholder="Amount of calories desired. (800-5200)"/>
                        </div>
                      </div>

                      <br/>

                      </div>

                        {this.state.results === '' ? gen_meal_planner : regen_meal_planner}

                      </center>
               
                    </form>

                </div>
                </div>
            </div>

            <div className="col-sm-1">
            
            </div>

          </div>


        
        <br/>
        {this.state.results === '' ? null : results}

        </div>
      </div>
    )
  }
}

export default MealPlanner