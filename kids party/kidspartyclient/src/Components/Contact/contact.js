import React, { Component } from "react";
import { connect } from "react-redux";
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

  render() {
    return (
      <div>
        <h1 class="section-header">CONTACTEZ-NOUS</h1>

        <div class="contact-wrapper">
          <form
            class="form-horizontal"
            role="form"
            // method="post"
            // action="contact.php"
          >
            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Nom"
                  name="name"
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
            </div>

            <div class="form-group">
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="EMAIL"
                  name="email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
            </div>

            <textarea
              class="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              onChange={(e) => this.setState({ message: e.target.value })}
            ></textarea>
          </form>

          <div>
            <button
              onClick={() =>
                this.handleSubmit({
                  name: this.state.name,
                  email: this.state.email,
                  message: this.state.message,
                })
              }
            >
              Envoyer
            </button>
          </div>

          <div class="direct-contact-container">
            <ul class="contact-list">
              <li class="list-item">
                <i class="fa fa-map-marker fa-2x">
                  <span class="contact-text place">Tunisie</span>
                </i>
              </li>

              <li class="list-item">
                <i class="fas fa-phone fa-2x">
                  <span class="contact-text phone">
                    <a href="tel:1-212-555-5555" title="Give me a call">
                      (216) 26 75 88 99
                    </a>
                  </span>
                </i>
              </li>

              <li class="list-item">
                <i class="fas fa-envelope fa-2x">
                  <span class="contact-text gmail">
                    <a href="mailto:#" title="Send me an email">
                      kidsparty@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <hr></hr>
            <ul class="social-media-list">
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fab fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="contact-icon">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <hr></hr>

            <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
