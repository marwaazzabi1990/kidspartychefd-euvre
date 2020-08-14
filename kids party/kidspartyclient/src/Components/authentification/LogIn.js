
import React, { Component } from "react";
import { connect } from "react-redux";
import { GoogleLogin } from 'react-google-login';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { getUsersFromApi } from "./../../Action/UserAction";
//import { addSessionInApi } from "./../../Action/SessionAction";
import { Athentificate } from "../../Action/AuthentificationAction";

class logIn extends Component {
    state = {
        email: "",
        password: "",
    }
    render() {
        return (
            <div className="pos_conexion">
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
                                                    this.props.signin({
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



}
const mapStateToProps = (state) => ({
    users: state.user,
});

const mapDispatchToProps = (dispatch) => ({
    getAllUsers: () => dispatch(getUsersFromApi()),
    //  AddSession: (session) => dispatch(addSessionInApi(session)),
    signin: (userInfo) => dispatch(Athentificate(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(logIn);
/*
<GoogleLogin
clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
buttonText="Login"
onSuccess={responseGoogle}
onFailure={responseGoogle}
cookiePolicy={'single_host_origin'}
/>*/