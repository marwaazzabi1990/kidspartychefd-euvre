import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
            Une annaire des evennement en tunisie qui vise tous les enfants
            &amp;.
          </p>
        </div>

        <div class="footer-center">
          <h3>
            Suivez-<span className="titre-speciale2">Nous</span>
          </h3>
          <div class="footer-icons">
            <a
              href="https://www.facebook.com/"
              style={{ background: "transparent" }}
            >
              {" "}
              <i class="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              style={{ background: "transparent" }}
            >
              {" "}
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/"
              style={{ background: "transparent" }}
            >
              {" "}
              <i class="fab fa-linkedin"></i>{" "}
            </a>
          </div>
          <br></br>
          <div>
            <p class="footer-company-name">Kids Party &copy; 2019</p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <Link to="/"> Acceuil</Link>
            <br></br>
            <a>A propos</a>
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
