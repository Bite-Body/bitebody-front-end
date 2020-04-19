import React, { Component } from 'react'
import LoadingOverlay from 'react-loading-overlay'
import { resetPass } from './UserFunctions'
import FourOhFour from './404'
import { post_log } from './Logger/Logger'

class RegisterKey extends Component {
  constructor() {
    super()
    this.state = {
      RegKey: '',
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

    // let action = 'Reset Password for ' + this.state.email
    // if(this.state.email === ""){action = 'Reset Password for NULL USER'}
    // post_log(action)

    e.preventDefault()

    const registeringUser = {
      reg_key: this.state.RegKey
    }

    registerKey(registeringUser).then(res => {
      console.log(res)
      if(res.Allow ==="yes")
      {
        this.props.history.push('/login')
      }
      else if(res.Allow === "No")
      {
        this.props.history.push('/finalize-registration')
        this.setState({errors: res.Error})
        this.setState({loading: false })
      }
      else
      {
        this.props.history.push('/finalize-registration')
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
        text='Finalizing Registration'
        >
        <div className="container">
            
          
          <div className="row">
            <div className="col-md-6 mt-5 mx-auto">

              <p style={{color: 'red'}}>{this.state.errors}</p>

              <form noValidate onSubmit={this.onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Finalize Account Registration</h1>
                <div className="form-group">
                  <label htmlFor="reg_key">Register Key</label>
                  <input
                    type="reg_key"
                    className="form-control"
                    name="reg_key"
                    placeholder="Register Key"
                    value={this.state.RegKey}
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

export default RegisterKey
