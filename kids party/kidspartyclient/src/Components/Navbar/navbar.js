import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, logout } from "../../Action/AuthentificationAction";
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
import logo from "../../logo2.png";

class Navbar extends Component {
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
      <MDBNavbar dark expand="md" className="navbar">
        <MDBNavbarBrand>
          <img src={logo} className="img-lg" />
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} className="tt" />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left className="text_navbar">
            <MDBNavItem active>
              <MDBNavLink className="menu" to="/">
                Acceuil
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="menu" to="/Evenement">
                Evenement
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
                    <MDBIcon className="icon-color" icon="user"></MDBIcon>
                    {this.props.authetification && (
                      <h5>{this.props.authetification.nom}</h5>
                    )}
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
    );
  }
}
const mapStateToProps = (state) => ({
  // event: state.user,
  authetification: state.authetification.user,
});

const mapDispatchToProps = (dispatch) => ({
  //AddUser: (el) => dispatch(addUserFromApi(el)),
  getUser: () => dispatch(getUser()),
  logout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
