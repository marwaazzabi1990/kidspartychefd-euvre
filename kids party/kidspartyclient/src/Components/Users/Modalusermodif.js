import React, { Component } from "react";
import { connect } from "react-redux";
import { modifUserFromApi } from "../../Action/UserAction";

import {
    MDBContainer,
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
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
    };
    toggle = (nr) => () => {
        let modalNumber = "modal" + nr;
        this.setState({
            [modalNumber]: !this.state[modalNumber],
        });
    };

    render() {
        return (
            <MDBContainer>
                <MDBBtn outline size="sm" onClick={this.toggle(8)}>
                    <i class="fas fa-user-edit"></i>
                </MDBBtn>
                <MDBModal
                    isOpen={this.state.modal8}
                    toggle={this.toggle(8)}
                    fullHeight
                    position="right"
                >
                    <MDBModalHeader className="titlemodaleditmod" toggle={this.toggle(8)}>
                        Modifier User
          </MDBModalHeader>
                    <MDBModalBody>
                        <form className="form-edit-moderateur">
                            <input
                                className="firstinputmodaleditmod"
                                type="text"
                                name="title"
                                defaultValue={this.props.el.nom}
                                onChange={(e) => this.setState({ nom: e.target.value })}
                            ></input>


                            <input
                                type="text"
                                defaultValue={this.props.el.username}
                                name="user_name"
                                onChange={(e) => this.setState({ username: e.target.value })}
                            ></input>

                            <input
                                type="text"
                                defaultValue={this.props.el.password}
                                name="password"
                                onChange={(e) => this.setState({ password: e.target.value })}
                            ></input>
                            <input
                                type="text"
                                defaultValue={this.props.el.email}
                                name="email"
                                onChange={(e) => this.setState({ email: e.target.value })}
                            ></input>
                            <input
                                type="text"
                                defaultValue={this.props.el.role}
                                name="post"
                                onChange={(e) => this.setState({ role: e.target.value })}
                            ></input>
                        </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="dark" onClick={this.toggle(8)}>
                            Fermer
            </MDBBtn>
                        <MDBBtn
                            color="dark"
                            onClick={() =>
                                this.props.Modifieruser({
                                    id: this.state.id,
                                    nom: this.state.nom,
                                    username: this.props.el.username,

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
            </MDBContainer>
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