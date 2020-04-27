import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay'
import FourOhFour from './404'
class ForgotPassword extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      confirmed_password: '',
      errors: '',
      loading: false
    }
  }


  render() {
    if(!(localStorage.usertoken)){
      return (
        <>
        <LoadingOverlay
        active={this.state.loading}
        spinner
        text='Resetting Password'
        >
        <div className="container">
            
          
          <div className="row">
            <div className="col-md-6 mt-5 mx-auto">

              <p style={{color: 'red'}}>{this.state.errors}</p>

              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Email unable to be sent.</h1>
                <br/>
                <p>
                <font size = "2" face = "arial">
                </font>
                Please go back to Forgot Password Page and try again.
                </p>
            
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
    else{
      return(
        <>
          <FourOhFour/>
        </>)
    }
  }
}

export default ForgotPassword
