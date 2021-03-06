import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsersFromApi, modifUserFromApi } from "../../Action/UserAction";
import { getUser, logout } from "../../Action/AuthentificationAction";
import { MDBIcon } from "mdbreact";
import ModifUser from "./Modalusermodif";

export class Profile extends Component {
  state = {
    etat: "",
  };
  componentDidMount() {
    this.props.getUser();
    this.props.getAllUsers();
  }
  change = () => {
    this.setState({ etat: "modifier" });
    console.log("je chang", this.state.etat);
  };
  render() {
    // if (this.props.authetification) {
    //   console.log("marwaaa", this.props.authetification);
    // }
    // const au = this.props.authetification && this.props.authetification;
    // console.log("nn", au);

    const { user } = this.props;
    console.log("props", user);
    const users = user.filter(
      (el) =>
        this.props.authetification && el._id === this.props.authetification._id
    );

    console.log("user modifier", users);
    return (
      <div>
        <h1 className="bienveneu-h2">
          Mon <span className="titre-speciale">Profil</span>
        </h1>

        <div>
          {users.map((el, i) => (
            <div class="row">
              <div class="col-sm-2 col-md-2">
                <img
                  className="img-profil"
                  src="https://t4.ftcdn.net/jpg/03/02/47/35/240_F_302473550_lDL13a98S1Hz0jDWJXOznW29iZmrPW80.jpg"
                  alt=""
                  className="img-profile"
                />
              </div>
              <div class="col-sm-4 col-md-4 ">
                <div className="row">
                  <p>
                    {" "}
                    <span className="titre-speciale2">Nom : </span>
                    <span>{el.nom}</span>
                  </p>
                </div>
                <div className="row">
                  <p>
                    {" "}
                    <span className="titre-speciale2">Email: </span>{" "}
                    <i class="glyphicon glyphicon-envelope"></i> {el.email}
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
                    <span className="titre-speciale2">Adresse: </span>{" "}
                    {el.adresse}
                  </p>
                </div>

                <div className="row">
                  <div className="pos-btn">
                    <ModifUser el={el} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <form className={this.state.etat === "modifier" ? null : "disabled"}>
            <label>nom</label>
            <input
              type="text"
              defaultValue={
                this.props.authetification && this.props.authetification.nom
              }
            />
          </form>
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
  getAllUsers: () => dispatch(getUsersFromApi()),
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
