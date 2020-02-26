import React, { Component } from 'react'

class Calculator extends Component {
  constructor() {
    super()
    this.state = {
      diet_type: '',
      calories: '',
      errors: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    console.log(e)
  }

  render() {
    const errors = (
      <>
        <div className="alert alert-danger" role="alert">
          <strong>Errors:</strong><br/>
            <ul>
              <li>Invalid amount, please choose a value between <strong>0</strong> to <strong>1000</strong> calories.</li>
            </ul>
        </div>
      </>
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
                    <h3 style={{fontSize: '1.2em'}}>Calorie Calculator</h3>
                </div>
                <div className="card-body">

                {this.state.errors === '' ? null : errors}

                    <form onSubmit={this.onSubmit}>

                    <center>
                    <div className="form-group">

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Age</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Please enter your age."/>
                      </div>
                    </div>

                    <br/>
                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Gender</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <select className="form-control" id="exampleFormControlSelect1">
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>

                    <br/>

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Activity Level</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <select className="form-control" id="exampleFormControlSelect1">
                          <option>low</option>
                          <option>Average</option>
                          <option>High</option>
                        </select>
                      </div>
                    </div>

                    <br/>
                    
                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Goal</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <select className="form-control" id="exampleFormControlSelect1">
                          <option>lose weight</option>
                          <option>Gain weight</option>
                        </select>
                      </div>
                    </div>

                    <br/>

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Height</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Please enter your height in inches."/>
                      </div>
                    </div>

                    <br/>

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Weight</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Please enter your weight.(LB)"/>
                      </div>
                    </div>

                    <br/>

                    </div>
                      <button type="submit" className="btn btn-primary"> <span role="img" aria-label="sandwich">🥪</span> Generate Calories!</button>
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

export default Calculator