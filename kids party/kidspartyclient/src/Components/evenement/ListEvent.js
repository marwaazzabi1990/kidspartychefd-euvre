import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
} from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <div className="pos_glob">
        <div className="bg-register">
          <div className="grid"></div>
        </div>
        <div>
          <br></br>

          <p style={{ color: "black" }}>
            Vous etes un organisateurs des evenements pour les enfants .
            <br></br>Lancez votre demande de partenariat avec Kids Party ,c'est
            une platforme qui presente tous les evenements en tunisie.
            <br></br> -Bien s’identifier et augmenter la visibilité.
            <br></br> -Aider l’internaute à joindre facilement votre{" "}
          </p>

          <Link to="/inscription">
            {" "}
            <button
              style={{ marginLeft: 100 }}
              className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn_menu "
            >
              Inscription
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
