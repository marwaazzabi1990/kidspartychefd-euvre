import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleSubmit = (element) => {
    console.log(element);
    const form = axios.post("http://localhost:8080/api/form", element);
  };

  render() {
    return (
      <div className="body">
        <h1> formulaire de contact</h1>
        <form className="test-mailing">
          <h1>Let's see if it works</h1>
          <input
            type="text"
            name="name"
            onChange={(e) => this.setState({ name: e.target.value })}
          ></input>
          <input
            type="text"
            name="email"
            onChange={(e) => this.setState({ email: e.target.value })}
          ></input>
          <div>
            <textarea
              id="test-mailing"
              name="test-mailing"
              onChange={(e) => this.setState({ message: e.target.value })}
              placeholder="Post some lorem ipsum here"
              required
              value={this.state.feedback}
              style={{ width: "100%", height: "150px" }}
            />
          </div>
          <input
            type="button"
            value="Submit"
            className="btn btn--submit"
            onClick={() =>
              this.handleSubmit({
                name: this.state.name,
                email: this.state.email,
                message: this.state.message,
              })
            }
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
