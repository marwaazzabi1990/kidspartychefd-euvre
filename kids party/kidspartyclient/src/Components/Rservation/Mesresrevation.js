import React, { Component } from "react";
import { connect } from "react-redux";
import Axios from "axios";

var url = "";
var shareText = "";

class MesReservation extends Component {
  state = {
    MesRservation: [],
    show: true,
  };
  componentDidMount() {
    console.log(this.props.match.params.id);
    Axios.get(
      `http://localhost:8080/reservation/getreservationbyuserid/${this.props.match.params.id}`
    ).then((res) => {
      this.setState({ MesRservation: res.data });
      console.log("fffghhghgh", this.state.MesRservation);
    });
  }
  render() {
    const Mesreserver = this.state.MesRservation && this.state.MesRservation;
    return (
      <div>
        <h2 className="bienveneu-h2"> Mes rservation</h2>

        <div className="table-responsive">
          <table className="table">
            <thead className="th-table">
              <tr>
                <th>Titre</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {Mesreserver.map((el, i) => (
                <tr>
                  <td>{el.titreEvent}</td>

                  <td>{el.EmailUser}</td>
                  <td>{el.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="div-vide"></div>
        <div className="div-vide"></div>
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

const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(MesReservation);
