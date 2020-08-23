import React, { Component } from "react";
import { connect } from "react-redux";
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
import { getEventsFromApi } from "../../Action/EventAction.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaSearch, FaUsers } from "react-icons/fa";
import { Carousel, InputGroup, FormControl, Form } from "react-bootstrap";
var categorie = [];
var newArray = [];
class Eventlist extends Component {
  state = {
    Categorie: "",
    Adresse: "",
    titre: "",
  };
  componentDidMount() {
    this.props.getAllEvents();
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
    return (
      <div>
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
        </div>

        <div className="pos_card">
          {this.props.event
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
            .map((el) => (
              <MDBCol md="3">
                <div>
                  {/*ici card*/}

                  <MDBCard>
                    <MDBCardImage
                      top
                      src={"http://localhost:8080/" + el.affiche}
                      overlay="white-slight"
                      hover
                      waves
                      alt="MDBCard image cap"
                    />
                    <MDBCardBody className="default-color black-text rounded-bottomcardcolor">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.event,
  // categorie: state.categorie,
  // authetification: state.authetification.user,
});

const mapDispatchToProps = (dispatch) => ({
  getAllEvents: () => dispatch(getEventsFromApi()),
  //   getAllCategorie: () => dispatch(getCategorieFromApi()),
  //   getUser: () => dispatch(getUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Eventlist);
