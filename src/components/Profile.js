import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import '../static/css/Profile.css'
import david from '../static/images/rsz_Dave.jpg'
import axios from 'axios'

class Profile extends Component {
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
        errors: {}
    }
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

      let endpoint = 'profile/' + decoded.identity.id

      axios.get(endpoint)
      .then(response => {
        console.log(JSON.stringify(response.data))
        
        this.setState({
            display_name: response.data['profile_data']['nickname'],
            title: response.data['profile_data']['title'],
            age: response.data['profile_data']['age'],
            bio: response.data['profile_data']['bio'],
            gender: response.data['profile_data']['gender']
          })
          
        this.setState({loading: false })
      })
      .catch(err => {
        console.log(err)
        this.setState({loading: false })
      })
    }
    catch(error){}

    document.title = "Bitebody - Profile"
  }
 

  render() {
    return (
      <div id="profile">
      <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={david} alt="" style={{height: '200px', width: '200px'}}/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                            <h3>
                                <strong>
                                {this.state.username} {this.state.display_name ? "(" + this.state.display_name + ")" : null }
                                </strong>
                            </h3>
                            <h6>
                            {this.state.title ? this.state.title : null }
                            </h6>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <a href="/edit-profile" class="profile-edit-btn">Edit Profile
                        </a>
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-10" >
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div class="row">
                                    <div class="col-md-2">
                                        <label id = "user">User ID:</label>
                                    </div>
                                    <div class="col-md-8">
                                        <p>{this.state.id}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label>Name:</label>
                                    </div>
                                    <div class="col-md-8">
                                        <p>{this.state.first_name} {this.state.last_name}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label>Email:</label>
                                    </div>
                                    <div class="col-md-8">
                                        <p>{this.state.email}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label>Age:</label>
                                    </div>
                                    <div class="col-md-8">
                                        <p>{this.state.age ? this.state.age : <>blank</> }</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label>Gender:</label>
                                    </div>
                                    <div class="col-md-8">
                                        <p>{this.state.gender ? this.state.gender : <>blank</> }</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-2">
                                        <label>Bio:</label>
                                    </div>
                                    <div class="col-md-8">
                                        <p>{this.state.bio ? this.state.bio : <>blank</> }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-1"></div>
                </div>
            </form>           
        </div>
        </div>
    )
  }
}

export default Profile