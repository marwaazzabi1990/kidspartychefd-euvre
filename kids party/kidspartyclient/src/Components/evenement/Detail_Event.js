import React, { Component } from "react";

import { Facebook, Twitter } from "react-sharingbuttons";
import SFacebook from "./facebook";

import { MDBBtn, MDBIcon } from "mdbreact";
import "./Detail_Event.css";

import { Label } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import StartRating from "../StartRating";

var url = "";
var shareText = "";

export default class Detail extends Component {
  state = {
    moviesingulier: {},
  };
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1 className="titre">
          Titre <span className="tt"> {this.props.el.titre}</span>
        </h1>

        <div className="pos_detail ">
          <div>
            <img
              className="img-detail"
              src={"http://localhost:8080/" + this.props.el.affiche}
            />
          </div>
          <StartRating el={this.props.el} />
          <div>
            <p>
              {this.props.el.description}
              {this.props.el.Date_debut}
            </p>
          </div>
          <MDBBtn className="btn_menu2">Participer</MDBBtn>
        </div>
        <div className="div-vide"></div>

        <div className="div-vide"></div>
      </div>
    );
  }
}
