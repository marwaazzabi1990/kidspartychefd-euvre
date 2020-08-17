
import React, { Component } from "react";
import { connect } from "react-redux";
import { GoogleLogin } from 'react-google-login';

import { login } from "./../../Action/AuthentificationAction";
//import { addSessionInApi } from "./../../Action/SessionAction";

import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput, MDBBtn } from 'mdbreact';


class logIn extends Component {
    state = {

        modal: false,
        email: "",
        password: "",
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });

    }

    render() {
        return (

            <MDBContainer>
                <MDBBtn className="btn_menu" onClick={this.toggle}>Connexion</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>Connexion</MDBModalHeader>
                    <MDBModalBody>
                        <form>

                            <div className="grey-text">
                                <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" onChange={(e) => this.setState({ email: e.target.value })} />
                                <MDBInput label="Type your password" icon="lock" group type="password" validate onChange={(e) => this.setState({ password: e.target.value })} />
                            </div>

                        </form>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                        <MDBBtn color="primary" onClick={
                            () =>
                                this.props.login({
                                    email: this.state.email,
                                    password: this.state.password

                                })}>Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(logIn);






/*<div className="pos_conexion">
    <h2>Entrez votre informations</h2>
    <div>
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol >
                        <form>

                            <div className="grey-text">
                                <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" onChange={(e) => this.setState({ email: e.target.value })} />
                                <MDBInput label="Type your password" icon="lock" group type="password" validate onChange={(e) => this.setState({ password: e.target.value })} />
                            </div>
                            <div className="text-center">
                                <MDBBtn onClick={
                                    () =>
                                        this.props.login({
                                            email: this.state.email,
                                            password: this.state.password

                                        })}
                                >Connexion</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    </div></div >
            )
        }



    }*/
/*
<GoogleLogin
clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
buttonText="Login"
onSuccess={responseGoogle}
onFailure={responseGoogle}
cookiePolicy={'single_host_origin'}
/>*/