import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

import { addUserFromApi } from "../../Action/UserAction";
import axios from "axios";

class Register extends Component {
  state = {
    modal8: false,
    modal9: false,
    email: "",
    password: "",
    nameError: "",
    EmailError: "",

    passworError: "",
    mialetat: "true",
    passetat: "true",
    selectedFile: null,
  };

  handelChange = (e) => {
    /*ajout state emeil et controle de champs*/

    if (e.target.name === "email") {
      this.setState({
        email: e.target.value,
      });
      //  console.log('email', this.state.email)
      if (!this.state.email.includes("@")) {
        this.setState({ EmailError: "invalid Email", emialetat: false });

        //   console.log(this.state.EmailError)
        console.log("email", this.state.emialetat);
      } else {
        this.setState({ EmailError: "" });
        console.log("emailrroris valid", this.state.EmailError);
      }
    } /* ajout password et  controle sur le champs */

    if (e.target.name === "password") {
      this.setState({
        password: e.target.value,
      });

      if (this.state.password.length < 7) {
        this.setState({
          passworError: "password must be more 7",
          passetat: "false",
        });

        //  console.log('passworError valid', this.state.passworError)
        console.log("passwetat", this.state.passetat);
      } else {
        this.setState({ passworError: "" });
        console.log("passworError valid", this.state.passworError);
      }
    } else if (e.target.name === "username") {
      /* ajout de username */
      this.setState({
        username: e.target.value,
      });
      console.log("username", this.state.username);
    }
  };

  //upload logo

  fileSelectedHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };
  uploadHandler = () => {
    const fd = new FormData();
    {
      /*http://localhost:2000/public*/
    }
    fd.append("file", this.state.selectedFile);
    //console.log("img", Object(fd).length)
    axios
      .post("http://localhost:8080/image", fd)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 className="bienveneu-h2">Inscription </h1>
        <div>
          <MDBModalBody>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Nom </Label>
                  <Input
                    type="text"
                    required
                    name="nom"
                    style={{ fontSize: 12, width: 400 }}
                    id="nom"
                    placeholder=" nom"
                    onChange={(e) => this.setState({ nom: e.target.value })}
                  />
                  <span style={{ color: "red" }}>{this.state.nameError}</span>
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="text"
                    required
                    style={{ fontSize: 12, width: 400 }}
                    name="email"
                    id="email"
                    placeholder="email"
                    onChange={this.handelChange}
                  />
                  {this.state.EmailError ? (
                    <span span style={{ fontSize: 12, color: "red" }}>
                      {this.state.EmailError}
                    </span>
                  ) : null}
                </FormGroup>
              </Col>

              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">Mot de passe</Label>
                  <Input
                    type="password"
                    required
                    style={{ fontSize: 12, width: 400 }}
                    name="password"
                    id="examplePassword"
                    placeholder="mot de passe"
                    onChange={this.handelChange}
                  />
                  {this.state.passworError ? (
                    <span span style={{ fontSize: 12, color: "red" }}>
                      {this.state.passworError}
                    </span>
                  ) : null}
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label for="exampleAddress">Address</Label>
                  <Input
                    type="text"
                    style={{ fontSize: 12, width: 400 }}
                    name="address"
                    required
                    id="exampleAddress"
                    placeholder="Adresse"
                    onChange={(e) => this.setState({ adresse: e.target.value })}
                  />
                </FormGroup>
              </Col>
            </Row>
          </MDBModalBody>
          <MDBModalFooter>
            <button
              style={{ fontSize: 12, marginRight: 400 }}
              className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn_menu11"
              onClick={() => {
                this.props.AddUser({
                  nom: this.state.nom,

                  email: this.state.email,

                  password: this.state.password,
                  adresse: this.state.adresse,
                  role: "professionnel",
                });
              }}
            >
              {" "}
              Envoyer
            </button>
          </MDBModalFooter>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  event: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  AddUser: (el) => dispatch(addUserFromApi(el)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Register);
