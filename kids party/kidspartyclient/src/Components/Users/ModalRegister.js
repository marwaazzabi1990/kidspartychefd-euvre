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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { addUserFromApi } from "../../Action/UserAction";
import axios from "axios";

class ModalRegister extends Component {
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

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
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
  /* validate = e => {
         e.preventDefault()
 
         // let nameError = '';
         let EmailError = '';
 
         //  let passworError = ''
         if (!this.state.email.includes('@')) {
             EmailError = 'invalid Email';
         }
         if (EmailError) {
             this.setState({ EmailError });
             return false;
         }
         console.log('DSDSDSD')
 
  */
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
      <MDBContainer>
        <MDBBtn className="btn_menu" color="danger" onClick={this.toggle(8)}>
          Inscrivez_vous
        </MDBBtn>

        <MDBModal
          isOpen={this.state.modal8}
          toggle={this.toggle(8)}
          fullHeight
          position="left"
        >
          <Form onSubmit={this.handelSubmit}>
            <MDBModalHeader toggle={this.toggle(8)} className="header_modal">
              Inscription
            </MDBModalHeader>
            <MDBModalBody>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Nom </Label>
                    <Input
                      type="text"
                      required
                      name="nom"
                      id="nom"
                      placeholder=" nom"
                      onChange={(e) => this.setState({ nom: e.target.value })}
                    />
                    <span style={{ color: "red" }}>{this.state.nameError}</span>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Prenom </Label>
                    <Input
                      type="text"
                      required
                      name="prenom"
                      id="prenom"
                      placeholder="prenom"
                      onChange={(e) =>
                        this.setState({ prenom: e.target.value })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Établissement</Label>
                    <Input
                      type="text"
                      requiredname="établissement"
                      id="établissement"
                      placeholder="nom d'établissement"
                      onChange={(e) =>
                        this.setState({ établissement: e.target.value })
                      }
                    />
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">logo d'etablissement</Label>

                    <Input
                      type="file"
                      name="photos"
                      id="photos"
                      onChange={this.fileSelectedHandler}
                    />
                    <MDBBtn color="dark" onClick={this.uploadHandler}>
                      Upload
                    </MDBBtn>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="text"
                      required
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
                    <Label for="exampleEmail">Username</Label>
                    <Input
                      type="text"
                      required
                      name="username"
                      id="username"
                      placeholder="username"
                      onChange={this.handelChange}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      type="password"
                      required
                      name="password"
                      id="examplePassword"
                      placeholder="password placeholder"
                      onChange={this.handelChange}
                    />
                    {this.state.passworError ? (
                      <span span style={{ fontSize: 12, color: "red" }}>
                        {this.state.passworError}
                      </span>
                    ) : null}
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input
                  type="text"
                  name="address"
                  required
                  id="exampleAddress"
                  onChange={(e) => this.setState({ address: e.target.value })}
                />
              </FormGroup>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle(8)}>
                Close
              </MDBBtn>
              <MDBBtn
                color="primary"
                onClick={() => {
                  this.props.AddUser({
                    nom: this.state.nom,
                    prenom: this.state.prenom,
                    établissement: this.state.établissement,
                    photos: this.state.selectedFile.name,
                    email: this.state.email,
                    username: this.state.username,
                    password: this.state.password,
                    adresse: this.state.adresse,
                    role: "Professionnel",
                  });
                }}
              >
                {" "}
                Envoyer
              </MDBBtn>
            </MDBModalFooter>
          </Form>
        </MDBModal>
      </MDBContainer>
    );
  }
}
const mapStateToProps = (state) => ({
  event: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  AddUser: (el) => dispatch(addUserFromApi(el)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ModalRegister);

/* this.props.AddUser({
                                        nom: this.state.nom,
                                        prenom: this.state.prenom,
                                        établissement: this.state.établissement,
                                        photos: this.state.photos,
                                        email: this.state.email,
                                        username: this.state.username,
                                        password: this.state.password,
                                        adresse: this.state.adresse



                                    })*/
