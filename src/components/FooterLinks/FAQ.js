import React, { Component } from 'react'

class FAQ extends Component {
  componentDidMount() {
    document.title = "Bitebody - FAQ"
  }
  render() {
    return (

        <div className="container">
          <br/><br/>
          <h1><center>Frequently Asked Questions</center></h1><br/>
          <hr/>
          
          <div id = "faq-list" class ="kj">
            
            <div>
            
            <h4 class ="lj">Account</h4>              
              <ol>
                <li>       
                  <a href = "#Forgot-Password"><u>I lost/forgot my password, now what can I do?</u></a>
                  </li>

                <li>
                  <a href = "#Compromised-Account"><u>I think my account has been compromised! How do I regain access?</u></a>
                  </li>

                <li>
                  <a href = "#Forgot-Email"><u>I lost/forgot my email, what do I do?</u></a>
                  </li>
              
                
              </ol>  
            
            </div>
            
            <div>
            
            <h4 class = "lj">General</h4>
              <ol>
                <li>
                  <a href = "#What-is-BiteBody"><u>What is BiteBody?</u></a>
                  </li>

                <li>
                  <a href = "#Support-Us"><u>How can I help support BiteBody?</u></a>
                  </li>

                <li>
                  <a href = "#Mobile"><u>Does BiteBody work on my mobile device?</u></a>
                  </li>

                <li>
                  <a href = "#Live-Support"><u>Does BiteBody offer Live Chat Support?</u></a>
                  </li>


                <li>
                  < a href = "#Name"><u>Why are you named "BiteBody"?</u></a>
                  </li>

              </ol>
            
            </div>
            <hr></hr>

            <div>
            <h3 class ="lj">Account</h3>
            <hr></hr>
            

              <dl id = "Forgot-Password" data-test-id = "faqEntry">
                <dd>
                  <abbr title = "Question">Q: </abbr>
                  <h6><b>I lost/forgot my password, now what can I do?</b></h6>
                  </dd>
                
                <dd>
                  <abbr title = "Answer">A:</abbr>
                  <div>
                  <p>
                    This is a common mistake and there is no need to worry. The easiest way to regain access to your password is:
                    <br></br>
                    <br></br>
                  </p>
                  <ol>
                    <li>
                      Go to the website's home page and select the login/create account on the top right corner.
                    </li>
                    <li>
                      Click on forgot password. The link should be under the login credentials.
                    </li>
                    <li>
                      Enter your email.
                    </li>
                    <li>
                      Check your email, then click the link and you will be redirected to a change password page.
                    </li>
                  </ol>
                  
                  
                  <p>
                    You should now be able to access your account! We're glad you're back with us!
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
                    <abbr title = "Question">Q:</abbr>
                    <h6><b>I think my account has been compromised! How do I regain access?</b></h6>
                  </dd>

                  <dd>
                    <abbr title = "Answer">A:</abbr>
                    <div>
                    <p>
                    If you are 100% sure your account has been compromised, allow us to help you get your account back. 
                    Use the following steps as a guide in recovering your account: 
                    </p>
                    <ol>
                      <li>
                        Scroll to the bottom of the page and select Contact Us.
                      </li>
                      <li>
                        Use the email provided and explain to us what exactly happened. This means, how the account was taken (if you don't know, please state that as well),
                        how long ago your password and/or email was changed, and any other details regarding your account loss. The more you divulge, the better we can assist you
                        in this time of need. 
                      </li>
                      <li>
                        Wait for an email from one of our representatives.
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
                    <abbr title = "Question">Q:</abbr>
                    <h6><b>I lost/forgot my email, what do I do?</b></h6>
                  </dd>

                  <dd>
                    <abbr title = "Answer">A:</abbr>
                    <div>
                    <p>
                    It happens to the best of us! Email recovery is just a few steps away:
                    </p>
                    <ol>
                      <li>
                        Navigate to the top right of the website.
                      </li>
                      <li>
                        Click on the login button.
                      </li>
                      <li>
                        In the login screen select "Forgot Email".
                      </li>
                      <li>
                        Enter your phone number and answer the security questions.
                      </li>
                      
                    </ol>
                    <p>
                      Once you have regained access, make sure you keep track of the email you used! We want you to continue your fitness journey!
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
            
            
              <dl id = "What-is-Virgil" data-test-id = "faqEntry">
                    <dd>
                      <abbr title = "Question">Q:</abbr>
                      <h6><b>What is BiteBody?</b></h6>
                    </dd>

                    <dd>
                      <abbr title = "Answer">A:</abbr>
                      <div>
                      <p>
                        BiteBody is a website that functions as a fitness initiative for people of all experience
                        levels, body types, ages, and lifestyles. With Bitebody, you can choose which body part you
                        want to exercise, create and edit your own workout routines, keep track of fitness goals, and 
                        plan out your meals! All this and more from a single, seamless, streamlined app and for FREE!
                      </p>
                    
                      </div>
                    </dd>

                    <dd>
                      <a href = "#faq-list"> Return to Top</a>
                    </dd>
                    <hr></hr>
              </dl>

              <dl id = "Support-Us" data-test-id = "faqEntry">
                    <dd>
                      <abbr title = "Question">Q:</abbr>
                      <h6><b>How can I help support BiteBody?</b></h6>
                    </dd>

                    <dd>
                      <abbr title = "Answer">A:</abbr>
                      <div>
                      <p>
                      Our site is free to use! There are no subscriptions, or payments to be made. All we ask is that our users contribute to the growth of the site through word of mouth! 
                      </p>
                    
                      </div>
                    </dd>

                    <dd>
                      <a href = "#faq-list"> Return to Top</a>
                    </dd>
                    <hr></hr>
              </dl>

              <dl id = "Mobile" data-test-id = "faqEntry">
                    <dd>
                      <abbr title = "Question">Q:</abbr>
                      <h6><b>Does BiteBody work on my mobile device?</b></h6>
                    </dd>

                    <dd>
                      <abbr title = "Answer">A:</abbr>
                      <div>
                      <p>
                     That depends. If your phone has an internet browser and is NOT broken, then we are pleased to say that YES it does!
                     Any functional phone with internet browsing capabilities and a working signal/service will have access to Bidebody.xyz via their internet browser!
                      </p>
                    
                      </div>
                    </dd>

                    <dd>
                      <a href = "#faq-list"> Return to Top</a>
                    </dd>
                    <hr></hr>
              </dl>

              <dl id = "Live-Support" data-test-id = "faqEntry">
                    <dd>
                      <abbr title = "Question">Q:</abbr>
                      <h6><b>Does BiteBody offer Live Chat Support?</b></h6>
                    </dd>

                    <dd>
                      <abbr title = "Answer">A:</abbr>
                      <div>
                      <p>
                      As of now we do not. However, this does not mean we are opposed to doing so. Stay tuned in for future updates!
                      </p>
                    
                      </div>
                    </dd>

                    <dd>
                      <a href = "#faq-list"> Return to Top</a>
                    </dd>
                    <hr></hr>
              </dl>

              <dl id = "Name" data-test-id = "faqEntry">
                    <dd>
                      <abbr title = "Question">Q:</abbr>
                      <h6><b>Why are you named "BiteBody"?</b></h6>
                    </dd>

                    <dd>
                      <abbr title = "Answer">A:</abbr>
                      <div>
                      <p>
                      We went through various names in the concept phase, but BiteBody was the least terrible one! Other contentious names included: "Pick Yo' Body Part", "fitnessD", "BodyPicker300", and many more!
                      We did settle on BiteBody because it retained the emphasis on Body and by adding "Bite" to the front of the name, we were able to hint at our CS background since Bite sounds like Byte. Furthermore,
                      our meal planner feature is food related and "Bite" also alludes to food.
                      </p>
                    
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

export default FAQ