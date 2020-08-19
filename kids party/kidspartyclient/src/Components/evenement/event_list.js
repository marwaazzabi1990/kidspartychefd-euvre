import React, { Component } from "react";
import { connect } from "react-redux";
import "./event_list.css";
import { getEventsFromApi } from "../../Action/EventAction.js";
import { getCategorieFromApi } from "../../Action/CategorieAction.js";
import { getUser } from "../../Action/AuthentificationAction";
import { Carousel, InputGroup, FormControl, Form } from "react-bootstrap";
import {
  MDBCardGroup,
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBView,
} from "mdbreact";

import ModalDetail from "./Detail_Event";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FaSearch, FaUsers } from "react-icons/fa";
import RegisterModal from "../Users/ModalRegister";
import { Select } from "semantic-ui-react";
import Chart from "../shurt";
import { Pie } from "react-chartjs-2";
var categorie = [];
var newArray = [];

class Event_list extends Component {
  state = {
    Categorie: "",
    Adresse: "",
    titre: "",
  };
  componentDidMount() {
    this.props.getAllEvents();
    this.props.getAllCategorie();
    this.props.getUser();
    // localStorage.setItem('nom', this.props.authetification.nom)
  }
  filter = (e) => {
    let input = e.target.value;

    this.setState({ titre: input });

    console.log(this.state.titre);
  };
  distinctDoubleCategorie = () => {
    let ArrayOfCategorie = [];
    console.log("categorie is :" + this.props.categorie);
    this.props.categorie.map((el) => ArrayOfCategorie.push(el.nom_categorie));
    newArray = new Set(ArrayOfCategorie);
    categorie = [...newArray];
  };

  render() {
    this.distinctDoubleCategorie();
    const { event } = this.props;
    // this.nomUser();
    //  const { categorie } = this.props;
    this.props.authetification &&
      console.log("non", this.props.authetification.nom);

    return (
      <div>
        <div>
          {/*  crrousel zone */}
          <Carousel className="carrousel_side">
            {event.slice(event.length - 10, event.length).map((el, i) => (
              <Carousel.Item>
                <img
                  className="image-slider"
                  src={"http://localhost:8080/" + el.affiche}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>{el.titre}</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <RegisterModal />
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
          {/*Filtre   zone */}
        </div>

        <div className="flexselect">
          <div>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <FaSearch />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <input
                onChange={(e) => this.filter(e)}
                placeholder="Rechercher  "
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <div>
            <select
              className="browser-default custom-select"
              onChange={(e) => this.setState({ Adresse: e.target.value })}
            >
              <option value="">Indiquez votre destination</option>

              <option value="Hammamet">Hammamet</option>
              <option value="Kelibia">kelibia</option>
              <option value="Sousse">Sousse</option>
              <option value="Djerba">Djerba</option>
              <option value="Monastir">Monastir</option>

              <option value="Mahdia">Mahdia</option>
              <option value="Tabarka">Tabarka</option>
              <option value="Zarzis">Zarzis</option>
              <option value="Tunis">Tunis</option>
              <option value="Sfax">Sfax</option>
              <option value="Nabeul">Nabeul</option>
              <option value="Tozeur">Tozeur</option>
              <option value="Gammarth">Gammarth</option>
              <option value="Douz">Douz</option>
              <option value="Bizerte">Bizerte</option>
              <option value="Ain Draham">Ain Draham</option>
              <option value="Kairouan">Kairouan</option>
              <option value="Tataouine">Tataouine</option>
              <option value="El Jem">El Jem</option>
            </select>
          </div>

          <div>
            <select
              className="browser-default custom-select"
              onChange={(e) => this.setState({ Categorie: e.target.value })}
              name="pets"
              id="Quantity-select"
            >
              <option value="">Categorie</option>
              {categorie.map((el) => (
                <option value={el}>{el}</option>
              ))}
            </select>
          </div>
        </div>

        {/*Card Event */}

        <div className="pos_card">
          {event
            .filter((elcategorie) =>
              this.state.Categorie === ""
                ? elcategorie
                : elcategorie.nom_categorie === this.state.Categorie
            )
            .filter((eladresse) =>
              this.state.Adresse === ""
                ? eladresse
                : eladresse.Adresse.includes(this.state.Adresse)
            )
            .filter((eltitre) =>
              this.state.titre === ""
                ? eltitre
                : eltitre.titre.includes(this.state.titre)
            )
            .map((el, i) => (
              <MDBCol className="card" md="3">
                <MDBCard wide cascade>
                  <MDBView cascade>
                    <MDBCardImage
                      hover
                      overlay="white-slight"
                      className="card-img-top"
                      src={"http://localhost:8080/" + el.affiche}
                      alt="Card cap"
                    />
                  </MDBView>

                  <MDBCardBody cascade className="text-center">
                    <MDBCardTitle className="card-title">
                      <strong>{el.titre}</strong>
                    </MDBCardTitle>

                    <MDBCardText>
                      <pan>Date début:</pan>
                      {el.Date_Debut}
                      <br></br>
                      <pan>Date Fin</pan>
                      {el.Date_fin}
                      <br></br>
                      <pan>Adresse</pan>
                      {el.Adresse}
                      <br></br>
                      {el.description}.<FaUsers />
                    </MDBCardText>

                    <MDBCol md="12" className="d-flex justify-content-center">
                      <Link to={"/detail/" + el._id}>
                        {" "}
                        <button className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn_menu ">
                          <MDBIcon icon="info-circle" />
                          Plus Detail
                        </button>
                      </Link>
                    </MDBCol>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
        </div>
        <Chart />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.event,
  categorie: state.categorie,
  authetification: state.authetification.user,
});

const mapDispatchToProps = (dispatch) => ({
  getAllEvents: () => dispatch(getEventsFromApi()),
  getAllCategorie: () => dispatch(getCategorieFromApi()),
  getUser: () => dispatch(getUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Event_list);
