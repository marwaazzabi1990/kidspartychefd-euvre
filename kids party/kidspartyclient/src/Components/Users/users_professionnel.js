import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBBtn, MDBIcon } from "mdbreact";
import Register from "./ModalRegister"
import { Table } from 'react-bootstrap';
import {
    getUsersFromApi,
    deleteUserToApi,


} from "../../Action/UserAction.js";
import ModamodifUser from "./Modalusermodif";
class UsersProffesionnel extends Component {
    state = {
        Role: "proffesionnel"

    }
    componentDidMount() {
        this.props.getAllUsers();

    }
    render() {
        const { user } = this.props;
        return (

            < div >
                <h1>ici tableaux des utlisateurs professionnel</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name </th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {user.filter((elrole) =>
                            this.state.Role === "" ? elrole : elrole.role === this.state.Role
                       )*/}
                        {user.map((el, i) => (<tr>
                            <td>{el.nom}</td>
                            <td>{el.email}</td>
                            <td>{el.username}</td>
                            <td>{el.role}</td>
                            <td><button onClick={() => this.props.deleteUser(el._id)}>Supprimer</button><button> <ModamodifUser el={el} /></button></td>
                        </tr>))}

                    </tbody>
                </Table>

            </div >
        )
    }

}

const mapStateToProps = (state) => ({
    user: state.user,

});

const mapDispatchToProps = (dispatch) => ({
    getAllUsers: () => dispatch(getUsersFromApi()),
    deleteUser: (el) => dispatch(deleteUserToApi(el)),


});
export default connect(mapStateToProps, mapDispatchToProps)(UsersProffesionnel);