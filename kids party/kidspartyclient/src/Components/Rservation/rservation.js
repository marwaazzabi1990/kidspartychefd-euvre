import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { ModifRservationFromApi } from "../../Action/RservationAction";
import { Icon, Label, Menu, Table, Button } from "semantic-ui-react";
import { Pagination } from "antd";
import { MDBBtn, MDBIcon } from "mdbreact";

var url = "";
var shareText = "";

class Reservation extends Component {
  state = {
    rservation: [],
    show: true,
    pageSize: 3,
    page: 1,
  };
  componentDidMount() {
    console.log(this.props.match.params.id);
    Axios.get(
      `http://localhost:8080/reservation/getreservationbyeventid/${this.props.match.params.id}`
    ).then((res) => {
      this.setState({ rservation: res.data });
      console.log("fffghhghgh", this.state.rservation);
    });
  }
  page = (page, pageSize) => {
    this.setState({ page: page, pageSize: pageSize });
  };
  render() {
    const reserver = this.state.rservation && this.state.rservation;
    return (
      <div>
        <h2> Les Reservation</h2>
        <Table celled>
          <Table.Header className="cat-table">
            <Table.Row>
              <Table.HeaderCell className="Table-HeaderCell">
                Titre
              </Table.HeaderCell>
              <Table.HeaderCell className="Table-HeaderCell">
                Email
              </Table.HeaderCell>
              <Table.HeaderCell className="Table-HeaderCell">
                Status
              </Table.HeaderCell>

              {/* <Table.HeaderCell>nom_organzateur</Table.HeaderCell> */}
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {reserver
              .filter((el) =>
                this.state.show !== true ? el : el.show === this.state.show
              )
              .filter(
                (el, i) =>
                  (this.state.page - 1) * this.state.pageSize <= i &&
                  i < this.state.page * this.state.pageSize
              )
              .map((el, i) => (
                <Table.Row>
                  <Table.Cell style={{ marginTop: 0 }}>
                    <Label style={{ marginTop: 0 }}>{el.titreEvent}</Label>
                  </Table.Cell>
                  <Table.Cell style={{ marginTop: 40 }}>
                    {el.EmailUser}
                  </Table.Cell>
                  <Table.Cell style={{ marginTop: 40 }}>{el.status}</Table.Cell>

                  {/*<Table.Cell>{el.nom_organzateur}</Table.Cell>*/}

                  <Table.Cell className="pos-bt">
                    <button
                      className="btn  btn_menu11"
                      onClick={() =>
                        this.props.Modifierresrvation({
                          id: el._id,
                          idEvent: el.idEvent,
                          titreEvent: el.titreEvent,
                          IdUser: el.IdUser,
                          status: "confirmer",
                          show: true,
                        })
                      }
                    >
                      <MDBIcon icon="check" />
                    </button>

                    <button
                      className="btn  btn-color_sup-intern "
                      style={{ marginBottom: 40 }}
                      onClick={() =>
                        this.props.Modifierresrvation({
                          id: el._id,
                          idEvent: el.idEvent,
                          titreEvent: el.titreEvent,
                          IdUser: el.IdUser,
                          status: "Annuler",
                          show: true,
                        })
                      }
                    >
                      <MDBIcon icon="times" />
                    </button>
                  </Table.Cell>
                </Table.Row>
              ))}{" "}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Menu style={{ marginLeft: 40 }}></Menu>
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
  categorie: state.categorie,
  authetification: state.authetification.user,
  rservation: state.rservation,
});

const mapDispatchToProps = (dispatch) => ({
  Modifierresrvation: (el) => dispatch(ModifRservationFromApi(el)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Reservation);
/*
{reserver
            .filter((el) =>
              this.state.show !== true ? el : el.show === this.state.show
            )
            .map((el, i) => (
              <div>
                <span>{el.idEvent}</span>
                <br></br>
                <span>{el.titreEvent}</span>
                <br></br>
                <span>{el.IdUser}</span> <br></br>
                <span>{el.EmailUser}</span>
                <br></br>
                <span>{el.status}</span>
                <br></br>
                <span>{el.show}</span>
                <br></br>
                <button
                  className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn-color1"
                  onClick={() =>
                    this.props.Modifierresrvation({
                      id: el._id,
                      idEvent: el.idEvent,
                      titreEvent: el.titreEvent,
                      IdUser: el.IdUser,
                      status: "confirmer",
                      show: true,
                    })
                  }
                >
                  confirmer
                </button>
                <button
                  className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn-color1"
                  onClick={() =>
                    this.props.Modifierresrvation({
                      id: el._id,
                      idEvent: el.idEvent,
                      titreEvent: el.titreEvent,
                      IdUser: el.IdUser,
                      status: "Annuler",
                      show: true,
                    })
                  }
                >
                  annuler
                </button>
              </div>
           */
