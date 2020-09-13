import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBBtn, MDBIcon } from "mdbreact";
import Register from "./ModalRegister";
import { Table } from "react-bootstrap";
import { getUsersFromApi, deleteUserToApi } from "../../Action/UserAction.js";
import ModamodifUser from "./Modalusermodif";
import NotFound from "../notFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
} from "react-router-dom";
class UsersProffesionnel extends Component {
  state = {
    role: "",
  };
  componentDidMount() {
    this.props.getAllUsers();
  }
  render() {
    const { user } = this.props;
    console.log("eee", user);
    return (
      <>
        {this.props.authetification &&
        this.props.authetification.role === "admin" ? (
          <div>
            <h1 className=" marg-top">
              Les organieateurs sur{" "}
              <span className="titre-speciale">Kids Party</span>
            </h1>
            <div>
              <select
                style={{ width: 160, marginTop: 40 }}
                className="browser-default custom-select"
                onChange={(e) => this.setState({ role: e.target.value })}
              >
                <option value="">Role</option>

                <option value="professionnel">professionnel</option>
                <option value="visiteur">visiteur</option>
              </select>
            </div>
            <br></br>

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
                  .filter((el) =>
                    this.state.Role === "" ? el : el.role !== "admin"
                  )
                  .filter((el) =>
                    this.state.Role === ""
                      ? el
                      : el.role.includes(this.state.role)
                  )
                  .map((el, i) => (
                    <tr>
                      <td style={{ color: "black" }}>{el.nom}</td>
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
        ) : (
          <Redirect to="/NOTFOUND" />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  authetification: state.authetification.user,
});

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getUsersFromApi()),
  deleteUser: (el) => dispatch(deleteUserToApi(el)),
});
export default connect(mapStateToProps, mapDispatchToProps)(UsersProffesionnel);
