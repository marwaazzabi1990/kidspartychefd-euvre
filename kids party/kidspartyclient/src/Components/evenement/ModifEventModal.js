import React, { Component } from "react";
import { connect } from "react-redux";
import { modifEventFromApi } from "../../Action/EventAction";
import Datepicker2 from "./DatePicker-modif";
import { getCategorieFromApi } from "../../Action/CategorieAction";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBInput,
  MDBModalFooter,
} from "mdbreact";
var newArray = [];
var categorieArray = [];
var finalcategorie = [];
var finalcategorie2 = [];
var categorieArray2 = [];
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
  setDateDebut = (el) => {
    this.setState({ Date_Debut: el });
  };

  setDateFin = (el) => {
    this.setState({ Date_fin: el });
  };
  // // distinctDoubleCategorie = () => {
  // //   let ArrayofCategorie = [];

  // //   this.props.categorie.map((el) => ArrayofCategorie.push(el.titre));
  // //   newArray = new Set(ArrayofCategorie);
  // //   categorieArray = [...newArray];
  // //   for (let i = 0; i <= categorieArray.length; i++) {
  // //     if (categorieArray[i] == this.props.el.nom_categorie) {
  // //       console.log("yyy", this.props.el.nom_categorie);
  // //       console.log("zzzz", categorieArray[i]);
  // //       //finalcategorie.push(categorieArray.splice(categorieArray[i], 1));
  // //       categorieArray2 = categorieArray.splice(categorieArray[i], 1);
  // //       console.log("kkkk", categorieArray2);
  // //       /* finalcategorie2 = new Set(finalcategorie);
  // //       categorieArray2 = finalcategorie2;
  // //       console.log("kkkvvvvk", categorieArray2);*/
  // //     } else {
  // //     }
  // //     console.log("dsdsdgqhg");
  // //   }

  //   /* categorieArray.map((el) =>
  //     el.titre === this.props.el.nom_categorie
  //       ? alert("sss", categorieArray.slice(el.titre, 1))
  //       : categorieArray
  //   );*/
  // };

  render() {
    // this.distinctDoubleCategorie();
    console.log("marwa", this.props.el);
    return (
      <MDBContainer>
        <MDBBtn
          color="elegant-color"
          className="modif-event"
          onClick={this.toggle(8)}
        >
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
            <h2 className="bienveneu-h2.2">
              {" "}
              Modif<span className="titre-speciale">Event</span>
            </h2>
          </MDBModalHeader>
          <MDBModalBody>
            <form className="form-edit-moderateur">
              <label>Titre</label>
              <input
                className="input-modif"
                type="text"
                name="title"
                defaultValue={this.props.el.titre}
                onChange={(e) => this.setState({ titre: e.target.value })}
              />

              <labe>Date </labe>
              <Datepicker2
                setDateDebut={this.setDateDebut}
                setDateFin={this.setDateFin}
                datedebut={this.props.el.Date_Debut}
                datefin={this.props.el.Date_fin}
              />
              <input
                className="input-modif"
                type="text"
                defaultValue={this.props.el.Date_Debut}
                name="user_name"
                onChange={(e) => this.setState({ Date_Debut: e.target.value })}
              />
              <labe>Date fin</labe>
              <input
                className="input-modif"
                type="text"
                defaultValue={this.props.el.Date_fin}
                name="email"
                onChange={(e) => this.setState({ Date_fin: e.target.value })}
              />
              <labe>Adresse</labe>
              <input
                className="input-modif"
                type="text"
                defaultValue={this.props.el.Adresse}
                name="post"
                onChange={(e) => this.setState({ Adresse: e.target.value })}
              />
              <labe>description</labe>
              <input
                className="input-modif"
                type="text"
                defaultValue={this.props.el.description}
                name="post"
                onChange={(e) => this.setState({ description: e.target.value })}
              />
              <labe>prix</labe>
              <input
                type="text"
                defaultValue={this.props.el.prix}
                name="post"
                onChange={(e) => this.setState({ prix: e.target.value })}
              />
              <label>nombre_de_place</label>
              <input
                className="input-modif"
                type="text"
                defaultValue={this.props.el.nombre_de_place}
                name="post"
                onChange={(e) =>
                  this.setState({ nombre_de_place: e.target.value })
                }
              />
              <label>Participant</label>
              <input
                className="input-modif"
                type="text"
                defaultValue={this.props.el.nombre_de_participant}
                name="post"
                onChange={(e) =>
                  this.setState({ nombre_de_participant: e.target.value })
                }
              ></input>
              <label>affiche</label>
              <input
                className="input-modif"
                type="text"
                defaultValue={this.props.el.affiche}
                name="post"
                onChange={(e) => this.setState({ affiche: e.target.value })}
              />
              <label> Categorie</label>
              <select
                className="browser-default custom-select"
                onChange={(e) =>
                  this.setState({ nom_categorie: e.target.value })
                }
              >
                <option
                  defaultValue={this.props.el.nom_categorie}
                  value={this.props.el.nom_categorie}
                >
                  {this.props.el.nom_categorie}
                </option>
                {this.props.categorie
                  .filter((el, i) => el.titre !== this.props.el.nom_categorie)
                  .map((el, i) => (
                    <option className="tt-color" value={el.titre}>
                      {el.titre}
                    </option>
                  ))}
              </select>
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            {/* <MDBBtn color="dark" onClick={this.toggle(8)}>
              Fermer
            </MDBBtn> */}
            <button
              className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn-color1"
              onClick={() =>
                this.props.Modifierevent({
                  id: this.state.id,
                  titre: this.state.titre,
                  Date_Debut: this.state.dateDebut,
                  Date_fin: this.state.dateFin,
                  Adresse: this.state.Adresse,
                  description: this.state.description,
                  notes: this.props.el.notes,
                  nb_per_note: Number(this.props.el.nb_per_note) + 1,
                  prix: this.state.prix,
                  nombre_de_place: this.state.nombre_de_place,
                  nombre_de_participant: this.state.nombre_de_place,
                  nombre_de_participant: this.state.nombre_de_participant,
                  affiche: this.state.affiche,
                  nom_categorie: this.state.nom_categorie,
                  // nom_organzateur: this.state.nom_organzateur,
                })
              }
            >
              Save
            </button>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.event,
  categorie: state.categorie,
});

const mapDispatchToProps = (dispatch) => ({
  Modifierevent: (el) => dispatch(modifEventFromApi(el)),
  getAllCategorie: () => dispatch(getCategorieFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventModalModif);
