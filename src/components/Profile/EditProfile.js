import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
class EditProfile extends Component {
  constructor() {
    super()
    this.state = {
      display_name: '',
      title: '',
      age: '',
      bio: '',
      gender: '',
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      id: '',
      loading: false
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    const token = localStorage.usertoken
    try{
      const decoded = jwt_decode(token)
      this.setState({
        first_name: decoded.identity.first_name,
        last_name: decoded.identity.last_name,
        email: decoded.identity.email,
        id: decoded.identity.id,
        username: decoded.identity.username
      })
    }
    catch(error){}

    document.title = "Bitebody - Edit Profile"
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state)
  }

  onSubmit(e) {
    this.setState({loading: true })

    e.preventDefault()

    let payload = {
      "id": this.state.id,
      "nickname": this.state.display_name,
      "title": this.state.title,
      "age": this.state.age,
      "bio": this.state.bio,
      "gender": this.state.gender,
    }

    console.log(payload)

    e.preventDefault()

    axios.post('profile', payload)
    .then(response => {
      console.log(JSON.stringify(response.data))
      this.setState({loading: false })
    })
    .catch(err => {
      console.log(err)
      this.setState({loading: false })
    })

  }


    render() {
      return (
        <div id="landing">
        <div className="container">

        <div className="row">
            <div className="col-sm-1">
            </div>

            <div className="col-sm-10">
                <div className="card"  style={{width: '100%'}}>
                <div className="card-header">
                    <h3 style={{fontSize: '1.2em'}}>Edit Profile</h3>
                </div>
                <div className="card-body">

                    <form onSubmit={this.onSubmit}>
                    <center>
                    <div className="form-group" style={{marginLeft: '10px'}}>

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Display Name</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <input name="display_name" value={this.state.display_name} onChange={this.onChange} type="text" class="form-control" id="formGroupExampleInput" placeholder="Please enter the desired display name"/>
                      </div>
                    </div>

                    <br/>
                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Title</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <input name="title" value={this.state.title} onChange={this.onChange} type="text" class="form-control" id="formGroupExampleInput" placeholder="Please enter your desired title"/>
                      </div>
                    </div>

                    <br/>

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Age</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <input name="age" value={this.state.age} onChange={this.onChange} type="text" class="form-control" id="formGroupExampleInput" placeholder="How young are you?"/>
                      </div>
                    </div>

                    <br/>

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Bio</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <textarea name="bio" value={this.state.bio} onChange={this.onChange} type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter whatever describes you. ^-^ ~ teehee <3 uwu"/>
                      </div>
                    </div>

                    <br/>

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Gender</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <textarea name="gender" value={this.state.gender} onChange={this.onChange} type="text" class="form-control" id="formGroupExampleInput" placeholder="Whatever describes you!"/>
                      </div>
                    </div>

                    <br/>
                    <br/>
                    </div>
                        <button type="submit" className="btn btn-primary"> <span role="img" aria-label="person">👤</span> Update Profile</button>
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
  
  export default EditProfile