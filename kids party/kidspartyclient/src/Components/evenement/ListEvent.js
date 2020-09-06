import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategorieFromApi } from "../../Action/CategorieAction.js";
import { Pagination } from "antd";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

import { Card } from "antd";
import { MDBContainer, MDBInput } from "mdbreact";

import Moment from "react-moment";
import { getEventsFromApi } from "../../Action/EventAction.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaSearch, FaUsers } from "react-icons/fa";
import { Carousel, InputGroup, FormControl, Form } from "react-bootstrap";
//import Carrousel from "./carrousel";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const { Meta } = Card;
var categorie = [];
var newArray = [];
class Eventlist extends Component {
  state = {
    Categorie: "",
    Adresse: "",
    titre: "",
    pageSize: 2,
    page: 1,
  };
  componentDidMount() {
    this.props.getAllEvents();
    this.props.getAllCategorie();
  }
  filter = (e) => {
    let input = e.target.value;

    this.setState({ titre: input });

    console.log(this.state.titre);
  };
  page = (page, pageSize) => {
    this.setState({ page: page, pageSize: pageSize });
  };
  // onClickartistique = (e) => {
  //   this.setState({ Categorie: "artistique" });
  //   console.log(this.state.Categorie);
  // };

  // distinctDoubleCategorie = () => {
  //   let ArrayOfCategorie = [];
  //   console.log("categorie is :" + this.props.categorie);
  //   this.props.categorie.map((el) => ArrayOfCategorie.push(el.nom_categorie));
  //   newArray = new Set(ArrayOfCategorie);
  //   categorie = [...newArray];
  // };
  render() {
    // this.distinctDoubleCategorie();
    return (
      <div className="pos-generale">
        <center style={{ marginTop: 30 }}>
          {" "}
          <h2 className="bienveneu-h1">
            {" "}
            Événements <span className="titre-speciale">En Kids Party</span>
          </h2>
        </center>
        <div className="pos-filter">
          <div style={{ width: 240, marginTop: 30 }}>
            <div>
              <h5 style={{ fontSize: 30, color: "green" }}>Filtrer par </h5>
              <br></br>
              <br></br>

              <Search
                placeholder="input search "
                onChange={(e) => this.filter(e)}
                onSearch={(value) => console.log(value)}
                style={{ width: 240 }}
              />
            </div>
            <br></br>
            <div>
              <select
                className="browser-default custom-select"
                onChange={(e) => this.setState({ Adresse: e.target.value })}
              >
                <option value="">Lieu</option>

                <option value="Hammamet">Hammamet</option>
                <option value="Kelibia">kelibia</option>
                <option value="Sousse">Sousse</option>
                <option value="Djerba">Djerba</option>
                <option value="Monastir">Monastir</option>

                <option value="Mahdia">Mahdia</option>
                <option value="Tabarka">Tabarka</option>
                <option value="Zarzis">Zarzis</option>
                <option value="Tunis">Tunis</option>
                <option value="Sfax">Sfax</option>
                <option value="Nabeul">Nabeul</option>
                <option value="Tozeur">Tozeur</option>
                <option value="Gammarth">Gammarth</option>
                <option value="Douz">Douz</option>
                <option value="Bizerte">Bizerte</option>
                <option value="Ain Draham">Ain Draham</option>
                <option value="Kairouan">Kairouan</option>
                <option value="Tataouine">Tataouine</option>
                <option value="El Jem">El Jem</option>
              </select>
            </div>

            <div>
              {/* <MDBContainer className="mt-5">
              <MDBInput
                gap
                onClick={this.onClickartistique(2)}
                checked={this.state.radio === 2 ? true : false}
                label="artistique"
                type="radio"
                id="radio2"
                value="artistique"
              />
            </MDBContainer> */}
              <br></br>
              <select
                className="browser-default custom-select"
                onChange={(e) => this.setState({ Categorie: e.target.value })}
                name="pets"
                id="Quantity-select"
              >
                <option value="">Categorie</option>
                {this.props.categorie.map((el, i) => (
                  <option value={el}>{el.titre}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pos_card2">
            {this.props.event
              .filter((elcategorie) =>
                this.state.Categorie === ""
                  ? elcategorie
                  : elcategorie.nom_categorie === this.state.Categorie
              )
              .filter((eladresse) =>
                this.state.Adresse === ""
                  ? eladresse
                  : eladresse.Adresse.includes(this.state.Adresse)
              )
              .filter((eltitre) =>
                this.state.titre === ""
                  ? eltitre
                  : eltitre.titre.includes(this.state.titre)
              )
              .filter(
                (el, i) =>
                  (this.state.page - 1) * this.state.pageSize <= i &&
                  i < this.state.page * this.state.pageSize
              )
              .map((el) => (
                <div>
                  <Card
                    hoverable
                    style={{ width: 240, marginTop: 30 }}
                    cover={
                      <img
                        className="img"
                        alt="example"
                        src={"http://localhost:8080/" + el.affiche}
                      />
                    }
                  >
                    <Meta title={el.titre} description={el.description} />
                    <div>
                      <span> Adresse :</span> {el.Adresse}
                      <br></br>
                      <span> Participant :</span> {el.nombre_de_participant}
                      <br></br>
                      <span> Prix :</span> {el.prix}
                    </div>

                    {/*rating  */}
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      return (
                        <label>
                          <input
                            type="radio"
                            name="rating"
                            value={el.notes}
                            /*  onClick={(e) => {
this.setState({ rating: e.target.value });
this.sendNote(e.target.value);
}}*/
                          />{" "}
                          <FaStar
                            className="star"
                            color={
                              ratingValue <= el.notes ? "#ffc107" : "#e4e5e9"
                            }
                            size={20}
                            onMouseEnter={(e) =>
                              this.setState({ hover: ratingValue })
                            }
                            onMouseLeave={(e) => this.setState({ hover: null })}
                            //onClick={() => this.sendNote(this.state.rating)}
                          />
                        </label>
                      );
                    })}
                    <br></br>
                    <center>
                      <Link to={"/detail/" + el._id}>
                        {" "}
                        <a>
                          <span style={{ color: "black" }}>
                            {" "}
                            <i class="fas fa-eye"></i>
                          </span>
                        </a>
                      </Link>
                    </center>
                  </Card>
                </div>
              ))}
            <br></br>
          </div>
        </div>
        <div className="div-vide">
          {" "}
          <center>
            <Pagination
              defaultCurrent={1}
              pageSize={2}
              total={this.props.event.length}
              onChange={this.page}
            />
          </center>
        </div>
        <div className="div-vide"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.event,
  categorie: state.categorie,
  // authetification: state.authetification.user,
});

const mapDispatchToProps = (dispatch) => ({
  getAllEvents: () => dispatch(getEventsFromApi()),
  getAllCategorie: () => dispatch(getCategorieFromApi()),
  //   getAllCategorie: () => dispatch(getCategorieFromApi()),
  //   getUser: () => dispatch(getUser()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Eventlist);
