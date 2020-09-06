import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    mailStatus: "",
  };

  // handleSubmit = (element) => {
  //   console.log(element);
  //   const form = axios.post("http://localhost:8080/api/form", element);
  // };
  SubmitForm = (namee, emaile, messagee) => {
    console.log("ss", this.state);
    const { name, email, message } = this.state;

    var xhr = new XMLHttpRequest();
    //GET A CALLBACK WHEN THE SERVER RESPONDS
    xhr.addEventListener("load", () => {
      //update  the emailStatus with the response
      console.log(xhr.responseText);
    });
    xhr.open(
      "GET",
      "http://api.ruvoctor.com/index.php?sendto=" +
        emaile +
        "&name" +
        namee +
        "message" +
        messagee
    );

    //send request
    xhr.send();

    //e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1 class="section-header">CONTACTEZ-NOUS Copy</h1>

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
                  value={this.state.name}
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
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
            </div>

            <textarea
              class="form-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
            ></textarea>

            <input
              id="submit"
              type="submit"
              value="SEND"
              onClick={() =>
                this.handleSubmit({
                  name: this.state.name,
                  email: this.state.email,
                  message: this.state.message,
                })
              }
            />
          </form>

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
