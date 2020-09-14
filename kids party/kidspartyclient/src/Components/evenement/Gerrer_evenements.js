import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBBtn, MDBIcon } from "mdbreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import {
  getEventsFromApi,
  deleteEventToApi,
} from "../../Action/EventAction.js";
import { getUser } from "../../Action/AuthentificationAction";
import ModifEvent from "./ModifEventModal";
import ModalAddevent from "./ModalAddevent";
import { Icon, Label, Menu, Table, Button } from "semantic-ui-react";
import { Pagination } from "antd";

class GererEvent extends Component {
  state = {
    nom_organzateure: "",
    role: "",
    pageSize: 3,
    page: 1,
  };

  componentDidMount() {
    this.props.getUser();
    this.props.getAllEvents();
  }
  page = (page, pageSize) => {
    this.setState({ page: page, pageSize: pageSize });
  };

  render() {
    const { event } = this.props; // console.log("dfsdsd", this.state.role)

    const events = event.filter(
      (el) =>
        this.props.authetification &&
        el.nom_organzateur === this.props.authetification._id
    );

    // console.log("eventwa7ed", events);
    return (
      <div>
        <h1 className="bienveneu-h2">
          Liste <span className="titre-speciale">des evenements</span>
        </h1>

        {this.props.authetification ? (
          <ModalAddevent id={this.props.authetification._id} />
        ) : null}
        {/* </button> */}

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col"> Titre</th>
                <th scope="col"> Adresse</th>
                <th scope="col">Debut</th>
                <th scope="col">Fin</th>
                <th scope="col">Description</th>
                <th scope="col">Notes</th>
                <th scope="col">Prix</th>
                <th scope="col">nom_categorie</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {events
                .filter(
                  (el, i) =>
                    (this.state.page - 1) * this.state.pageSize <= i &&
                    i < this.state.page * this.state.pageSize
                )
                .map((el, i) => (
                  <tr>
                    <td>{el.titre}</td>
                    <td>{el.Adresse}</td>
                    <td>{el.Date_Debut}</td>
                    <td>{el.Date_fin}</td>
                    <td>{el.description}</td>
                    <td>{el.notes}</td>
                    <td>{el.prix}</td>
                    <td>{el.nom_categorie}</td>
                    <td className="pos-Action ">
                      <Link to={"/liste/" + el._id}>
                        <button
                          style={{ marginTop: 30 }}
                          className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn_menu "
                        >
                          {" "}
                          Reservation
                        </button>
                      </Link>
                      <ModifEvent el={el} />

                      <MDBBtn
                        color="elegant-color"
                        className="btn-color_sup-intern"
                        onClick={() => this.props.deleteEvent(el._id)}
                      >
                        <i class="fas fa-trash"></i>
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
            total={this.props.event.length}
            onChange={this.page}
          />
        </center>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.event,
  authetification: state.authetification.user,
});

const mapDispatchToProps = (dispatch) => ({
  getAllEvents: () => dispatch(getEventsFromApi()),
  deleteEvent: (el) => dispatch(deleteEventToApi(el)),
  getUser: () => dispatch(getUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(GererEvent);
