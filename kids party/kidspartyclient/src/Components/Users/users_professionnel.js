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
import { Pagination } from "antd";
class UsersProffesionnel extends Component {
  state = {
    role: "",
    pageSize: 4,
    page: 1,
  };
  page = (page, pageSize) => {
    this.setState({ page: page, pageSize: pageSize });
  };
  componentDidMount() {
    this.props.getAllUsers();
  }
  render() {
    if (
      this.props.authetification &&
      this.props.authetification.role !== "admin"
    ) {
      return <Redirect to="/NOTFOUND" />;
    }

    const { user } = this.props;
    /*console.log("eee", user);*/
    return (
      <>
        <div>
          <h1 className="bienveneu-h2">
            Les utlisateurs de{" "}
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

          <div className="table-responsive">
            <table className="table">
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
                {user
                  .filter((el) =>
                    this.state.Role === "" ? el : el.role !== "admin"
                  )
                  .filter(
                    (el, i) =>
                      (this.state.page - 1) * this.state.pageSize <= i &&
                      i < this.state.page * this.state.pageSize
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
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {/**************************************Pagination********************************* */}
          <center>
            <Pagination
              defaultCurrent={1}
              pageSize={4}
              total={user.length}
              onChange={this.page}
            />
          </center>
        </div>
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
