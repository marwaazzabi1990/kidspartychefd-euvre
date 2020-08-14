import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBBtn, MDBIcon } from "mdbreact";

import { Table } from 'react-bootstrap';
import {
    getEventsFromApi, deleteEventToApi

} from "../../Action/EventAction.js";
import ModifEvent from "./ModifEventModal";
import ModalAddevent from "./ModalAddevent";


class GererEvent extends Component {
    state = {
        nom_organzateure: ""

    }
    componentDidMount() {
        this.props.getAllEvents();


    }
    render() {
        const { event } = this.props;

        return (

            < div >
                <h1>ici ces evenements de ce profesionnel  connecte</h1>

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
                        {event.filter((el) =>
                            this.state.nom_organzateure === "" ? el : el.nom_organzateur === this.state.nom_organzateure
                        )
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


});

const mapDispatchToProps = (dispatch) => ({

    getAllEvents: () => dispatch(getEventsFromApi()),
    deleteEvent: (el) => dispatch(deleteEventToApi(el)),



});
export default connect(mapStateToProps, mapDispatchToProps)(GererEvent);