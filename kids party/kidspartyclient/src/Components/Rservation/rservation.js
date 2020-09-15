import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { ModifRservationFromApi } from "../../Action/RservationAction";
import { Icon, Label, Menu, Table, Button } from "semantic-ui-react";
import { Pagination } from "antd";
import { MDBBtn, MDBIcon } from "mdbreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
} from "react-router-dom";

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
      <>
        {/* {this.props.authetification &&
        this.props.authetification.role === "professionnel" ? (*/}
        <div>
          <h2 className="bienveneu-h2"> Les Reservation</h2>
          <div className="table-responsive">
            <table className="table">
              <thead className="th-table">
                <tr>
                  <th>Titre</th>
                  <th>Email</th>

                  <th className="actcategorie">Status</th>
                  <th className="actcategorie">Action</th>
                </tr>
              </thead>

              <tbody>
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
                    <tr>
                      <td>{el.titreEvent}</td>
                      <td> {el.EmailUser}</td>
                      <td> {el.status}</td>

                      <td className="pos-Action ">
                        {/* <ModifEvent el={el} /> */}

                        <button
                          style={{
                            height: 90,
                          }}
                          className="btn  btn_menu1"
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
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        {/*  ) : (
          <Redirect to="/NOTFOUND" />
        )}*/}
      </>
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
