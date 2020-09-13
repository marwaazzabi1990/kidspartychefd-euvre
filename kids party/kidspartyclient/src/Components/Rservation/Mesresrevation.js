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
        <h2> Mes rservation</h2>
        {Mesreserver.map((el, i) => (
          <div>
            <span>{el.titreEvent}</span>
            <span>{el.IdUser}</span>
            <span>{el.EmailUser}</span>
            <span>{el.status}</span>
            <span>{el.show}</span>
          </div>
        ))}
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
