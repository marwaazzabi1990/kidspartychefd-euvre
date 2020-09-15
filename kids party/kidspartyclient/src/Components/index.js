import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
} from "react-router-dom";
import logo from "../logo2.png";
import Navbar from "../Components/Navbar/navbar";

import EventList from "./evenement/ListEvent";
import Event_list from "./evenement/event_list";
import Footer from "./Footer";
import Log2 from "./authentification/connexion";
import GererEvenement from "./evenement/Gerrer_evenements";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import LogIn from "./authentification/LogIn";
import Register from "./Users/Register";
import Users from "./Users/users_professionnel";
import Detail from "./evenement/Detail_Event";
import { getUser, logout } from "../Action/AuthentificationAction";
import { getEventsFromApi } from "../Action/EventAction";
import MesRservation from "../Components/Rservation/Mesresrevation";

import Registervisiteur from "../Components/Users/ModalRegistervisiteur";
import Registerparticipant from "../Components/Users/ModalRgistreParticipant";
import Rservation from "../Components/Rservation/rservation";
import { Eventlist } from "./evenement/ListEvent";
import { MDBBtn } from "mdbreact";
//import { LogIn } from "./authentification/LogIn";

import "./acceuil.css";
import Categorie from "./Categorie/Categorie";
import Contact from "./Contact/contact";

import Profil from "./Users/Profil";
import NotFOUND from "./notFound";
/*import Conecte from "./Modal-persone conecte";*/
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
  componentWillUpdate() {
    this.props.getUser();
  }

  render() {
    return (
      <div>
        <div>
          {/*navbar mdd*/}
          <Router>
            <MDBNavbar dark expand="md" className="navbar">
              <MDBNavbarBrand>
                <MDBNavLink className="menu" to="/">
                  <img src={logo} className="img-lg" />
                </MDBNavLink>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} className="tt" />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={this.state.isOpen}
                navbar
              >
                <MDBNavbarNav left className="text_navbar">
                  <MDBNavItem active>
                    <MDBNavLink className="menu" to="/">
                      Acceuil
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="menu" to="/Apropos">
                      Apropos
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    {this.props.authetification &&
                    this.props.authetification.role === "admin" ? (
                      <MDBNavLink className="menu" to="/users">
                        Utlisateurs
                      </MDBNavLink>
                    ) : (
                      ""
                    )}
                  </MDBNavItem>
                  <MDBNavItem>
                    {this.props.authetification &&
                    this.props.authetification.role === "visiteur" ? (
                      <MDBNavLink
                        className="menu"
                        to={"/mesreservation/" + this.props.authetification._id}
                      >
                        Mes Rservation
                      </MDBNavLink>
                    ) : (
                      ""
                    )}
                  </MDBNavItem>
                  <MDBNavItem>
                    {this.props.authetification &&
                    this.props.authetification.role === "admin" ? (
                      <MDBNavLink className="menu" to="/categorie">
                        Categorie
                      </MDBNavLink>
                    ) : (
                      ""
                    )}
                  </MDBNavItem>
                  <MDBNavItem>
                    {this.props.authetification &&
                    this.props.authetification.role === "professionnel" ? (
                      <MDBNavLink className="menu" to="/Gerer_evenement">
                        Mes evenement{" "}
                      </MDBNavLink>
                    ) : (
                      ""
                    )}
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="menu" to="/contact">
                      Contact{" "}
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>

                <MDBNavbarNav className="pos-drop" right>
                  <MDBNavItem>
                    {this.props.authetification ? (
                      <MDBDropdown className="text_navbar">
                        <MDBDropdownToggle nav caret>
                          <div className="flex_icon">
                            {" "}
                            <div>
                              {" "}
                              <MDBIcon className="icon-color" icon="user">
                                {" "}
                              </MDBIcon>
                            </div>
                            <div>
                              {this.props.authetification && (
                                <h5 className="titre-speciale">
                                  {" "}
                                  Bienvenu {this.props.authetification.nom}
                                </h5>
                              )}
                            </div>
                          </div>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                          <MDBNavLink className="menu-dropdown" to="/monprofil">
                            <MDBDropdownItem>Voir Profil </MDBDropdownItem>
                          </MDBNavLink>

                          <MDBDropdownItem onClick={() => this.props.logout()}>
                            Log out
                          </MDBDropdownItem>
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    ) : (
                      <MDBNavItem className="pos_btn_menu">
                        {" "}
                        <MDBNavLink to="/inscription">
                          {" "}
                          <button className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn_menu ">
                            Inscription
                          </button>
                        </MDBNavLink>
                        <MDBNavItem className="mt-2">
                          {/* <LogIn />*/}
                          <MDBNavLink to="/log">
                            <button className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn_menu11">
                              Connexion
                            </button>
                          </MDBNavLink>
                        </MDBNavItem>
                      </MDBNavItem>
                    )}
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>

            {/*navbar mdb*/}

            {/* routing  menu principal */}
            <div>
              <Switch>
                <Route exact path="/">
                  <Event_list />
                </Route>
                <Route exact path="/Apropos">
                  <EventList />
                </Route>

                <Route exact path="/users">
                  <Users />
                </Route>

                <Route exact path="/Gerer_evenement">
                  <GererEvenement />
                </Route>
                <Route
                  exact
                  path={"/mesreservation/:id"}
                  render={(props) => (
                    <MesRservation {...props} params={useParams} />
                  )}
                />

                <Route exacft path="/categorie">
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
                <Route exact path="/Registervisiteur">
                  <Registervisiteur />
                </Route>
                <Route exact path="/Registerparticipant">
                  <Registerparticipant />
                </Route>
                <Route exact path="/log">
                  <LogIn />
                </Route>

                <Route
                  exact
                  path={"/liste/:id"}
                  render={(props) => (
                    <Rservation {...props} params={useParams} />
                  )}
                />

                <Route exact path="/monprofil">
                  <Profil />
                </Route>
                <Route
                  exact
                  path={"/detail/:id"}
                  render={(props) => <Detail {...props} params={useParams} />}
                ></Route>
                <Route to="/NOTFOUND">
                  <NotFOUND />
                </Route>

                {/* {this.props.event.map((el) => (
                  <Route exact path={"/detail/" + el._id}>
                    <Detail el={el} />
                  </Route>
                ))} */}
              </Switch>
            </div>
          </Router>
          <Footer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  event: state.event,
  categorie: state.categorie,
  authetification: state.authetification.user,
  reservation: state.rservation,
});

const mapDispatchToProps = (dispatch) => ({
  getAllEvents: () => dispatch(getEventsFromApi()),
  /*modal get token with exct information*/
  getUser: () => dispatch(getUser()),
  logout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
