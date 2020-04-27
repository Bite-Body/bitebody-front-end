import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay'


class CR extends Component {
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
                <h1 className="h3 mb-3 font-weight-normal">Thank You for making an account! </h1> 
                <br/>
                <p>
                <font size = "2" face = "arial">
                </font>
                To activate and continue within the website please check your email and follow the directions enclosed.
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
  }

export default CR
