import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css";

const FooterPage = () => {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Kids<span className="titre-speciale">Party</span>
          </h3>
          <p class="footer-company-about">
            <span>About the company</span>
            Web Dev Trick is a blog for web designers, graphic designers, web
            developers &amp; SEO Learner.
          </p>
        </div>

        <div class="footer-center">
          <h3>
            Suivez-<span className="titre-speciale">Nous</span>
          </h3>
          <div class="footer-icons">
            <i class="fab fa-facebook"></i>

            <i class="fab fa-instagram"></i>

            <i class="fab fa-linkedin"></i>
          </div>
          <br></br>
          <div>
            <p class="footer-company-name">Kids Party &copy; 2019</p>
          </div>
        </div>

        <div class="footer-right">
          <h3>
            Suivez-<span className="titre-speciale">Nous</span>
          </h3>
          <p class="footer-company-about">
            <a>Acceuil</a>
            <br></br>
            <a>evenement</a>
            <br></br>
            <a>Contact</a>
            <br></br>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default FooterPage;
