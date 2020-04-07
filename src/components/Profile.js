import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import '../static/css/Profile.css'
import david from '../static/images/rsz_Dave.jpg'


class Profile extends Component {
  constructor() {
    super()
    this.state = {
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
                            <img src={david} alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                            <h5>
                                {this.state.username}
                            </h5>
                            <h6>
                                Collaborator
                            </h6>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
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