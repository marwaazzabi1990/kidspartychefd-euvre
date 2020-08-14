import React, { Component } from "react";
import {
    MDBContainer,
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
    MDBInputGroup
} from "mdbreact";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import { connect } from "react-redux";
import {
    addEventInApi

} from "../../Action/EventAction.js";
import axios from 'axios'


class ModalAjoutEvent extends Component {
    state = {
        modal14: false,
        modal9: false,
        selectedFile: null

    };

    toggle = (nr) => () => {
        let modalNumber = "modal" + nr;
        this.setState({
            [modalNumber]: !this.state[modalNumber],
        });
    };
    //upload logo 

    fileSelectedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] })

    }
    uploadHandler = () => {
        const fd = new FormData(); {/*http://localhost:2000/public*/ }
        fd.append('file', this.state.selectedFile)
        //console.log("img", Object(fd).length)
        axios.post('http://localhost:8080/image', fd).then(
            res => {
                console.log(res);
            }
        )
            .catch(err => console.log(err))

    }

    render() {
        return (
            <MDBContainer>

                <MDBBtn onClick={this.toggle(14)}>
                    <i class="far fa-plus-square"></i>
                </MDBBtn>
                <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
                    <MDBModalHeader toggle={this.toggle(14)}>
                        MDBModal title
            </MDBModalHeader>
                    <MDBModalBody>
                        <MDBInput
                            onChange={(e) => this.setState({ titre: e.target.value })}
                            label="Titre"
                            outline
                        />
                        <MDBInput
                            onChange={(e) => this.setState({ Date_Debut: e.target.value })}
                            label="Date_Debut"
                            outline
                        />
                        <MDBInput
                            onChange={(e) => this.setState({ Date_fin: e.target.value })}
                            label="Date_fin"
                            outline
                        />

                        <MDBInput
                            onChange={(e) => this.setState({ Adresse: e.target.value })}
                            label="Adresse"
                            outline
                        />
                        <MDBInput
                            onChange={(e) => this.setState({ description: e.target.value })}
                            label="description"
                            outline
                        />
                        <MDBInput
                            onChange={(e) => this.setState({ prix: e.target.value })}
                            label="prix"
                            outline
                        />
                        <MDBInput
                            type="file"
                            onChange={this.fileSelectedHandler}
                            label="affiche"
                            outline
                        />
                        <MDBBtn color="dark" onClick={this.uploadHandler}>Upload</MDBBtn>

                        <MDBInput
                            onChange={(e) => this.setState({ nombre_de_place: e.target.value })}
                            label="nombre_de_place"
                            outline
                        />
                        <MDBInput
                            onChange={(e) => this.setState({ nombre_de_participant: e.target.value })}
                            label="nombre_de_participant"
                            outline
                        />
                        <MDBInput
                            onChange={(e) => this.setState({ nom_categorie: e.target.value })}
                            label="nom_categorie"
                            outline
                        />
                        <MDBInput
                            onChange={(e) => this.setState({ nom_organzateur: e.target.value })}
                            label="nom_organzateur"
                            outline
                        />
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle(14)}>
                            Close
              </MDBBtn>
                        <MDBBtn
                            color="primary"
                            onClick={() =>
                                this.props.addEvent({
                                    titre: this.state.titre,
                                    Date_Debut: this.state.Date_Debut,
                                    Date_fin: this.state.Date_fin,
                                    Adresse: this.state.Adresse,
                                    description: this.state.description,
                                    prix: this.state.prix,
                                    affiche: this.state.selectedFile.name,
                                    nombre_de_place: this.state.nombre_de_place,
                                    nombre_de_participant: this.state.nombre_de_participant,
                                    nom_categorie: this.state.nom_categorie,
                                    nom_organzateur: this.state.nom_organzateur
                                })
                            }
                        >
                            Postuler
              </MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    event: state.event,
});

const mapDispatchToProps = (dispatch) => ({
    addEvent: (el) => dispatch(addEventInApi(el)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ModalAjoutEvent);