import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay'
import { register } from './UserFunctions'
import FourOhFour from './404'
import { post_log } from './Logger/Logger'


class Register extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
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
    this.setState({loading: true})


    let action = 'Register ' + this.state.email
    if(this.state.email === ""){action = 'Register for NULL USER'}
    post_log(action)

    e.preventDefault()

    const newUser = {
      username: this.state.username,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    }

    let valid = true

    if(this.state.username === ''){
      this.setState({errors: 'Username field is missing.\n'})
      valid = false
    }

    if(this.state.first_name === ''){
      this.setState({errors: 'First name field is missing.\n'})
      valid = false
    }

    if(this.state.last_name === ''){
      this.setState({errors: 'Last name field is missing.'})
      valid = false
    }

    if(this.state.email === ''){
      this.setState({errors: 'Email field is missing.'})
      valid = false
    }

    if(this.state.password === ''){
      this.setState({errors: 'Password field is missing.'})
      valid = false
    }

    if(valid){
      register(newUser).then(res => {
        try {
          console.log(res)
          if (res.code === 201) {
            this.props.history.push('/login')
          }
          else{
            this.props.history.push('/register')
            this.setState({errors: res.Error})
            this.setState({loading: false })
          }
        }
        catch(error) {
          console.log(error)
          this.props.history.push('/register')
          this.setState({loading: false })
        }
      })
    }
    else{
      this.props.history.push('/register')
      this.setState({loading: false })
    }
  }

  componentDidMount() {
    document.title = "Bitebody - Register"
  }

  render() {
    if(!(localStorage.usertoken)){
      return (
      <>
      <LoadingOverlay
      active={this.state.loading}
      spinner
      text='Signing up...'
      >
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">

            <p style={{color: 'red'}}>{this.state.errors}</p>

            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Register</h1>
              <div className="form-group">
                <label htmlFor="name">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Enter your desired username"
                  value={this.state.username}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your last name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
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
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button>
            </form>
          </div>
        </div>
        <br/>
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

export default Register
