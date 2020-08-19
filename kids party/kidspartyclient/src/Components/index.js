import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../logo.png";
import Event_list from "./evenement/event_list";
import Footer from "./Footer";
import GererEvenement from "./evenement/Gerrer_evenements";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import LogIn from "./authentification/LogIn";
import Register from "./Users/Register";
import Users from "./Users/users_professionnel";
import Detail from "./evenement/Detail_Event";
import { getUser, logout } from "../Action/AuthentificationAction";
import { getEventsFromApi } from "../Action/EventAction";
import { MDBBtn } from "mdbreact";

import "./acceuil.css";
import Categorie from "./Categorie/Categorie";
import Contact from "./Contact/contact";
import FooterPage from "./Footer";

class Index extends Component {
  state = {
    isOpen: false,
  };
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    this.props.authetification && console.log(this.props.authetification.role);
    // const role = this.props.authetification && this.props.authetification.role
    if (this.props.authetification) {
      console.log(
        "index",
        this.props.authetification && this.props.authetification.role
      );
    }
    const role = this.props.authetification && this.props.authetification.role;

    return (
      <div>
        <Router>
          <div>
            <MDBNavbar className="menus" expand="md">
              <MDBNavbarBrand>
                <img src={logo} className="img-lg" />
              </MDBNavbarBrand>
              <MDBNavbarToggler
                className="menu"
                onClick={this.toggleCollapse}
              />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={this.state.isOpen}
                navbar
              >
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/">
                      {" "}
                      <span className="item_nav">Acceuil</span>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="/users"
                      className={role !== "admin" ? "disabled" : null}
                    >
                      <span className="item_nav">Utlisateurs</span>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="/categorie"
                      className={role !== "admin" ? "disabled" : null}
                    >
                      <span className="item_nav"> Categorie</span>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink
                      to="/Gerer_evenement"
                      className={role !== "professionnel" ? "disabled" : null}
                    >
                      {" "}
                      <span className="item_nav"> Mes evenement </span>
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/contact">
                      {" "}
                      <span className="item_nav">Contact</span>
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    {this.props.authetification ? (
                      <MDBNavLink to="/" onClick={() => this.props.logout()}>
                        Log out
                      </MDBNavLink>
                    ) : (
                      <MDBNavItem className="pos_btn_menu">
                        {" "}
                        <MDBNavLink to="/inscription">
                          {" "}
                          <button className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn_menu ">
                            Inscription
                          </button>
                        </MDBNavLink>
                        <MDBNavLink to="/connexion">
                          {" "}
                          <LogIn />
                        </MDBNavLink>{" "}
                      </MDBNavItem>
                    )}
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
            {/* routing  menu principal */}
            <div className="switch">
              <Switch>
                <Route exact path="/">
                  <Event_list />
                </Route>

                <Route exact path="/users">
                  <Users />
                </Route>

                {/* <Route exact path="/connexion">
                  <LogIn />
                </Route> */}
                <Route exact path="/Gerer_evenement">
                  <GererEvenement />
                </Route>
                <Route exact path="/categorie">
                  {" "}
                  <Categorie />
                </Route>
                <Route exact path="/contact">
                  <div className="contact">
                    {" "}
                    <Contact />
                  </div>
                </Route>
                <Route exact path="/inscription">
                  <Register />
                </Route>
                {this.props.event.map((el) => (
                  <Route exact path={"/detail/" + el._id}>
                    <Detail el={el} />
                  </Route>
                ))}
              </Switch>
            </div>
          </div>
        </Router>

        <FooterPage />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  event: state.event,
  categorie: state.categorie,
  authetification: state.authetification.user,
});

const mapDispatchToProps = (dispatch) => ({
  getAllEvents: () => dispatch(getEventsFromApi()),
  /*modal get token with exct information*/
  getUser: () => dispatch(getUser()),
  logout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
