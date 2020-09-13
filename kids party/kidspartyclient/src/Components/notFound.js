import React, { Component } from "react";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

class NotFOUND extends Component {
  render() {
    return (
      <div>
        <h1>404 Not found</h1>;
        <img src="https://media.istockphoto.com/photos/error-404-picture-id537812190" />
        ;
      </div>
    );
  }
}
export default NotFOUND;
