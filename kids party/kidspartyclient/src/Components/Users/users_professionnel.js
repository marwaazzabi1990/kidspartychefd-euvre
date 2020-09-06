import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBBtn, MDBIcon } from "mdbreact";
import Register from "./ModalRegister";
import { Table } from "react-bootstrap";
import { getUsersFromApi, deleteUserToApi } from "../../Action/UserAction.js";
import ModamodifUser from "./Modalusermodif";
class UsersProffesionnel extends Component {
  state = {
    Role: "proffesionnel",
  };
  componentDidMount() {
    this.props.getAllUsers();
  }
  render() {
    const { user } = this.props;
    return (
      <div>
        <h1 className=" marg-top">
          Les organieateurs sur{" "}
          <span className="titre-speciale">Kids Party</span>
        </h1>
        <Table striped bordered hover size="sm">
          <thead className="th-table">
            <tr>
              <th>Name </th>
              <th>Email</th>
              <th>Username</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user
              .filter((elrole) =>
                this.state.Role === ""
                  ? elrole
                  : elrole.role === "Professionnel"
              )
              .map((el, i) => (
                <tr>
                  <td>{el.nom}</td>
                  <td>{el.email}</td>
                  <td>{el.username}</td>
                  <td>{el.role}</td>
                  <td className="pos-Action ">
                    <MDBBtn
                      color="elegant-color"
                      className="btn-color_sup-inter"
                      onClick={() => this.props.deleteUser(el._id)}
                    >
                      <MDBIcon icon="user-alt-slash" />
                    </MDBBtn>
                    {/*<MDBBtn color="elegant-color" className="modif-event2">
                      <MDBIcon className="detai_icon" icon="search-plus" />
                    </MDBBtn>
                    <button>
                    {" "}
                    <ModamodifUser el={el} />
                  </button> */}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    );
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
