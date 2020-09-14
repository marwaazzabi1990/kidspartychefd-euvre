import React, { Component } from "react";
import { connect } from "react-redux";

import "../authentification/log.css";

import { login } from "./../../Action/AuthentificationAction";
import { addUserFromApi } from "../../Action/UserAction";

import {
  MDBContainer,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBBtn,
} from "mdbreact";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.§#$%&'*+/=?^-{|}-]+@[A-Za-z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
var valid = false;
const formValid = ({ formErrors }) => {
  let valid = true;

  return valid;
};
class ModalRegistervisiteur extends Component {
  state = {
    modal: false,
    // email: null,
    // password: null,
    formErrors: { email: "", password: "" },
    message: "",
  };
  handelSubmit = (e) => {
    e.preventDefault();

    console.log(this.state.formErrors);
    if (
      this.state.formErrors.email.length == 0 &&
      this.state.formErrors.password.length == 0
    ) {
      console.log("email", this.state.email, "password", this.state.password);

      valid = true;
      console.log(valid);
    } else {
      console.log("form invalid");
    }
  };
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case "email":
        formErrors.email =
          emailRegex.test(value) && value.length > 0
            ? ""
            : "invalid email adresse";
        break;
      case "password":
        formErrors.password =
          value.length < 4 && value.length > 0
            ? "minimum 4 characters requires"
            : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div>
        <div class="wrapper">
          <div class="container">
            <div class="col-left">
              <div class="login-text">
                <h2>Kids PARTY </h2>
                <p>
                  Votre avis ce nous concerne <br></br>Inscrivez-vous et donnez
                  votre avis sur nous evenements!!!!
                </p>
                <a class="btn" href="">
                  Read More
                </a>
              </div>
            </div>
            <div class="col-right">
              <div class="login-form">
                <h2>Inscription</h2>

                <p>
                  <input
                    type="text"
                    placeholder="Username"
                    required
                    error="wrong"
                    name="email"
                    success="right"
                    onChange={this.handleChange}
                  />
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                </p>
                <p>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    validate
                    onChange={this.handleChange}
                    required
                  />
                  {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )}
                </p>
                <p>
                  <button
                    className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn-color1"
                    className="btn btn_menu2"
                    onClick={() => {
                      if (this.state.email == "") {
                        alert("email vide");
                      } else if (
                        this.state.email !== "" &&
                        !emailRegex.test(this.state.email)
                      ) {
                        alert("format email invalid");
                      } else if (this.state.password.length < 4) {
                        alert("mot de passe  invalid");
                      } else {
                        this.props.AddUser({
                          nom: "visiteur",

                          email: this.state.email,

                          password: this.state.password,
                          adresse: "visiteur",
                          role: "visiteur",
                        });
                      }
                    }}
                  >
                    Inscription
                  </button>
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
  users: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  AddUser: (el) => dispatch(addUserFromApi(el)),

  login: (userInfo) => dispatch(login(userInfo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalRegistervisiteur);

/*
  {/* onChange={(e) => this.setState({ email: e.target.value })}*/
/*   onChange={(e) => this.setState({ password: e.target.value })}*/
/*<GoogleLogin
clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
buttonText="Login"
onSuccess={responseGoogle}
onFailure={responseGoogle}
cookiePolicy={'single_host_origin'}
/>*/
