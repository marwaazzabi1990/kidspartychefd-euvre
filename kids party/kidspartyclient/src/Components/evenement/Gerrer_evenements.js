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

        <Table celled className="table">
          <Table.Header className="th-table">
            <Table.Row>
              <Table.HeaderCell className="Table-HeaderCell">
                Titre
              </Table.HeaderCell>
              <Table.HeaderCell className="Table-HeaderCell">
                Adresse
              </Table.HeaderCell>
              <Table.HeaderCell className="Table-HeaderCell">
                {" "}
                Debut
              </Table.HeaderCell>
              <Table.HeaderCell className="Table-HeaderCell">
                {" "}
                Fin
              </Table.HeaderCell>
              <Table.HeaderCell className="Table-HeaderCell">
                Description
              </Table.HeaderCell>
              <Table.HeaderCell className="Table-HeaderCell">
                Notes
              </Table.HeaderCell>
              <Table.HeaderCell className="Table-HeaderCell">
                {" "}
                place
              </Table.HeaderCell>
              <Table.HeaderCell className="Table-HeaderCell">
                particiant
              </Table.HeaderCell>
              <Table.HeaderCell className="Table-HeaderCell">
                Prix
              </Table.HeaderCell>
              <Table.HeaderCell className="Table-HeaderCell">
                nom_categorie
              </Table.HeaderCell>
              {/* <Table.HeaderCell>nom_organzateur</Table.HeaderCell> */}
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {events
              .filter(
                (el, i) =>
                  (this.state.page - 1) * this.state.pageSize <= i &&
                  i < this.state.page * this.state.pageSize
              )
              .map((el, i) => (
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon>{el.titre}</Label>
                  </Table.Cell>
                  <Table.Cell>{el.Adresse}</Table.Cell>
                  <Table.Cell>{el.Date_Debut}</Table.Cell>
                  <Table.Cell>{el.Date_fin}</Table.Cell>

                  <Table.Cell>{el.description}</Table.Cell>
                  <Table.Cell>{el.notes}</Table.Cell>
                  <Table.Cell>{el.nombre_de_place}</Table.Cell>
                  <Table.Cell>{el.nombre_de_participant}</Table.Cell>
                  <Table.Cell>{el.prix}</Table.Cell>
                  <Table.Cell>{el.nom_categorie}</Table.Cell>
                  {/*<Table.Cell>{el.nom_organzateur}</Table.Cell>*/}

                  <Table.Cell className="pos-Action ">
                    <ModifEvent el={el} />
                    <Link to={"/liste/" + el._id}>
                      <button
                        style={{ marginTop: 30 }}
                        className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn_menu "
                      >
                        {" "}
                        Reservation
                      </button>
                    </Link>

                    <MDBBtn
                      color="elegant-color"
                      className="btn-color_sup-intern"
                      onClick={() => this.props.deleteEvent(el._id)}
                    >
                      <i class="fas fa-trash"></i>
                    </MDBBtn>
                  </Table.Cell>
                </Table.Row>
              ))}{" "}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Menu style={{ marginLeft: 40 }}>
                  <Pagination
                    defaultCurrent={1}
                    pageSize={3}
                    total={this.props.event.length}
                    onChange={this.page}
                  />
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
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

/*<Table striped bordered hover size="sm">
    <thead>
        <tr>
            <th>Titre </th>
            <th>Adresse</th>
            <th>Date </th>
            <th>Date Fin</th>

            <th> Description</th>
            <th>Nombre de place</th>
            <th>Les participant</th>
            <th>Prix</th>
            <th>nom_categorie</th>
            <th>nom_organzateur</th>

            <th> Action</th >
        </tr>
    </thead>
    <tbody>
        {event/*.filter((el_organizateurs) => this.el_organizateurs === "" ?
        el_organizateurs : el_organizateurs === "maazza"
)*/
/*    .map((el, i) => (<tr>
<td>{el.titre}</td>
<td>{el.Adresse}</td>
<td>{el.Date_Debut}</td>
<td>{el.Date_fin}</td>
<td>{el.description}</td>
<td>{el.nombre_de_place}</td>
<td>{el.nombre_de_participant}</td>
<td>{el.prix}</td>
<td>{el.nom_categorie}</td>
<td>{el.nom_organzateur}</td>
<td className="pos-Action " ><button outline size="sm" onClick={() => this.props.deleteEvent(el._id)}><i class="fas fa-trash"></i></button>
    <button> <ModifEvent el={el} /></button></td>
</tr>))}

</tbody>
</Table >*/
