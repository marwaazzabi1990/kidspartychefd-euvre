import React, { Component } from "react";
import { connect } from "react-redux";
import { modifEventFromApi } from "../../Action/EventAction";
import Datepicker2 from "./DatePicker-modif";
import { getCategorieFromApi } from "../../Action/CategorieAction";
import moment from "moment";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBInput,
  MDBModalFooter,
} from "mdbreact";
import { DatePicker } from "antd";
import axios from "axios";

export class EventModalModif extends Component {
  state = {
    id: this.props.el._id,
    titre: this.props.el.titre,
    Date_Debut: this.props.el.Date_Debut,
    Date_fin: this.props.el.Date_fin,
    Adresse: this.props.el.Adresse,
    description: this.props.el.description,
    prix: this.props.el.prix,
    // nombre_de_place: this.props.el.nombre_de_place,
    // nombre_de_participant: this.props.el.nombre_de_participant,
    selectedFile: this.props.el.affiche,
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
  // setDateDebut = (e, el) => {
  //   e.preventDefault();
  //   console.log(el);
  //   this.setState({ Date_Debut: el });
  // };

  // setDateFin = (e, el) => {
  //   e.preventDefault();
  //   this.setState({ Date_fin: el });
  // };
  fileSelectedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  uploadHandler = () => {
    const fd = new FormData();
    {
      /*http://localhost:2000/public*/
    }
    fd.append("file", this.state.selectedFile);
    //console.log("img", Object(fd).length)
    axios
      .post("http://localhost:8080/image", fd)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  render() {
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
              Modifier<span className="titre-speciale">Evenement</span>
            </h2>
          </MDBModalHeader>
          <MDBModalBody>
            <form className="form-edit-moderateur">
              <label style={{ color: "black" }}>Titre</label>
              <input
                className="input-modif"
                type="text"
                defaultValue={this.props.el.titre}
                style={{ color: "black" }}
                name="post"
                onChange={(e) => this.setState({ titre: e.target.value })}
              />
              <label style={{ color: "black" }}>Date Debut</label>&nbsp;&nbsp;
              <DatePicker
                placeholder="Choisir la date Debut "
                defaultValue={moment(this.props.el.Date_Debut)}
                onChange={(e) => {
                  this.setState({ Date_Debut: e._d.toString().substr(4, 11) });
                }}
              />
              <br></br>
              <br></br>
              <label style={{ color: "black" }}>Date fin</label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <DatePicker
                type="date"
                placeholder="Choisir la date fin "
                style={{ color: "black" }}
                defaultValue={moment(this.props.el.Date_fin)}
                onChange={(e) => {
                  this.setState({ Date_fin: e._d.toString().substr(4, 11) });
                }}
              />
              <br></br>
              <br></br>
              {/* <Datepicker2
                setDateDebut={this.setDateDebut}
                setDateFin={this.setDateFin}
                datedebut={this.props.el.Date_Debut}
                datefin={this.props.el.Date_fin}
              /> */}
              <labe style={{ color: "black" }}>Adresse</labe>
              <input
                className="input-modif"
                type="text"
                defaultValue={this.props.el.Adresse}
                style={{ color: "black" }}
                name="post"
                onChange={(e) => this.setState({ Adresse: e.target.value })}
              />
              <br></br>
              <br></br>
              <labe style={{ color: "black" }}>description</labe>
              <input
                className="input-modif"
                type="text"
                defaultValue={this.props.el.description}
                style={{ color: "black" }}
                name="post"
                onChange={(e) => this.setState({ description: e.target.value })}
              />
              <br></br>
              <br></br>
              <labe style={{ color: "black" }}>prix</labe>
              <input
                type="text"
                className="input-modif"
                defaultValue={this.props.el.prix}
                style={{ color: "black" }}
                name="post"
                onChange={(e) => this.setState({ prix: e.target.value })}
              />
              <br></br>
              <br></br>
              <label style={{ color: "black" }}>affiche</label>
              <br></br>
              <br></br>
              <div class="upload-btn-wrapper">
                <button className="btn1">Upload a file</button>
                <input
                  type="file"
                  name="myfile"
                  onChange={this.fileSelectedHandler}
                />
              </div>
              <br></br>
              <br></br>
              {/* <input
                className="input-modif"
                type="text"
                defaultValue={this.props.el.affiche}
                style={{ color: "black" }}
                name="post"
                onChange={(e) => this.setState({ affiche: e.target.value })}
              /> */}
              <label style={{ color: "black" }}> Categorie</label>
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
            <button
              className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn_menu11"
              onClick={() => {
                this.uploadHandler();
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
                  // nombre_de_place: this.state.nombre_de_place,
                  // nombre_de_participant: this.state.nombre_de_place,
                  // nombre_de_participant: this.state.nombre_de_participant,
                  affiche: this.state.selectedFile.name,
                  nom_categorie: this.state.nom_categorie,
                });
              }}
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
