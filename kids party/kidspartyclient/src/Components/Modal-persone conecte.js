import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { getUser, logout } from "../Action/AuthentificationAction";

class Conecte extends Component {
  state = {
    modal6: false,
    modal7: false,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
  };
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <MDBContainer>
        <MDBBtn
          color="elegant-color"
          className="btn-color"
          onClick={this.toggle(6)}
        >
          <i class="fas fa-user-circle"></i>
        </MDBBtn>
        <MDBModal
          isOpen={this.state.modal6}
          toggle={this.toggle(6)}
          side
          position="top-right"
        >
          <MDBModalHeader toggle={this.toggle(6)}>
            MDBModal title
          </MDBModalHeader>
          <MDBModalBody className="modal-conecte">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(6)}>
              Close
            </MDBBtn>
            <MDBBtn color="primary" to="/" onClick={() => this.props.logout()}>
              Deconexion
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  // event: state.event,
  // categorie: state.categorie,
  authetification: state.authetification.user,
});

const mapDispatchToProps = (dispatch) => ({
  /*getAllEvents: () => dispatch(getEventsFromApi()),
  /*modal get token with exct information*/
  getUser: () => dispatch(getUser()),
  logout: () => dispatch(logout()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Conecte);
