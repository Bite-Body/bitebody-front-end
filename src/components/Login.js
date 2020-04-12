import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay'
import { login } from './UserFunctions'
import {Link} from 'react-router-dom'
import FourOhFour from './404'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: '',
      loading: false
    }
    

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    this.setState({loading: true })

    e.preventDefault()

    const user = {
      email_or_user: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (res.Allow !== "no") {
        this.props.history.push('/')
      }
      else{
        this.props.history.push('/login')
        this.setState({errors: res.Error})
        this.setState({loading: false })
      }
    })
  }

  render() {

    if(!(localStorage.usertoken)){
      return (
      <>
      <LoadingOverlay
      active={this.state.loading}
      spinner
      text='Signing in...'
      >
      <div className="container">
          
        
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">

            <p style={{color: 'red'}}>{this.state.errors}</p>

            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
              <div className="form-group">
                <label htmlFor="email">Email Address or Username</label>
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
          
                <Link to="/forgot-password" style = {{textalign:'center'}}>
                I forgot my password :(
                </Link>
              <br/>
              <br/>


              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Sign in
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

export default Login
