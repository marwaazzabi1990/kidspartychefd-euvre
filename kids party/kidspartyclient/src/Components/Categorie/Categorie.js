import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategorieFromApi } from "../../Action/CategorieAction.js";
import {
  Icon,
  Label,
  Menu,
  Table,
  Pagination,
  Button,
} from "semantic-ui-react";
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

    // localStorage.setItem('nom', this.props.authetification.nom)
  }
  render() {
    return (
      <div className=" marg-top">
        <h1>
          La listes de <span className="titre-speciale"> Categorie</span>
        </h1>
        <Table celled>
          <Table.Header className="th-table">
            <Table.Row>
              <Table.HeaderCell className="Table-HeaderCell">
                Titre
              </Table.HeaderCell>
              <Table.HeaderCell className="Table-HeaderCell">
                Description
              </Table.HeaderCell>
              {/* <Table.HeaderCell className="Table-HeaderCell">
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
              </Table.HeaderCell> */}
              {/* <Table.HeaderCell>nom_organzateur</Table.HeaderCell> */}
              <Table.HeaderCell>Action</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.categorie.map((el, i) => (
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>{el.titre}</Label>
                </Table.Cell>
                <Table.Cell>{el.Description}</Table.Cell>

                <Table.Cell className="pos-Action ">
                  {/* <ModifEvent el={el} /> */}

                  <MDBBtn
                    color="elegant-color"

                    // onClick={() => this.props.deleteEvent(el._id)}
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
  categorie: state.categorie,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCategorie: () => dispatch(getCategorieFromApi()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Categorie);
