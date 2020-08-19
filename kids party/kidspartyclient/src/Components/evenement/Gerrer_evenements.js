import React, { Component } from "react";
import { connect } from "react-redux";
import { MDBBtn, MDBIcon } from "mdbreact";

//import { Table } from 'react-bootstrap';
import {
  getEventsFromApi,
  deleteEventToApi,
} from "../../Action/EventAction.js";
import { getUser } from "../../Action/AuthentificationAction";
import ModifEvent from "./ModifEventModal";
import ModalAddevent from "./ModalAddevent";
import {
  Icon,
  Label,
  Menu,
  Table,
  Pagination,
  Button,
} from "semantic-ui-react";

class GererEvent extends Component {
  state = {
    nom_organzateure: "",
    role: "",
  };

  componentDidMount() {
    this.props.getUser();
    this.props.getAllEvents();
    //   this.setState{ (nom_organzateure = this.props.authetification.nom) }
  }
  render() {
    // this.props.authetification && console.log("xcx", this.props.authetification.n);

    if (this.props.authetification) {
      console.log("oooooo", this.props.authetification.nom);
    }

    // const { authetification } = this.props;
    // console.log("user", authetification, authetification);

    const { event } = this.props; // console.log("dfsdsd", this.state.role)

    const events = event.filter(
      (el) =>
        this.props.authetification &&
        el.nom_organzateur === this.props.authetification.nom
    );

    console.log("eventwa7ed", events);
    return (
      <div className="container">
        <button
          className="buttonplus"
          onClick={() => this.setState({ addModelShow: true })}
        >
          {this.props.authetification ? (
            <ModalAddevent nom={this.props.authetification.nom} />
          ) : null}
        </button>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Titre</Table.HeaderCell>
              <Table.HeaderCell>Adresse</Table.HeaderCell>
              <Table.HeaderCell> Debut</Table.HeaderCell>
              <Table.HeaderCell> Fin</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
              <Table.HeaderCell>NB place</Table.HeaderCell>
              <Table.HeaderCell>NB particiant</Table.HeaderCell>
              <Table.HeaderCell>Prix</Table.HeaderCell>
              <Table.HeaderCell>nom_categorie</Table.HeaderCell>
              <Table.HeaderCell>nom_organzateur</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {events /*.filter((el_organizateurs) => this.el_organizateurs === "" ?
                            el_organizateurs : el_organizateurs === "maazza"
        )*/
              .map((el, i) => (
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon>{el.titre}</Label>
                  </Table.Cell>
                  <Table.Cell>{el.Adresse}</Table.Cell>
                  <Table.Cell>{el.Date_Debut}</Table.Cell>
                  <Table.Cell>{el.Date_fin}</Table.Cell>
                  <Table.Cell>{el.description}</Table.Cell>
                  <Table.Cell>{el.nombre_de_place}</Table.Cell>
                  <Table.Cell>{el.nombre_de_participant}</Table.Cell>
                  <Table.Cell>{el.prix}</Table.Cell>
                  <Table.Cell>{el.nom_categorie}</Table.Cell>
                  {/*<Table.Cell>{el.nom_organzateur}</Table.Cell>*/}

                  <Table.Cell className="pos-Action ">
                    <Button secondary>
                      <ModifEvent el={el} />
                    </Button>
                    <Button
                      outline
                      size="sm"
                      onClick={() => this.props.deleteEvent(el._id)}
                    >
                      <i class="fas fa-trash"></i>
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}{" "}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Menu floated="right" pagination>
                  {/* <Menu.Item as='a' icon>
                                        <Icon name='chevron left' />
                                    </Menu.Item>
                                    <Menu.Item as='a'>1</Menu.Item>
                                    <Menu.Item as='a'>2</Menu.Item>
                                    <Menu.Item as='a'>3</Menu.Item>
                                    <Menu.Item as='a'>4</Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='chevron right' /> */}
                  {/* </Menu>  </Menu.Item> */}
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
