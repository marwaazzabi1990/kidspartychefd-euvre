import React, { Component } from "react";
import { connect } from "react-redux";
import image2 from "../../img-01.png";
import "./contact.css";
import { MDBAnimation } from "mdbreact";

import Axios from "axios";
class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleSubmit = (element) => {
    console.log("ffsdsd");
    console.log(element);
    Axios.post("http://localhost:8080/email", element);
    console.log("RECEVED");
  };
  // handleSubmit = (element) => {
  //   console.log(element);
  //   const form = axios.post("http://localhost:8080/api/form", element);
  // };

  render() {
    return (
      <div class="contact1">
        <div class="container-contact1">
          <div class="contact1-pic js-tilt" data-tilt>
            <MDBAnimation type="fadeInLeft" delay=".3s">
              {" "}
              <img src={image2} alt="IMG" />
            </MDBAnimation>
          </div>

          <form class="contact1-form validate-form">
            <span class="contact1-form-title">Contactez Nous</span>

            <div
              class="wrap-input1 validate-input"
              data-validate="Name is required"
            >
              <input
                class="input1"
                type="text"
                name="name"
                placeholder="Nom"
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <span class="shadow-input1"></span>
            </div>

            <div
              class="wrap-input1 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                class="input1"
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <span class="shadow-input1"></span>
            </div>

            <div
              class="wrap-input1 validate-input"
              data-validate="Message is required"
            >
              <textarea
                class="input1"
                name="message"
                placeholder="Message"
                onChange={(e) => this.setState({ message: e.target.value })}
              ></textarea>
              <span class="shadow-input1"></span>
            </div>

            <div class="container-contact1-form-btn">
              <button
                className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn_menu"
                onClick={() =>
                  this.handleSubmit({
                    name: this.state.name,
                    email: this.state.email,
                    message: this.state.message,
                  })
                }
              >
                <span>
                  Envoyer
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
