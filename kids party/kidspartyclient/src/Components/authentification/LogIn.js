import React, { Component } from "react";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login";

import { login } from "./../../Action/AuthentificationAction";
//import { addSessionInApi } from "./../../Action/SessionAction";

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

  // console.log(formErrors);
  //validation from errors being empty
  // Object.values(formErrors).forEach((val) => {
  //   val.length > 0 && (valid = false);
  // });
  // //validation the form was filled out
  // /*Object.values(rest).forEach((val) => {
  // val == null && (valid = false);
  // });*/
  return valid;
};
class logIn extends Component {
  state = {
    modal: false,
    //  email: null,
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
    // console.log("name", name);
    // console.log("value", value);
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
      <MDBContainer>
        <button
          className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn_menu1 "
          onClick={this.toggle}
        >
          Connexion
        </button>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}></MDBModalHeader>
          <MDBModalBody>
            <h2 className="text_h3">Connexion</h2>
            <MDBBtn color="danger" className="btsocial">
              <i class="fab fa-google"></i>
            </MDBBtn>
            <form>
              <div className="grey-text">
                <MDBInput
                  label="Type your email"
                  icon="envelope"
                  type="email"
                  validate
                  error="wrong"
                  name="email"
                  success="right"
                  onChange={this.handleChange}
                  className="color"
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
                <br></br>

                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  name="password"
                  validate
                  onChange={this.handleChange}
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
              </div>
            </form>
            <div></div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>
              Close
            </MDBBtn>
            <MDBBtn
              color="primary"
              onClick={
                (this.handelSubmit,
                () =>
                  this.props.login({
                    email: this.state.email,
                    password: this.state.password,
                  }))
              }
            >
              Save changes
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  // getAllUsers: () => dispatch(getUsersFromApi()),
  //  AddSession: (session) => dispatch(addSessionInApi(session)),
  login: (userInfo) => dispatch(login(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(logIn);

/*<div className="pos_conexion">
 onClick={() =>
                this.props.login({
                  email: this.state.email,
                  password: this.state.password,
                })
              }
    <h2>Entrez votre informations</h2>
    <div>
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol >
                        <form>

                            <div className="grey-text">
                                <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" onChange={(e) => this.setState({ email: e.target.value })} />
                                <MDBInput label="Type your password" icon="lock" group type="password" validate onChange={(e) => this.setState({ password: e.target.value })} />
                            </div>
                            <div className="text-center">
                                <MDBBtn onClick={
                                    () =>
                                        this.props.login({
                                            email: this.state.email,
                                            password: this.state.password

                                        })}
                                >Connexion</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    </div></div >
            )
        }



    }*/
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
