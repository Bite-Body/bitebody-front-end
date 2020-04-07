import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay'
import { resetPass } from './UserFunctions'
import FourOhFour from './404'
import { post_log } from './Logger/Logger'

class ResetPassword extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      confirmed_password: '',
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

    let action = 'Reset Password for ' + this.state.email
    if(this.state.email === ""){action = 'Reset Password for NULL USER'}
    post_log(action)

    e.preventDefault()

    const resetUser = {
      email: this.state.email,
      password: this.state.password,
      confirmed_password: this.state.confirmed_password,
      reset_key: this.state.reset_key
    }

    resetPass(resetUser).then(res => {
      console.log(res)
      if(res.Allow ==="yes")
      {
        this.props.history.push('/pass-reset-success')
      }
      else if(res.Allow === "No")
      {
        this.props.history.push('/reset-password')
        this.setState({errors: res.Error})
        this.setState({loading: false })
      }
      else
      {
        this.props.history.push('/reset-password')
        this.setState({errors: res.Error})
        this.setState({loading: false })
      }
    })

  }

  render() {
    if(!(localStorage.usertoken))
    {
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
                <h1 className="h3 mb-3 font-weight-normal">Enter New Credentials </h1>
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
                <div className="form-group">
                  <label htmlFor="reset_key">reset key</label>
                  <input
                    type="reset_key"
                    className="form-control"
                    name="reset_key"
                    placeholder="Enter reset key"
                    value={this.state.reset_key}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmed_password">Confirm New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmed_password"
                    placeholder="Enter Password Again"
                    value={this.state.confirmed_password}
                    onChange={this.onChange}
                  />
                </div>
            


                <button
                  type="submit"
                  className="btn btn-lg btn-primary btn-block"
                >
                  Change Password
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
    else{
      return(
        <>
          <FourOhFour/>
        </>
      )
    }
  }
}

export default ResetPassword
