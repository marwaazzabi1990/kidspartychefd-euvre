import React, { Component } from "react";
import { connect } from "react-redux";

export default class Register extends Component {
  render() {
    return (
      <div>
        <div className="bg-register"></div>
        <div className="grid">
          <a href="#partenaires">
            <p className="lien-profesionnel">Apropos</p>
          </a>
        </div>
        <div>
          <div className="this">
            <h2
              className="titre-speciale2"
              style={{ color: "black", fontWeight: "bold", fontSize: 30 }}
            >
              Rejoignez Nous
            </h2>
            <br></br>
            <p style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>
              Vous etes un organisateurs des evenements pour les enfants .Lancez
              votre demande de partenariat avec Kids Party ,c'est une platforme
              qui presente tous les evenements en tunisie.
              <br></br> -Bien s’identifier et augmenter la visibilité.
              <br></br> -Aider l’internaute à joindre facilement votre{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
