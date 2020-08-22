import React, { Component } from "react";
import { connect } from "react-redux";
import { FaStar } from "react-icons/fa";
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
import StartRating from "../StartRating";
import artistique from "../../artistique.jpg";
import culturel from "../../culturelle.jpg";
import sport from "../../sport.jpg";
// import Chart from "../shurt";
// import { Pie } from "react-chartjs-2";
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
                  <h1 className="titre-card">{el.titre}</h1>
                  <p className="p-carrousel">{el.description}</p>
                  <Link to="/inscription">
                    <MDBBtn className="btn_menu">Devenir partenaire</MDBBtn>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
          {/*Filtre   zone */}
        </div>
        {/* paragraphe Bienvenu */}
        <div className="bienvenu">
          <h2 className="bienveneu-h1">
            {" "}
            Bienvenu <span className="titre-speciale">Chez Kids</span> Party
          </h2>
          <p className="bienveneu-p">
            Le lorem ipsum est, en imprimerie, une suite de mots sans
            signification utilisée à titre provisoire pour calibrer une mise en
            page, le texte définitif venant remplacer le faux-texte dès qu'il
            est prêt ou que la mise en page est achevée. Généralement, on
            utilise un texte en faux latin, le Lorem ipsum ou Lipsum.
          </p>
        </div>
        {/* end of bienvenu paragraphe */}
        {/*zone de icone de categorie*/}
        <div className="pos-categorie">
          <div>
            <img className="img-categorie" src={artistique} />
            <h3>artistique</h3>
          </div>
          <div>
            <img className="img-categorie" src={culturel} />
            <h3>culture</h3>
          </div>
          <div>
            {" "}
            <img className="img-categorie" src={sport} />
            <h3>sport</h3>
          </div>
        </div>

        {/*end of zone de categorie */}
        {/*  zonne Event */}
        <h2 className="bienveneu-h2">
          {" "}
          Événements <span className="titre-speciale">A Venir</span>
        </h2>

        {/* <div className="flexselect">
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
              <option value="">Lieu</option>

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
              </div>*/}

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
              <MDBCol md="3">
                <div className="pos-card-map">
                  {/*ici card*/}

                  <MDBCard className="cardcolor">
                    <MDBCardImage
                      top
                      src={"http://localhost:8080/" + el.affiche}
                      overlay="white-slight"
                      hover
                      waves
                      alt="MDBCard image cap"
                    />
                    <MDBCardBody className="black-text rounded-bottom ">
                      <a
                        href="#!"
                        className="activator waves-effect waves-light mr-4"
                      >
                        <MDBIcon icon="share-alt" className="white-text" />
                      </a>
                      <MDBCardTitle>{el.titre}</MDBCardTitle>
                      <hr className="hr-light" />
                      <MDBCardText className="black-text">
                        <i class="fas fa-map-marker"></i>
                        {el.Adresse}
                        <br></br>
                        {el.nom_categorie}
                      </MDBCardText>
                      <a
                        href="#!"
                        className="black-text d-flex justify-content-end"
                      >
                        {/*rating  */}
                        {[...Array(5)].map((star, i) => {
                          const ratingValue = i + 1;
                          return (
                            <label>
                              <input
                                type="radio"
                                name="rating"
                                value={el.notes}
                                /*  onClick={(e) => {
                    this.setState({ rating: e.target.value });
                    this.sendNote(e.target.value);
                  }}*/
                              />{" "}
                              <FaStar
                                className="star"
                                color={
                                  ratingValue <= el.notes
                                    ? "#ffc107"
                                    : "#e4e5e9"
                                }
                                size={20}
                                onMouseEnter={(e) =>
                                  this.setState({ hover: ratingValue })
                                }
                                onMouseLeave={(e) =>
                                  this.setState({ hover: null })
                                }
                                //onClick={() => this.sendNote(this.state.rating)}
                              />
                            </label>
                          );
                        })}
                        {/*end rating*/}
                        <Link to={"/detail/" + el._id}>
                          {" "}
                          <a>
                            <span className="lien-detail">EN SAvoir PLUS</span>
                          </a>
                        </Link>
                      </a>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </MDBCol>
            ))}
        </div>
        {/*end of cards events*/}

        <div className="div-vide"></div>
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
