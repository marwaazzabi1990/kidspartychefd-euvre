import React, { Component } from "react";
import { connect } from "react-redux";
import { modifUserFromApi } from "../../Action/UserAction";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  Input,
  MDBModalFooter,
} from "mdbreact";

export class UserModalModif extends Component {
  state = {
    id: this.props.el._id,
    nom: this.props.el.nom,

    password: this.props.el.password,
    email: this.props.el.email,
    role: this.props.el.role,
    modal8: false,
    modal9: false,
    modal: false,
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  render() {
    return (
      <div>
        <button
          className="btn  btn-md btn-rounded btn-navbar btn_menu11"
          onClick={this.toggle}
        >
          Editer
        </button>

        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Modifier Profil</MDBModalHeader>
          <MDBModalBody>
            <form className="form-edit-moderateur">
              <labe>Nom:</labe>
              <input
                className="input-modif"
                type="text"
                name="title"
                defaultValue={this.props.el.nom}
                onChange={(e) => this.setState({ nom: e.target.value })}
              />

              {/* <input
                type="text"
                defaultValue={this.props.el.password}
                name="password"
                onChange={(e) => this.setState({ password: e.target.value })}
              ></input> */}
              <label>Email</label>
              <input
                className="input-modif"
                type="text"
                defaultValue={this.props.el.email}
                name="email"
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              {/*} <input
                type="text"
                defaultValue={this.props.el.role}
                name="post"
                onChange={(e) => this.setState({ role: e.target.value })}
            ></input>*/}
            </form>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              color="elegant-color"
              className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn_menu11"
              onClick={() =>
                this.props.Modifieruser({
                  id: this.state.id,
                  nom: this.state.nom,

                  password: this.state.password,
                  email: this.state.email,
                  role: this.state.role,
                })
              }
            >
              Save
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  Modifieruser: (el) => dispatch(modifUserFromApi(el)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserModalModif);
