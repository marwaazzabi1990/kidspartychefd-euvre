import React, { Component } from "react";
import { connect } from "react-redux";
import { FaStar } from "react-icons/fa";
import { getEventsFromApi } from "../../Action/EventAction.js";
import { getCategorieFromApi } from "../../Action/CategorieAction.js";
import { getUser } from "../../Action/AuthentificationAction";
import { addRservationInApi } from "../../Action/RservationAction.js";

import { MDBBtn, MDBIcon } from "mdbreact";
import "./Detail_Event.css";

import { Label } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StartRating from "../StartRating";
import Axios from "axios";

var url = "";
var shareText = "";

class Detail extends Component {
  state = {
    event: "",
  };
  componentDidMount() {
    console.log(this.props.match.params.id);
    Axios.get(
      `http://localhost:8080/event/findeventbyid/${this.props.match.params.id}`
    ).then((res) => {
      this.setState({ event: res.data });
      console.log("fffghhghgh", this.state.event);
    });
  }

  render() {
    const userID = this.props.authetification && this.props.authetification._id;
    const useremail =
      this.props.authetification && this.props.authetification.email;

    /*  console.log("user", user);*/
    return (
      <div>
        <center>
          <h1 className="titre">
            Nom d'Evenement:{" "}
            <span className="titre-speciale"> {this.state.event.titre}</span>
          </h1>
        </center>
        <div class="row top-detail">
          <div class="col-sm-2 col-md-2">
            <img
              className="img-profil"
              src={"http://localhost:8080/" + this.state.event.affiche}
              alt=""
              className="img-profile"
            />
          </div>
          <div
            class="col-sm-4 col-md-4 "
            style={{ fontSize: 12, marginRight: 400 }}
          >
            <div className="row">
              <p>
                {" "}
                <span className="titre-speciale2">titre : </span>
                <span>{this.state.event.titre}</span>
              </p>
            </div>
            <div className="row" style={{ fontSize: 12, marginRight: 20 }}>
              <p>
                {" "}
                <span className="titre-speciale2">Adresse: </span>{" "}
                <i class="glyphicon glyphicon-envelope"></i>{" "}
                {this.state.event.Adresse}
              </p>
            </div>
            <div className="row" style={{ fontSize: 12, marginLeft: 10 }}>
              <p>
                {" "}
                <span className="titre-speciale2">Date Debut: </span>{" "}
                <i class="glyphicon glyphicon-envelope"></i>{" "}
                {this.state.event.Date_Debut}
              </p>
            </div>
            <div className="row">
              <p>
                {" "}
                <span className="titre-speciale2">Date Fin: </span>{" "}
                <i class="glyphicon glyphicon-envelope"></i>{" "}
                {this.state.event.Date_fin}
              </p>
            </div>

            <div className="row" style={{ fontSize: 12, marginRight: 10 }}>
              <p>
                {" "}
                <span className="titre-speciale2 user">Description: </span>{" "}
                {this.state.event.description}
              </p>
            </div>

            <div className="row" style={{ fontSize: 12, marginLeft: 90 }}>
              <p>
                {" "}
                <span className="titre-speciale2 user ">Notes: </span>
                {/*rating  */}
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label>
                      <input
                        type="radio"
                        name="rating"
                        value={this.state.event.notes}
                      />
                      <FaStar
                        className="star"
                        color={
                          ratingValue <= this.state.event.notes
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
              <p>
                <div className={this.props.authetification ? "disabled" : ""}>
                  <Link to="/Registervisiteur">
                    {" "}
                    Si vous voulez donnez votre note Inscrivez-vous{" "}
                  </Link>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className={this.props.authetification ? "" : "disabled"}>
                  <span className="detail">
                    Donnez_votre notes
                    <StartRating el={this.state.event} />
                  </span>
                </div>
              </p>
              <p>
                {this.props.authetification ? (
                  <button
                    style={{ fontSize: 12, marginLeft: 600, marginTop: -200 }}
                    className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn_menu"
                    onClick={() =>
                      this.props.addRservation({
                        idEvent: this.state.event._id,
                        titreEvent: this.state.event.titre,
                        IdUser: userID,
                        EmailUser: useremail,
                        status: "en attente",
                        show: true,
                      })
                    }
                  >
                    {" "}
                    Reserver
                  </button>
                ) : (
                  <Link to="/Registerparticipant">
                    {" "}
                    <button className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn_menu">
                      {" "}
                      Reserver
                    </button>
                  </Link>
                )}
              </p>
            </div>
          </div>
        </div>
        {/* {/* rating */}
        {/*  {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={this.state.event.notes}
                onClick={(e) => {
                  this.setState({ rating: e.target.value });
                  this.sendNote(e.target.value);
                }}
              />{" "}
              <FaStar
                className="star"
                color={
                  ratingValue <= this.state.event.notes ? "#ffc107" : "#e4e5e9"
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
    );
  }
}
const mapStateToProps = (state) => ({
  event: state.event,
  categorie: state.categorie,
  authetification: state.authetification.user,
  rservation: state.rservation,
});

const mapDispatchToProps = (dispatch) => ({
  getAllEvents: () => dispatch(getEventsFromApi()),
  getAllCategorie: () => dispatch(getCategorieFromApi()),
  getUser: () => dispatch(getUser()),
  addRservation: (el) => dispatch(addRservationInApi(el)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Detail);

{
  /*
        <center>
          <h1 className="titre">
            Nom d'Evenement:{" "}
            <span className="titre-speciale"> {this.props.el.titre}</span>
          </h1>
        </center>

        {/* 
        <div class="container"> */
}
{
  /*} <div class="row top-detail">
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
            <div className="row"></div>

            <div className="row">
              <p>
                {" "}
                <span className="titre-speciale2 user">Description: </span>{" "}
                {this.props.el.description}
              </p>
            </div>

            <div className="row">
              <p>
                {" "}
                <span className="titre-speciale2 user ">Rating: </span>
                {/*rating  */
}
{
  /*  {[...Array(5)].map((star, i) => {
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
  /*/>{" "}
                    {/*}  <FaStar
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
              <p>
                <div className={this.props.authetification ? "disabled" : ""}>
                  <Link to="/Registervisiteur">
                    {" "}
                    Si vous voulez donnez votre note Inscrivez-vous{" "}
                  </Link>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className={this.props.authetification ? "" : "disabled"}>
                  <span className="detail">
                    Donnez_votre notes
                    <StartRating el={this.props.el} />
                  </span>
                </div>
              </p>
              <p>
                <button
                  className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn-color1"
                  onClick={() =>
                    this.props.addRservation({
                      idEvent: this.props.el._id,
                      IdUser: user,
                      status: "en attente",
                      show: true,
                    })
                  }
                >
                  {" "}
                  Participer
                </button>
              </p>
            </div>
          </div>
        </div>

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
         {/*} })}{*/
  /*}}
        {/* </div> {*/
  /*}}}*/
}
