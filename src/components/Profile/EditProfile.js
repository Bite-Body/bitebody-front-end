import React, { Component } from 'react'

class EditProfile extends Component {

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
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Please enter the desired display name"/>
                      </div>
                    </div>

                    <br/>
                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">Title</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Please enter the desired title"/>
                      </div>
                    </div>

                    <br/>

                    <div className="row">
                      <div className="col-md-2" style={{marginTop: '0.5em', marginRight: '1em', marginLeft: '1em'}}>
                        <label for="exampleFormControlSelect1">New Email</label>
                      </div>
                      <div className="col-md-8" style={{marginRight: '1em', marginLeft: '1em'}}>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Please enter the new email"/>
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