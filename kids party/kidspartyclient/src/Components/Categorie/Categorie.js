import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCategorieFromApi,
  deleteCategorieToApi,
} from "../../Action/CategorieAction.js";
import {
  Icon,
  Label,
  Menu,
  Table,
  Pagination,
  Button,
} from "semantic-ui-react";
import AddCategorie from "./ModalAddCategorie";
import {
  MDBCardGroup,
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBRow,
  MDBView,
} from "mdbreact";
class Categorie extends Component {
  componentDidMount() {
    this.props.getAllCategorie();
  }
  render() {
    return (
      <div>
        <h1 className=" marg-top">
          Listes des <span className="titre-speciale"> Categories</span>
        </h1>
        <AddCategorie />
        <br></br>
        <div className="containerr">
          <Table striped bordered hover size="sm">
            <thead className="th-table">
              <tr>
                <th>Titre</th>
                <th>Description</th>

                <th className="actcategorie">Action</th>
              </tr>
            </thead>

            <tbody>
              {this.props.categorie.map((el, i) => (
                <tr>
                  <td>{el.titre}</td>
                  <td>{el.Description}</td>

                  <td className="pos-Action ">
                    {/* <ModifEvent el={el} /> */}

                    <MDBBtn
                      color="elegant-color"
                      className="btn-color_sup-inter"
                      onClick={() => this.props.deleteCategorie(el._id)}
                    >
                      <i class="fas fa-trash"></i>
                    </MDBBtn>
                  </td>
                </tr>
              ))}{" "}
            </tbody>
          </Table>
        </div>{" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categorie: state.categorie,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCategorie: () => dispatch(getCategorieFromApi()),
  deleteCategorie: (el) => dispatch(deleteCategorieToApi(el)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Categorie);
