import React, { Component } from 'react'
import axios from 'axios'
import LoadingOverlay from 'react-loading-overlay'
import Results from './Results'

class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      errors: '',
      age: '',
      gender: 'Male',
      activity: 'None',
      goal: 'Lose',
      height: '',
      weight: '',
      loading: false,
      results: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    this.setState({loading: true})

    e.preventDefault()

    try{
      const payload = {
        "age": parseInt(this.state.age),
        "gender": this.state.gender.toLowerCase(),
        "weight": parseInt(this.state.weight),
        "height": parseInt(this.state.height),
        "activity": this.state.activity.toLowerCase(),
        "goal": this.state.goal.toLowerCase()
      }

      let valid = true

      if(parseInt(this.state.age) > 122 | parseInt(this.state.age) < 4){
        this.setState({ errors: 'Age is too low or too high.' })
        valid = false
      }

      if(parseInt(this.state.height) > 108 | parseInt(this.state.height) < 12){
        this.setState({ errors: 'Height is too low or too high.' })
        valid = false
      }

      if(parseInt(this.state.weight) > 1500 | parseInt(this.state.weight) < 1){
        this.setState({ errors: 'Weight is too low or too high.' })
        valid = false
      }

      if(this.state.age === '' | this.state.height === '' | this.state.weight === ''){
        this.setState({ errors: 'Empty fields.' })
        valid = false
      }


      if(valid){
        axios.post('calories', payload)
        .then(response => {
          //this.setState({ results: JSON.stringify(response.data)})
          console.log(response.data)
          if("Error" in response.data){
            this.setState({ results: ''})
            this.setState({ errors: 'Whoops, looks like you entered invalid data. Try again.' })
          }
          else{
            this.setState({ results: response.data['Daily calorie to consume'] })
            this.setState({ errors: '' })
          }
        })
        .catch(err => {
          this.setState({ errors: 'Whoops, looks like our API is currently failing... Contact admin: bryanrojascs@gmail.com' })
        })
      }
    }
    catch(error){
      this.setState({errors: 'Something went horribly wrong. Why\'d you break my site? :('})
    }

    this.setState({loading: false})
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
        <Results calories={this.state.results}/>
      </>
    )

    return (
      <>
      <LoadingOverlay
      active={this.state.loading}
      spinner
      text='Calculating calories needed...'
      >
      <div id="landing">
        <div className="container">

        <div className="row">
            <div className="col-sm-1">
            </div>

            <div className="col-sm-10">
                <div className="card"  style={{width: '100%'}}>
                <div className="card-header">
                    <h3 style={{fontSize: '1.2em'}}>Calorie Calculator</h3>
                </div>
                <div className="card-body">

                {this.state.errors === '' ? null : errors}

                    <form onSubmit={this.onSubmit}>

                    <center>
                    <div className="form-group">

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label htmlFor="exampleFormControlSelect1">Age</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <input type="text" className="form-control" name="age" id="formGroupExampleInput" placeholder="Please enter your age." value={this.state.age} onChange={this.onChange} />
                      </div>
                    </div>

                    <br/>
                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label htmlFor="exampleFormControlSelect1">Gender</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <select className="form-control" id="exampleFormControlSelect1" name="gender" value={this.state.gender} onChange={this.onChange}>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>

                    <br/>

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label htmlFor="exampleFormControlSelect1">Activity Level</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <select className="form-control" id="exampleFormControlSelect1" name="activity" value={this.state.activity} onChange={this.onChange}>
                          <option>None</option>
                          <option>Light</option>
                          <option>Moderate</option>
                          <option>High</option>
                        </select>
                      </div>
                    </div>

                    <br/>
                    
                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label htmlFor="exampleFormControlSelect1">Goal</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <select className="form-control" id="exampleFormControlSelect1" name="goal" value={this.state.goal} onChange={this.onChange}>
                          <option>Lose</option>
                          <option>Maintain</option>
                          <option>Gain</option>
                        </select>
                      </div>
                    </div>

                    <br/>

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label htmlFor="exampleFormControlSelect1">Height</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Please enter your height in inches." name="height" value={this.state.height} onChange={this.onChange}/>
                      </div>
                    </div>

                    <br/>

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label htmlFor="exampleFormControlSelect1">Weight</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Please enter your weight.(LB)" name="weight" value={this.state.weight} onChange={this.onChange}/>
                      </div>
                    </div>

                    <br/>

                    </div>
                      <button type="submit" className="btn btn-primary"> <span role="img" aria-label="rice ball">🍙</span> Generate Calories!</button>
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
      </LoadingOverlay>
      </>
    )
  }
}

export default Calculator