import React, { Component } from "react";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login";
import "./log.css";
import { login } from "./../../Action/AuthentificationAction";
//import { addSessionInApi } from "./../../Action/SessionAction";
class logIn2 extends Component {
  render() {
    return (
      <di>
        <div class="wrapper">
          <div class="container">
            <div class="col-left">
              <div class="login-text">
                <h2>
                  Kids <span className="titre-speciale">PARTY</span>{" "}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eget eros dapibus, ultricies tellus vitae, consectetur tortor.
                  Etiam rutrum placerat
                </p>
                <a class="btn" href="">
                  Read More
                </a>
              </div>
            </div>
            <div class="col-right">
              <div class="login-form">
                <h2>Login</h2>
                <form>
                  <p>
                    <input type="text" placeholder="Username" required />
                  </p>
                  <p>
                    <input type="password" placeholder="Password" required />
                  </p>
                  <p>
                    <input class="btn" type="submit" value="Sing In" />
                  </p>
                  <p>
                    <a href="">Forget password?</a>
                    <a href="">Create an account.</a>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div class="credit">
            Designed by <a href="https://htmlcodex.com">HTML Codex</a>
          </div>
        </div>
      </di>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  // getAllUsers: () => dispatch(getUsersFromApi()),
  //  AddSession: (session) => dispatch(addSessionInApi(session)),
  login: (userInfo) => dispatch(login(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(logIn2);
