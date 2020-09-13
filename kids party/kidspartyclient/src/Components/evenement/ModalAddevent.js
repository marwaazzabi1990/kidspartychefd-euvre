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
import { DatePicker } from "antd";
import { MDBInput } from "mdbreact";
import { connect } from "react-redux";
import { addEventInApi, getEventsFromApi } from "../../Action/EventAction.js";
import { MDBDatePickerV5 } from "mdbreact";
import { getUser } from "../../Action/AuthentificationAction";
import Datepicker from "./DatePicker";
import axios from "axios";
import { getCategorieFromApi } from "../../Action/CategorieAction";

class ModalAjoutEvent extends Component {
  state = {
    modal14: false,
    modal9: false,
    selectedFile: null,
    dateDebut: "",
    dateFin: "",
  };
  componentDidMount() {
    this.setState({ nom: this.props.nom });
    this.props.getAllEvents();
    this.props.getAllCategorie();
  }

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };

  setDateDebut = (el) => {
    this.setState({ dateDebut: el });
  };

  setDateFin = (el) => {
    this.setState({ dateFin: el });
  };

  //upload logo

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
          className="btn-color"
          onClick={this.toggle(14)}
        >
          Creer evenement
        </MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>
            <h2 className="bienveneu-h2.2">
              {" "}
              Nouvel <span className="titre-speciale">Event</span>
            </h2>
          </MDBModalHeader>
          <MDBModalBody className="despo">
            <div className="inputdispo1">
              <div className="partleftmodal">
                <MDBInput
                  onChange={(e) => this.setState({ titre: e.target.value })}
                  outline
                  label="titre"
                />
                <MDBInput
                  onChange={(e) => this.setState({ Adresse: e.target.value })}
                  label="Adresse"
                  outline
                />
                <MDBInput
                  onChange={(e) =>
                    this.setState({ nombre_de_place: e.target.value })
                  }
                  label="nombre_de_place"
                  outline
                />
                <MDBInput
                  onChange={(e) => this.setState({ prix: e.target.value })}
                  label="prix"
                  outline
                />
              </div>
              <div className="partrightevent">
                {" "}
                <MDBInput
                  onChange={(e) =>
                    this.setState({ description: e.target.value })
                  }
                  label="description"
                  outline
                />
                <select
                  className="browser-default custom-select"
                  onChange={(e) =>
                    this.setState({ nom_categorie: e.target.value })
                  }
                >
                  <option value="">Categorie</option>
                  {this.props.categorie.map((el, i) => (
                    <option value={el.titre}>{el.titre}</option>
                  ))}
                </select>
                {/* <MDBInput
                  onChange={(e) =>
                    this.setState({ nom_categorie: e.target.value })
                  }
                  label="Categorie"
                  outline
                  className="input-modal"
                /> */}
                <div class="upload-btn-wrapper">
                  <button className="btn1">Upload a file</button>
                  <input
                    type="file"
                    name="myfile"
                    onChange={this.fileSelectedHandler}
                  />
                </div>
              </div>
              <div className="inputdispo">
                <label>Date debut</label>
                <DatePicker
                  placeholder="Choisir la date Debut "
                  onChange={(e) => {
                    this.setState({
                      dateDebut: e._d.toString().substr(4, 11),
                    });
                  }}
                />
                {/* <Datepicker
                  setDateDebut={this.setDateDebut}
                  setDateFin={this.setDateFin}
                  event={this.props.event}
                /> */}
              </div>
              <div className="inputdispo">
                <labe>Date Fin</labe>
                <DatePicker
                  placeholder="Choisir la date"
                  onChange={(e) => {
                    this.setState({ dateFin: e._d });
                  }}
                />
              </div>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <button
              className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn-color1"
              onClick={() => {
                this.uploadHandler();
                this.props.addEvent({
                  titre: this.state.titre,
                  Date_Debut: this.state.dateDebut,
                  Date_fin: this.state.dateFin,
                  Adresse: this.state.Adresse,
                  description: this.state.description,
                  notes: 0,
                  nb_per_note: 0,
                  prix: this.state.prix,
                  affiche: this.state.selectedFile.name,
                  nombre_de_place: this.state.nombre_de_place,
                  nombre_de_participant: 0,
                  nom_categorie: this.state.nom_categorie,
                  nom_organzateur: this.props.id,
                });
              }}
            >
              Save changes
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
  addEvent: (el) => dispatch(addEventInApi(el)),
  getAllEvents: () => dispatch(getEventsFromApi()),

  getUser: () => dispatch(getUser()),
  getAllCategorie: () => dispatch(getCategorieFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalAjoutEvent);
