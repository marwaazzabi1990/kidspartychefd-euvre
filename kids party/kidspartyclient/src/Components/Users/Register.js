import React, { Component } from "react";
import { connect } from "react-redux";
import RegisterModal from "./ModalRegister"

export default class Register extends Component {
    render() {
        return (
            <div>



                <div className="bg-register">


                </div>
                <div className="grid">
                    <a href="#partenaires" className="lien-profesionnel">Vous etes organisateurs d'evenements </a>
                    <p className="lien-profesionnel">Vous etes un organisateurs des evenements </p>
                </div>
                <div >


                    <div className="this">
                        <h1 id="partenaires" >Espace proffesionnel</h1>
                        <h3>Vous etes organisateurs d'evenements</h3>
                        <p>Vous etes un organisateurs des evenements pour les enfants .Lancez votre demande de  partenariat avec Kids Party ,c'est une platforme qui presente tous les evenements en tunisie.

                       <br></br> -Bien s’identifier et augmenter la visibilité.
                       <br></br> -Aider l’internaute à joindre facilement votre </p>
                        <div >
                            < RegisterModal  />
                        </div>

                    </div>



                </div>
            </div >
        )
    }



}