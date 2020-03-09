import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay'
import {Link} from 'react-router-dom';

class ForgotPassword extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      errors: '',
      loading: false
    }
    

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) { //EDIT EVENT HANDLER TO activate email api 
    this.setState({loading: true })

    e.preventDefault()

    const user = {
      email: this.state.email
    }

  }

  render() {

    return (
      <>
      <LoadingOverlay
      active={this.state.loading}
      spinner
      text='Sending email confirmation'
      >
      <div className="container">
          
        
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">

            <p style={{color: 'red'}}>{this.state.errors}</p>

            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Enter Account's associated Email Address</h1>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
          


              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Reset my password
              </button>
            </form>
          </div>
        </div>
        <br/>
        <br/>
        <br/>

        
      </div>
      </LoadingOverlay>
      </>
    )
  }
}

export default ForgotPassword
