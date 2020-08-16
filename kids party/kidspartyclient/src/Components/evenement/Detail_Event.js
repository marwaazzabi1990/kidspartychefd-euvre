import React, { Component } from "react";

import { Facebook, Twitter } from 'react-sharingbuttons';
import SFacebook from './facebook';
import './Detail_Event.css'

import { Label } from "reactstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

var url = "";
var shareText = "";

export default class Detail extends Component {
  state = {
    moviesingulier: {},
  };
  componentDidMount() { }
  render() {
    return (
      <div >
        <div className="detail_generale">

          <h1 className="titre">
            Titre <span className="tt"> {this.props.el.titre}</span>
          </h1>

          <div className="pos">
            <div>
              <img className="img-detail" src={"http://localhost:8080/" + this.props.el.affiche} />
            </div>

            <div className="detail">
              <h3>
                {" "}
                <Label className="label-decription">Date Debut</Label>
              </h3>
              <h2>{this.props.el.Date_Debut}</h2>
              <h3>
                {" "}
                <Label className="label-decription">Date Fin </Label>
              </h3>
              <h2>{this.props.el.Date_Fin}</h2>
              <h3>
                {" "}
                <Label className="label-decription">Adresse</Label>
              </h3>
              <h5>{this.props.el.Adresse}</h5>
              <h3>
                {" "}
                <Label className="label-decription">Description</Label>
              </h3>
              <p>{this.props.el.description}</p> <br />
              <h3>
                {" "}
                <Label className="label-decription">Prix</Label>
              </h3>
              <p>{this.props.el.prix}</p> <br />

              <div className="pos_detail">


              </div>






            </div>
          </div>
          <div >
            <SFacebook />
            <button className="btn-regarde">
              Participer
              </button>
          </div>

        </div >
      </div>
    );
  }
}
