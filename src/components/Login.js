import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay'
import { login } from './UserFunctions'
import {Link} from 'react-router-dom';

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
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
      username: this.state.username,
      password: this.state.password
    }

    login(user).then(res => {
      console.log(res)
      if (res.Allow === "yes") {
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
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="username">username </label>
                <input
                  type="username"
                  className="form-control"
                  name="username"
                  placeholder="Enter username"
                  value={this.state.username}
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
}

export default Login
