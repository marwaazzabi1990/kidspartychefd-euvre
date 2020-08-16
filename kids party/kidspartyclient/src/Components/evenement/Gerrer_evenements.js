import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBBtn, MDBIcon } from "mdbreact";

import { Table } from 'react-bootstrap';
import {
    getEventsFromApi, deleteEventToApi

} from "../../Action/EventAction.js";
import { getUser } from "../../Action/AuthentificationAction"
import ModifEvent from "./ModifEventModal";
import ModalAddevent from "./ModalAddevent";


class GererEvent extends Component {
    state = {
        nom_organzateure: ""

    }
    componentDidMount() {
        this.props.getAllEvents();
        //   this.setState{ (nom_organzateure = this.props.authetification.nom) }


    }
    render() {
        this.props.authetification && console.log("xcx", this.props.authetification.nom);


        const { event } = this.props;

        return (

            < div >


                <button
                    className="buttonplus"
                    onClick={() => this.setState({ addModelShow: true })}
                >
                    <ModalAddevent />
                </button>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Titre </th>
                            <th>Adresse</th>
                            <th>Date Debut</th>
                            <th>Date Fin</th>

                            <th> Description</th>
                            <th>Nombre de place</th>
                            <th>Les participant</th>
                            <th>Prix</th>
                            <th>nom_categorie</th>
                            <th>nom_organzateur</th>

                            <th> Action</th >
                        </tr>
                    </thead>
                    <tbody>
                        {event/*.filter((el_organizateurs) => this.el_organizateurs === "" ?
                            el_organizateurs : el_organizateurs === "maazza"
        )*/
                            .map((el, i) => (<tr>
                                <td>{el.titre}</td>
                                <td>{el.Adresse}</td>
                                <td>{el.Date_Debut}</td>
                                <td>{el.Date_fin}</td>
                                <td>{el.description}</td>
                                <td>{el.nombre_de_place}</td>
                                <td>{el.nombre_de_participant}</td>
                                <td>{el.prix}</td>
                                <td>{el.nom_categorie}</td>
                                <td>{el.nom_organzateur}</td>
                                <td className="pos-Action " ><button outline size="sm" onClick={() => this.props.deleteEvent(el._id)}><i class="fas fa-trash"></i></button>
                                    <button> <ModifEvent el={el} /></button></td>
                            </tr>))}

                    </tbody>
                </Table >

            </div >
        )
    }

}

const mapStateToProps = (state) => ({
    event: state.event,
    authetification: state.authetification,

});

const mapDispatchToProps = (dispatch) => ({

    getAllEvents: () => dispatch(getEventsFromApi()),
    deleteEvent: (el) => dispatch(deleteEventToApi(el)),
    getUser: () => dispatch(getUser())



});
export default connect(mapStateToProps, mapDispatchToProps)(GererEvent);