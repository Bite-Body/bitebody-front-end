import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from 'react-router-dom';

const FooterPagePro = () => {

  const signUpButton = (
    <div className="text-center py-3">
    <ul className="list-unstyled list-inline mb-0">
      <li className="list-inline-item">
        <h5 className="mb-1">Register for free!</h5>
      </li>
    
    <br/><br/>

      <li className="list-inline-item">
          <Link to="/register" className="btn btn-danger btn-rounded">
            Sign up!
          </Link>
        </li>
    </ul>

    <hr />
    </div>
  )

  return (
    <div className="container">
    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Bitebody <span role="img" aria-label="muscle">💪🏽</span>
            </h5>
            <p>
              Be sure to checkout all the following links for our important links, social media, etc.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Why us?
            </h5>
            <ul className="list-unstyled">
              <li>
              <Link to="/about">
              About
              </Link>
              </li>
              <li>
              <Link to="/faq">
              FAQ
              </Link>
              </li>
              <li>
              <Link to="/documentation">
              Documentation
              </Link>
              </li>
              <li>
              <Link to="/team">
              Team
              </Link>
              </li>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              More Info
            </h5>
            <ul className="list-unstyled">
              <li>
              <Link to="/accessibility">
              Accessibility
              </Link>
              </li>
              <li>
              <Link to="/cookies">
              Cookies
              </Link>
              </li>
              <li>
              <Link to="/privacy">
              Privacy
              </Link>
              </li>
              
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              More Coming Soon!
            </h5>
            <ul className="list-unstyled">
              <li>
              <Link to="/tos">
              Terms of Service
              </Link>
              </li>
              <li>
                <a href="#!">NEW</a>
              </li>
              <li>
              <Link to="/goals">
              Goals
              </Link>
              </li>
              <li>
              <Link to="/features">
              Features
              </Link>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />

      {localStorage.usertoken ? null : signUpButton}



      
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a href="https://www.facebook.com/bitten.boody.5" className="btn-floating btn-sm btn-fb mx-1" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://twitter.com/BodyBite" className="btn-floating btn-sm btn-tw mx-1" rel="noopener noreferrer">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.instagram.com/bitebodyxyz/" className="btn-floating btn-sm btn-gplus mx-1" rel="noopener noreferrer">
              <i className="fab fa-instagram"> </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Team Late
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  );
}

export default FooterPagePro;