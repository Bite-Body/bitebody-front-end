import React, { Component } from 'react'

class Features extends Component {
  componentDidMount() {
    document.title = "Bitebody - Features"
  }
  render() {
    return (

        <div className="container">
          <br/><br/>
          <h1><center>Features</center></h1><br/>
          <hr/>
          
          <div id = "faq-list" class ="kj">
            
            <div>
            
            <h4 class ="lj">Account</h4>              
              <ol>
                <li>       
                  <a href = "#Forgot-Password"><u>Login</u></a>
                  </li>

                <li>
                  <a href = "#Compromised-Account"><u>Forgot Password </u></a>
                  </li>

                <li>
                  <a href = "#Forgot-Email"><u>User Profile</u></a>
                  </li>
              
                
              </ol>  
            
            </div>
            
            <div>
            
            <h4 class = "lj">Account Features</h4>
              <ol>
                <li>
                  <a href = "#What-is-BiteBody"><u>User Selection UI body part</u></a>
                  </li>

                <li>
                  <a href = "#Support-Us"><u>Create Workout Routine</u></a>
                  </li>

                <li>
                  <a href = "#Mobile"><u>Educate</u></a>
                  </li>

                <li>
                  <a href = "#Live-Support"><u>Follow friends </u></a>
                  </li>


                <li>
                  < a href = "#Name"><u>Fitness Goals</u></a>
                  </li>

              </ol>
            
            </div>
            <hr></hr>

            <div>
            <h3 class ="lj">Account</h3>
            <hr></hr>
            

              <dl id = "Forgot-Password" data-test-id = "faqEntry">
                <dd>
                  <abbr title = "Question">Login </abbr>
                  <h6><b>Requirments</b></h6>
                  </dd>
                
                <dd>
                  
                  <div>
                  
                  <ol>
                    <li>
                    User must have created account already and be in database
                    </li>
                    <li>
                    Provide user with credentials: username/password
                    </li>
                    <li>
                    User will click on the login button and be taken to the home page logged in
                    </li>
                    
                  </ol>
                  
                  
                  <p>
                    You should now be able to access your account! We're glad you're with us!
                  </p>
                  </div>
                </dd> 
                
                <dd>
                  <a href = "#faq-list"> Return to Top</a>
                </dd> 
                <hr></hr>
              </dl>

              <dl id = "Compromised-Account" data-test-id = "faqEntry">
                  <dd>
                    <abbr title = "Question">Forgot Password</abbr>
                    <h6><b>Regaining Access</b></h6>
                  </dd>

                  <dd>
                    
                    <div>
                    <p>
                    If you are 100% sure your account has been compromised, allow us to help you get your account back. 
                    Use the following steps as a guide in recovering your account: 
                    </p>
                    <ol>
                      <li>
                      Click on forgot password link will prompt to input email into text field.

                      </li>
                      <li>
                      If email is email we have on file then password retrieval steps will be sent to that email. 
                      </li>
                      <li>
                      Otherwise no action will be taken.
                      </li>
                    </ol>
                    <p>
                      Once you have regained access, make sure you use a completely new password! We cannot stress how much we value your privacy.
                    </p>
                    </div>
                  </dd>

                  <dd>
                    <a href = "#faq-list"> Return to Top</a>
                  </dd>
                  <hr></hr>
                </dl>
              
              <dl id = "Forgot-Email" data-test-id = "faqEntry">
                  <dd>
                    <abbr title = "Question">User Profile</abbr>
                    
                  </dd>

                  <dd>
                    
                    <div>
                    <h6><b>Creation</b></h6>
                    <p>
                    Attributes with text fields will be shown. Some will be required, others will be optional. Below is a list of the fields we will have available in User profile page
                    </p>
                    <ol>
                      <li>
                      Profile Picture (optional)

                      </li>
                      <li>
                      Gender (required)
                      </li>
                      <li>
                      Age (required)
                      </li>
                      <li>
                      Bio (optional)
                      </li>
                      
                    </ol>
                    <p>
                      Your profile is now updated.
                    </p>
                    </div>
                  </dd>

                  <dd>
                    <a href = "#faq-list"> Return to Top</a>
                  </dd>
                  <hr></hr>
              </dl>

            </div>

            <div>
            
            <h3 class ="lj">General</h3>
            <hr></hr>
            
            
              <dl id = "What-is-Bitebody" data-test-id = "faqEntry">
                    <dd>
                      <abbr title = "Question">User Selection</abbr>
                      <h6><b>Pick a body part</b></h6>
                    </dd>

                    <dd>
                      
                      <div>
                      <ol>
                      <li>
                      An image of the human body will be shown on the page


                      </li>
                      <li>
                      Each part of the body can be clicked in order to correspond with the user’s body goals for a specific muscle
                      </li>
                      <li>
                      When the user clicks on the muscle, the page will show them the different types of exercises for that specific area.
                      </li>
                      
                      
                    </ol>
                    
                      </div>
                    </dd>

                    <dd>
                      <a href = "#faq-list"> Return to Top</a>
                    </dd>
                    <hr></hr>
              </dl>

              <dl id = "Support-Us" data-test-id = "faqEntry">
                    <dd>
                      <abbr title = "Question">Workout Routines</abbr>
                      <h6><b>Creating</b></h6>
                    </dd>

                    <dd>
                      
                      <div>
                      <ol>
                      <li>
                      A registered user will be able to generate their own workout program.


                      </li>
                      <li>
                      The website will allow for the user to add different workouts to a list for a specific day.
                      </li>
                      <li>
                      The site will also recommend a user workouts based on what body part/parts they have chosen to focus on that specific day.
                      </li>
                      
                      
                    </ol>
                    
                      </div>
                    </dd>

                    <dd>
                      <a href = "#faq-list"> Return to Top</a>
                    </dd>
                    <hr></hr>
              </dl>

              <dl id = "Mobile" data-test-id = "faqEntry">
                    <dd>
                      <abbr title = "Question">Workout info</abbr>
                      <h6><b>Educate</b></h6>
                    </dd>

                    <dd>
                      
                      <div>
                      <ol>
                      <li>
                      Click on workout routine to be performed.


                      </li>
                      <li>
                      The website will allow for the user to access all kinds of workouts.
                      </li>
                      <li>
                      The site will also recommend a user workouts based on what body part/parts they have chosen to focus on that specific day.
                      </li>
                      
                      
                    </ol>
                    
                      </div>
                    </dd>

                    <dd>
                      <a href = "#faq-list"> Return to Top</a>
                    </dd>
                    <hr></hr>
              </dl>

              <dl id = "Live-Support" data-test-id = "faqEntry">
                    <dd>
                      <abbr title = "Question">Social Media</abbr>
                      <h6><b>Follow Friends</b></h6>
                    </dd>

                    <dd>
                      
                      <div>
                      <ol>
                      <li>
                      Registered user will be able to see added friends workouts


                      </li>
                      <li>
                      Will allow user to add the same workout a friend is doing
                      </li>
                      <li>
                      Follows friends accounts updates, such as goals
                      </li>
                      
                      
                    </ol>
                    
                      </div>
                    </dd>

                    <dd>
                      <a href = "#faq-list"> Return to Top</a>
                    </dd>
                    <hr></hr>
              </dl>

              <dl id = "Name" data-test-id = "faqEntry">
                    <dd>
                      <abbr title = "Question">Fitness Goals</abbr>
                      <h6><b>Keep Track</b></h6>
                    </dd>

                    <dd>
                      
                      <div>
                      <ol>
                      <li>
                      Tracker for fitness goals will be available


                      </li>
                      <li>
                      Personally set milestones or workout plan milestones will be available for viewing and time management
                      </li>
                      <li>
                      Friends/followers will be updated with your permission
                      </li>
                      
                      
                    </ol>
                    
                      </div>
                    </dd>

                    <dd>
                      <a href = "#faq-list"> Return to Top</a>
                    </dd>
                    
              </dl>

            </div>

            

          
          </div>
          
          
          
          <br/><br/><br/>
        </div>

    )
  }
}

export default Features