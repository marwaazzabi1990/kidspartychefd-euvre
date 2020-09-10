import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInputGroup,
} from "mdbreact";
import { MDBInput } from "mdbreact";
import { connect } from "react-redux";

import { addCategorieInApi } from "../../Action/CategorieAction";

class ModalAjoutCategorie extends Component {
  state = {
    modal14: false,
    modal9: false,
  };
  componentDidMount() {}

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  render() {
    // }
    return (
      <MDBContainer>
        <MDBBtn
          color="elegant-color"
          className="btn-color"
          onClick={this.toggle(14)}
        >
          Ajouter Categorie
        </MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>
            <h2 className="bienveneu-h2.2">
              {" "}
              Nouvel <span className="titre-speciale">Categorie</span>
            </h2>
          </MDBModalHeader>
          <MDBModalBody className="despo">
            <div className="inputdispo1">
              <div className="partleftmodal">
                <MDBInput
                  onChange={(e) => this.setState({ Titre: e.target.value })}
                  outline
                  label="titre"
                />
                <MDBInput
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                  label="Adresse"
                  outline
                />
              </div>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            {/* <MDBBtn color="secondary" onClick={this.toggle(9)}>
              Close
            </MDBBtn> */}
            <button
              className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn-color1"
              onClick={() => {
                this.props.addCategorie({
                  titre: this.state.Titre,
                  Description: this.state.description,
                });
              }}
            >
              Enregistrer
            </button>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.event,
  authetification: state.authetification,
  categorie: state.categorie,
});

const mapDispatchToProps = (dispatch) => ({
  addCategorie: (el) => dispatch(addCategorieInApi(el)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalAjoutCategorie);
/*<MDBBtn
color="elegant-color"
className="btn-color"
onClick={this.toggle(14)}
>
Ajouter evenement
</MDBBtn>
<MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
<MDBModalHeader toggle={this.toggle(14)}>
  Ajouter evenement
</MDBModalHeader>
<MDBModalBody className="despo">
  <div>
    <MDBInput
      onChange={(e) => this.setState({ titre: e.target.value })}
      label="Titre"
      outline
    />

    <Datepicker setDate={this.setDate} event={this.props.event} />

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
      onChange={(e) =>
        this.setState({ nombre_de_place: e.target.value })
      }
      label="nombre_de_place"
      outline
    />
  </div>
  <div>
    {/* <MDBInput
      onChange={(e) =>
        this.setState({ nombre_de_participant: e.target.value })
      }
      label="nombre_de_participant"
      outline
      type="number"
    /> */
/* <MDBInput
      onChange={(e) =>
        this.setState({ nom_categorie: e.target.value })
      }
      label="nom_categorie"
      outline
    />
    <MDBInput
      type="file"
      onChange={this.fileSelectedHandler}
      label="affiche"
      outline
    />
    <MDBBtn color="dark" onClick={this.uploadHandler}>
      Upload
    </MDBBtn>
  </div>
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
        Date_Debut: this.state.date.from,
        Date_fin: this.state.date.to,
        Adresse: this.state.Adresse,
        description: this.state.description,
        notes: 0,
        nb_per_note: 0,
        prix: this.state.prix,
        affiche: this.state.selectedFile.name,
        nombre_de_place: this.state.nombre_de_place,
        nombre_de_participant: 0,
        nom_categorie: this.state.nom_categorie,
        nom_organzateur: this.props.nom,
      })
    }
  >
    Postuler
  </MDBBtn>
</MDBModalFooter>
  </MDBModal>*/
