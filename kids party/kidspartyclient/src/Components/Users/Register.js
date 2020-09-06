import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterModal from "./ModalRegister";

export default class Register extends Component {
  render() {
    return (
      <div>
        <div className="bg-register"></div>
        <div className="grid">
          <a href="#partenaires">
            <p className="lien-profesionnel">
              Vous etes organisateurs d'evenements Partagez avec nous vos
              evenements et devenir partenire
            </p>
          </a>
        </div>
        <div>
          <div className="this">
            <h1 id="partenaires">
              Espace <span className="titre-speciale2"> proffesionnel</span>
            </h1>
            <h3 className="titre-speciale2">
              Vous etes <span>organisateurs</span> d'evenements
            </h3>
            <br></br>
            <p>
              Vous etes un organisateurs des evenements pour les enfants .Lancez
              votre demande de partenariat avec Kids Party ,c'est une platforme
              qui presente tous les evenements en tunisie.
              <br></br> -Bien s’identifier et augmenter la visibilité.
              <br></br> -Aider l’internaute à joindre facilement votre{" "}
            </p>
            <div>
              <RegisterModal />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
