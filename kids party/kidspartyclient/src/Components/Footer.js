import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <div className="bg-light ">
      <MDBFooter className="text-dark" className="font-small pt-4 mt-4 ">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="text-dark">
            <MDBCol md="6">
              <h5 className="title">Footer Content</h5>
              <p>
                Here you can use rows and columns here to organize your footer
                content.
              </p>
            </MDBCol>
            <MDBCol className="text-dark" md="6">
              <h5 className="title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">Link 1</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>{" "}
    </div>
  );
};

export default FooterPage;
