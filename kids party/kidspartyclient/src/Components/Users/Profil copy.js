import React, { Component } from "react";
import { connect } from "react-redux";
import { modifUserFromApi } from "../../Action/UserAction";
import { getUser, logout } from "../../Action/AuthentificationAction";

export class Profile extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    if (this.props.authetification) {
      console.log("marwaaa", this.props.authetification);
    }
    return (
      <div>
        <center>
          <h1 className="bienveneu-h1">
            Mon <span className="titre-speciale">Profil</span>
          </h1>
        </center>{" "}
        <div class="container">
          <div class="row">
            <div class="col-sm-2 col-md-2">
              <img
                className="img-profil"
                src={
                  this.props.authetification &&
                  "http://localhost:8080/" + this.props.authetification.photos
                }
                alt=""
                className="img-profile"
              />
            </div>
            <div class="col-sm-4 col-md-4 ">
              <div className="row">
                {" "}
                <p>
                  {" "}
                  <span className="titre-speciale2">Nom : </span>
                  <span>
                    {this.props.authetification &&
                      this.props.authetification.nom}
                  </span>
                </p>
              </div>
              <div className="row">
                <p>
                  {" "}
                  <span className="titre-speciale2">Prenom: </span>{" "}
                  <i class="glyphicon glyphicon-envelope"></i>{" "}
                  {this.props.authetification &&
                    this.props.authetification.prenom}
                </p>
              </div>
              <div className="row">
                <p>
                  {" "}
                  <span className="titre-speciale2">établissement: </span>{" "}
                  <i class="glyphicon glyphicon-envelope"></i>{" "}
                  {this.props.authetification &&
                    this.props.authetification.établissement}
                </p>
              </div>

              <div className="row">
                <p>
                  {" "}
                  <span className="titre-speciale2">Email: </span>{" "}
                  <i class="glyphicon glyphicon-envelope"></i>{" "}
                  {this.props.authetification &&
                    this.props.authetification.email}
                </p>
              </div>

              <div className="row">
                <p>
                  {" "}
                  <span className="titre-speciale2">Username: </span>{" "}
                  <i class="glyphicon glyphicon-envelope"></i>{" "}
                  {this.props.authetification &&
                    this.props.authetification.username}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authetification: state.authetification.user,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
  Modifieruser: (el) => dispatch(modifUserFromApi(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
/*
<h2>nous somme Profile</h2>
        <p>{this.props.authetification && this.props.authetification.role}</p>
        <p>{this.props.authetification && this.props.authetification.nom}</p>
        <p>
          {this.props.authetification &&
            this.props.authetification.établissement}
        </p>
        <p>{this.props.authetification && this.props.authetification.email}</p>
        img
        <img
          src={
            this.props.authetification &&
            "http://localhost:8080/" + this.props.authetification.photos
          }
        />*/