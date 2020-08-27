import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from "../logo2.png";

const FooterPage = () => {
  return (
    <div>
      <MDBFooter
        color="default-color"
        className="text-dark"
        className="font-small pt-4 mt-4 categoryNavigationPrincipalFooter "
      >
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="categoryNavigationPrincipalFooter">
            <MDBCol md="6">
              <h5 class="text_h3">Kids Party</h5>
              <p>
                <img src={logo} className="img-lg-footer " />
                <span className="text-dark font-large">
                  Le meilleur accompagnement pour gagner du temps{" "}
                </span>
              </p>
            </MDBCol>
            <MDBCol className="text-dark" md="6">
              <p class="text_h3">Nous contacter</p>
              <div className="cell">
                <a href="./contact.js" />
                <span className="icoBtnWrite">&nbsp;</span>
                <br></br>
                Ecrivez-nous
              </div>
              <div className="cell">
                <a href="./contact.js" />
                <span className="icoBtnCall">&nbsp;</span>
                <br></br>
                Appelez-nous
              </div>
              <br></br>
              <div className="footerSocial">
                <div className="btnSocial_2"></div>
                <a
                  title="Facebook"
                  target="_blank"
                  href="https://www.facebook.com"
                  class="social"
                >
                  <img
                    border="0"
                    src="https://www.teskerti.tn/img/teskerti-www/ico/Teskerti-Social-Facebook-icon-001.png"
                    title="Facebook"
                    alt="Facebook"
                  />
                </a>
                <a
                  title="Instagram"
                  target="_blank"
                  href="https://www.instagram.com"
                  class="social"
                >
                  <img
                    border="0"
                    src="https://www.teskerti.tn/img/teskerti-www/ico/Teskerti-Social-Instagram-icon-001.png"
                    title="Instagram"
                    alt="Instagram"
                  />
                </a>
              </div>

              {/* <div className="cell">
                <a href="./contact.js" />
                <span className="icoBtnFaq call">&nbsp;</span>
                <br></br>
                Quetion Reponses
              </div> */}
              {/* <ul>
                <li className="list-unstyled">
                  <img></img>
                </li>
              </ul>*/}
            </MDBCol>
            <p className="copy">&copy; 2020 RapidTables.com</p>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>{" "}
    </div>
  );
};

export default FooterPage;
