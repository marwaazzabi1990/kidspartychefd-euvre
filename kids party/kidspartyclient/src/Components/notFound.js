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
    return <h1>404 Not found</h1>;
  }
}
export default NotFOUND;
