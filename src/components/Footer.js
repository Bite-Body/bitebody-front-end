import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {Link} from 'react-router-dom';

const FooterPagePro = () => {
  return (
    <div className="container">
    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Bitebody Footer
            </h5>
            <p>
              Be sure to checkout all the following links for our important links, social medias, and misc.
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
              Social Media
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Facebook</a>
              </li>
              <li>
                <a href="#!">Instagram</a>
              </li>
              <li>
                <a href="#!">Twitter</a>
              </li>
              
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Links
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="text-center py-3">
        <ul className="list-unstyled list-inline mb-0">
          <li className="list-inline-item">
            <h5 className="mb-1">Register for free</h5>
          </li>
          <li className="list-inline-item">
            <a href="#!" className="btn btn-danger btn-rounded">
              Sign up!
            </a>
          </li>
        </ul>
      </div>
      <hr />
      <div className="text-center">
        <ul className="list-unstyled list-inline">
          <li className="list-inline-item">
            <a href="https://www.facebook.com/bitten.boody.5" className="btn-floating btn-sm btn-fb mx-1">
              <i className="fab fa-facebook-f"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://twitter.com/BodyBite" className="btn-floating btn-sm btn-tw mx-1">
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.instagram.com/bitebodyxyz/" className="btn-floating btn-sm btn-gplus mx-1">
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