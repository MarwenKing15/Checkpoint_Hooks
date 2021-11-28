import React from "react";

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReddit,faDiscord,faTwitter,faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-0">
      <MDBContainer>
        <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold linkss">
              <a href="#!" style={{color:"black"}}>About us</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold linkss">
              <a href="#!" style={{color:"black"}}>Help</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold linkss">
              <a href="#!" style={{color:"black"}}>Contact</a>
            </h6>
          </MDBCol>
        </MDBRow>
        <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
        <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
          <MDBCol md="8" sm="12" className="mt-5">
            <p style={{ lineHeight: "1.7rem" }}>
              This Site is a streming website
            </p>
          </MDBCol>
        </MDBRow>
        <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
        <MDBRow className="pb-2">
          <MDBCol md="3">
            <div className="mb-1 flex-center">
              <a className="rd-ic" href="#reddit">
                <FontAwesomeIcon icon={faReddit} color="white" size="4x"/>
              </a>
              </div>
              </MDBCol>
              <MDBCol md="3">
                <div className="mb-1 flex-center">
              <a className="tw-ic" href="#twitter">
                <FontAwesomeIcon icon={faTwitter} color="white" size="4x"/>
              </a>
              </div>
              </MDBCol>
              <MDBCol md="3">
                <div className="mb-1 flex-center">
              <a className="disc-ic" href="#discord">
                <FontAwesomeIcon icon={faDiscord} color="white" size="4x"/>
              </a>
              </div>
          </MDBCol>
              <MDBCol md="3">
                <div className="mb-1 flex-center">
              <a className="ins-ic" href="#instagram">
                <FontAwesomeIcon icon={faInstagram} color="white" size="4x"/>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:
          <a href="https://github.com/MarwenKing15" style={{color:"black"}}> Marwen Touati </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;