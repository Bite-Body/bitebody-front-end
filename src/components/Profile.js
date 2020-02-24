import React, { Component } from 'react'



class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }
 

  imageStyling = {
    border: '2px solid black'
  }

  render() {
    return (
      <div className="container">
       <br/>
       <br/>
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Bryanrojacs's Profile</h1>
          </div>

          

          <br/>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Bryan</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Rojas</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Bryanrojacs@gmail.com</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
       
      </div>
    )
  }
}

export default Profile