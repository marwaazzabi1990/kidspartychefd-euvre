import React, { Component } from "react";
import { connect } from "react-redux";
import { getCategorieFromApi } from "../../Action/CategorieAction.js";
import { Pagination } from "antd";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

import { Card } from "antd";
import { MDBIcon } from "mdbreact";

import { getEventsFromApi } from "../../Action/EventAction.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

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
  componentWillUpdate() {
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

  render() {
    return (
      <div className="pos-generale">
        {" "}
        <h2 className="bienveneu-h1">
          {" "}
          Événements <span className="titre-speciale">En Kids Party</span>
        </h2>
        <div className="pos-filter">
          <div style={{ width: 240, marginTop: 30 }}>
            <div>
              <h5
                style={{ fontSize: 30, fontWeight: "bolder", color: "black" }}
              >
                Filtrer par{" "}
              </h5>
              <br></br>
            </div>

            <div>
              <Search
                placeholder="input search "
                onChange={(e) => this.filter(e)}
                onSearch={(value) => console.log(value)}
                style={{ width: 240 }}
              />
              <br></br> <br></br>
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
            <br></br>
            <div>
              <select
                className="browser-default custom-select"
                onChange={(e) => this.setState({ prix: e.target.value })}
              >
                <option value="0">Prix</option>

                <option value="5">moins 5 DT</option>
                <option value="30">moins 30 DT</option>
                <option value="50">mois 50 DT</option>
                <option value="100">mois 100 DT</option>
              </select>
            </div>

            <div>
              <br></br>
              <select
                className="browser-default custom-select"
                onChange={(e) => this.setState({ Categorie: e.target.value })}
                name="pets"
                id="Quantity-select"
              >
                <option value="">Categorie</option>
                {this.props.categorie.map((el, i) => (
                  <option value={el.titre}>{el.titre}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pos_card2">
            {this.props.event
              .filter((elcategorie) =>
                this.state.Categorie === ""
                  ? elcategorie
                  : elcategorie.nom_categorie.includes(this.state.Categorie)
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
              .filter((el) => {
                if (this.state.prix) {
                  return el.prix <= Number(this.state.prix);
                } else if (this.state.prix === "Gratuit") {
                  return el.prix === this.state.prix;
                } else {
                  return el;
                }
              })

              .filter(
                (el, i) =>
                  (this.state.page - 1) * this.state.pageSize <= i &&
                  i < this.state.page * this.state.pageSize
              )
              .map((el) => (
                <div>
                  <Card
                    className="overflow"
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
                    <Meta title={el.titre} />
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
                            <MDBIcon
                              className="detai_icon"
                              icon="search-plus"
                            />
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
});

const mapDispatchToProps = (dispatch) => ({
  getAllEvents: () => dispatch(getEventsFromApi()),
  getAllCategorie: () => dispatch(getCategorieFromApi()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Eventlist);
