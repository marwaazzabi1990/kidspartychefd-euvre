import React, { Component } from "react";
import { connect } from "react-redux";
import { FaStar } from "react-icons/fa";
import Moment from "react-moment";
import "./event_list.css";
import { getEventsFromApi } from "../../Action/EventAction.js";
import { getCategorieFromApi } from "../../Action/CategorieAction.js";
import { getUser } from "../../Action/AuthentificationAction";
import { Carousel, InputGroup, FormControl, Form } from "react-bootstrap";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";

import ModalDetail from "./Detail_Event";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FaSearch, FaUsers } from "react-icons/fa";
import RegisterModal from "../Users/ModalRegister";
import { Select } from "semantic-ui-react";
import StartRating from "../StartRating";
import artistique from "../../artistique2.png";
import culturel from "../../culturelle.jpg";
import sport from "../../sport.jpeg";

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
  // categorie = () => {
  //   this.setState({categorie:})
  // };
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
    console.log(this.props.event);
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
                  {/* <h1 className="titre-card">{el.titre}</h1>
                  <p className="p-carrousel">{el.description}</p>
                  <Link to="/inscription">
                    <MDBBtn className="btn_menu">Devenir partenaire</MDBBtn>
                  </Link> */}
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
          <div className="pos_categorie_img">
            <a onClick={(e) => this.setState({ categorie: artistique })}>
              <div>
                <img className="img-categorie" src={artistique} />
              </div>
              <div>
                <h3 class="text_h3">artistique</h3>
              </div>
            </a>
          </div>
          <div>
            {" "}
            <a>
              <img className="img-categorie" src={sport} />
              <h3 class="text_h3">sport</h3>
            </a>
          </div>
          <div>
            <a>
              <img className="img-categorie" src={culturel} />
              <h3 class="text_h3"> culture</h3>
            </a>
          </div>
        </div>

        {/*end of zone de categorie */}
        {/*  zonne Event */}
        <h2 className="bienveneu-h2">
          {" "}
          Événements <span className="titre-speciale">A Venir</span>
        </h2>

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
            .slice(event.length - 2, event.length)
            .map((el, i) => (
              <MDBCol md="3">
                <div className="pos-card-map">
                  {/*ici card*/}
                  <MDBCol>
                    <div className="pos-card-map">
                      <MDBCard className="card">
                        <MDBCardImage
                          className="img-fluid"
                          src={"http://localhost:8080/" + el.affiche}
                        />
                        <MDBCardBody>
                          <MDBCardTitle>{el.titre}</MDBCardTitle>
                          <MDBCardText>
                            <div className="rating">
                              {/*rating  */}
                              {[...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;
                                return (
                                  <label>
                                    <input
                                      type="radio"
                                      name="rating"
                                      value={el.notes}
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
                            </div>
                          </MDBCardText>
                          <MDBBtn>
                            {" "}
                            <Link to={"/detail/" + el._id}>
                              {" "}
                              <a>
                                <span style={{ color: "white" }}>
                                  {" "}
                                  EN SAvoir PLUS
                                </span>
                              </a>
                            </Link>
                          </MDBBtn>
                        </MDBCardBody>
                      </MDBCard>

                      {/*ici card*/}
                    </div>
                  </MDBCol>
                </div>
                {/*end of cards events*/}
              </MDBCol>
            ))}
        </div>
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
