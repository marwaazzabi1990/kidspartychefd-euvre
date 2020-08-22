import React, { Component } from "react";
import { connect } from "react-redux";
class List_Event extends Component {
  reender() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  event: state.event,
  categorie: state.categorie,
  authetification: state.authetification.user,
});

const mapDispatchToProps = (dispatch) => ({
  getAllEvents: () => dispatch(getEventsFromApi()),
  getAllCategorie: () => dispatch(getCategorieFromApi()),
  getUser: () => dispatch(getUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(List_Event);
