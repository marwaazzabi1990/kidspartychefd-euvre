import React, { Component } from "react";
import { connect } from "react-redux";
import { modifEventFromApi } from "../../Action/EventAction";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

export class EventModalModif extends Component {
  state = {
    id: this.props.el._id,
    titre: this.props.el.titre,
    Date_Debut: this.props.el.Date_Debut,
    Date_fin: this.props.el.Date_fin,
    Adresse: this.props.el.Adresse,
    description: this.props.el.description,
    prix: this.props.el.prix,
    nombre_de_place: this.props.el.nombre_de_place,
    nombre_de_participant: this.props.el.nombre_de_participant,
    affiche: this.props.el.affiche,
    nom_categorie: this.props.el.nom_categorie,
    nom_organzateur: this.props.el.nom_organzateur,

    modal8: false,
    modal9: false,
  };
  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBBtn outline size="sm" onClick={this.toggle(8)}>
          <i class="fas fa-edit"></i>
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal8}
          toggle={this.toggle(8)}
          fullHeight
          position="right"
          size="fluid"
        >
          <MDBModalHeader className="titlemodaleditmod" toggle={this.toggle(8)}>
            Modifier Event
          </MDBModalHeader>
          <MDBModalBody>
            <form className="form-edit-moderateur">
              <label>Titre</label>
              <input
                className="firstinputmodaleditmod"
                type="text"
                name="title"
                defaultValue={this.props.el.titre}
                onChange={(e) => this.setState({ titre: e.target.value })}
              ></input>

              <labe>Date debut</labe>
              <input
                type="text"
                defaultValue={this.props.el.Date_Debut}
                name="user_name"
                onChange={(e) => this.setState({ Date_Debut: e.target.value })}
              ></input>
              <labe>Date fin</labe>
              <input
                type="text"
                defaultValue={this.props.el.Date_fin}
                name="email"
                onChange={(e) => this.setState({ Date_fin: e.target.value })}
              ></input>
              <labe>Adresse</labe>
              <input
                type="text"
                defaultValue={this.props.el.Adresse}
                name="post"
                onChange={(e) => this.setState({ Adresse: e.target.value })}
              ></input>
              <labe>description</labe>
              <input
                type="text"
                defaultValue={this.props.el.description}
                name="post"
                onChange={(e) => this.setState({ description: e.target.value })}
              ></input>
              <labe>prix</labe>
              <input
                type="text"
                defaultValue={this.props.el.prix}
                name="post"
                onChange={(e) => this.setState({ prix: e.target.value })}
              ></input>
              <label>nombre_de_place</label>
              <input
                type="text"
                defaultValue={this.props.el.nombre_de_place}
                name="post"
                onChange={(e) =>
                  this.setState({ nombre_de_place: e.target.value })
                }
              ></input>
              <label>Participant</label>
              <input
                type="text"
                defaultValue={this.props.el.nombre_de_participant}
                name="post"
                onChange={(e) =>
                  this.setState({ nombre_de_participant: e.target.value })
                }
              ></input>
              <label>affiche</label>
              <input
                type="text"
                defaultValue={this.props.el.affiche}
                name="post"
                onChange={(e) => this.setState({ affiche: e.target.value })}
              ></input>
              <label> Categorie</label>
              <input
                type="text"
                defaultValue={this.props.el.nom_categorie}
                name="post"
                onChange={(e) =>
                  this.setState({ nom_categorie: e.target.value })
                }
              ></input>
              <label>Organizateur</label>
              <input
                type="text"
                defaultValue={this.props.el.nom_organzateur}
                name="post"
                onChange={(e) =>
                  this.setState({ nom_organzateur: e.target.value })
                }
              ></input>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="dark" onClick={this.toggle(8)}>
              Fermer
            </MDBBtn>
            <MDBBtn
              color="dark"
              onClick={() =>
                this.props.Modifierevent({
                  id: this.state.id,
                  titre: this.state.titre,
                  Date_Debut: this.state.Date_Debut,
                  Date_fin: this.state.Date_fin,
                  Adresse: this.state.Adresse,
                  description: this.state.description,
                  notes: this.props.el.notes,
                  nb_per_note: Number(this.props.el.nb_per_note) + 1,
                  prix: this.state.prix,
                  nombre_de_place: this.state.nombre_de_place,
                  nombre_de_participant: this.state.nombre_de_participant,
                  affiche: this.state.affiche,
                  nom_categorie: this.state.nom_categorie,
                  // nom_organzateur: this.state.nom_organzateur,
                })
              }
            >
              Save
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
  Modifierevent: (el) => dispatch(modifEventFromApi(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventModalModif);
