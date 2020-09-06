import React, { Component } from "react";
import { connect } from "react-redux";
import { FaStar } from "react-icons/fa";
import { getEventsFromApi } from "../../Action/EventAction.js";
import { getCategorieFromApi } from "../../Action/CategorieAction.js";
import { getUser } from "../../Action/AuthentificationAction";

import { Facebook, Twitter } from "react-sharingbuttons";
import SFacebook from "./facebook";

import { MDBBtn, MDBIcon } from "mdbreact";
import "./Detail_Event.css";

import { Label } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StartRating from "../StartRating";

var url = "";
var shareText = "";

class Detail extends Component {
  state = {
    moviesingulier: {},
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <center>
          <h1 className="titre">
            Titre <span className="titre-speciale"> {this.props.el.titre}</span>
          </h1>
        </center>

        <div class="container">
          <div class="row">
            <div class="col-sm-2 col-md-2">
              <img
                className="img-profil"
                src={"http://localhost:8080/" + this.props.el.affiche}
                alt=""
                className="img-profile"
              />
            </div>
            <div class="col-sm-4 col-md-4 ">
              <div className="row">
                <p>
                  {" "}
                  <span className="titre-speciale2">titre : </span>
                  <span>{this.props.el.titre}</span>
                </p>
              </div>
              <div className="row">
                <p>
                  {" "}
                  <span className="titre-speciale2">Adresse: </span>{" "}
                  <i class="glyphicon glyphicon-envelope"></i>{" "}
                  {this.props.el.Adresse}
                </p>
              </div>
              <div className="row">
                {/* <p>
                    {" "}
                    <span className="titre-speciale2">
                      établissement:{" "}
                    </span>{" "}
                    <i class="glyphicon glyphicon-envelope"></i>{" "}
                    {el.établissement}
                  </p> */}
              </div>

              <div className="row">
                <p>
                  {" "}
                  <span className="titre-speciale2">Description: </span>{" "}
                  {this.props.el.description}
                </p>
              </div>

              <div className="row">
                <p>
                  {" "}
                  <span className="titre-speciale2 ">Rating: </span>
                  {/*rating  */}
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                      <label>
                        <input
                          type="radio"
                          name="rating"
                          value={this.props.el.notes}
                          /*  onClick={(e) => {
this.setState({ rating: e.target.value });
this.sendNote(e.target.value);
}}*/
                        />{" "}
                        <FaStar
                          className="star"
                          color={
                            ratingValue <= this.props.el.notes
                              ? "#ffc107"
                              : "#e4e5e9"
                          }
                          size={20}
                          onMouseEnter={(e) =>
                            this.setState({ hover: ratingValue })
                          }
                          onMouseLeave={(e) => this.setState({ hover: null })}
                          //onClick={() => this.sendNote(this.state.rating)}
                        />
                      </label>
                    );
                  })}
                </p>{" "}
                {/* <div className="pos-btn">
                  <ModifUser el={el} />
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className={this.props.authetification ? "" : "disabled"}>
          <h3>Donnez_votre avis</h3>
          <StartRating el={this.props.el} />
          {/* rating 
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label>
                <input
                  type="radio"
                  name="rating"
                  value={this.props.el.notes}
                  onClick={(e) => {
                    this.setState({ rating: e.target.value });
                    this.sendNote(e.target.value);
                  }}
                />{" "}
                <FaStar
                  className="star"
                  color={
                    ratingValue <= this.props.el.notes ? "#ffc107" : "#e4e5e9"
                  }
                  size={20}
                  onMouseEnter={(e) => this.setState({ hover: ratingValue })}
                  onMouseLeave={(e) => this.setState({ hover: null })}
                  onClick={() => this.sendNote(this.state.rating)}
                />
              </label>
            );
          })}*/}
        </div>

        <div className="div-vide"></div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
