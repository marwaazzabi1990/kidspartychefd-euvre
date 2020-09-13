import React, { Component } from "react";
import { connect } from "react-redux";
import { FaStar } from "react-icons/fa";
import Moment from "react-moment";
import { MDBIcon } from "mdbreact";
import "./event_list.css";
import { getEventsFromApi } from "../../Action/EventAction.js";
import { getCategorieFromApi } from "../../Action/CategorieAction.js";
import { getUser } from "../../Action/AuthentificationAction";

import { Card } from "antd";

import { AudioOutlined } from "@ant-design/icons";
import { Pagination } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AppPage from "../evenement/background-image";
import { Input } from "antd";
const { Search } = Input;

/*function onChange(a, b, c) {
  console.log(a, b, c);
}*/

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
// import Chart from "../shurt";
// import { Pie } from "react-chartjs-2";
var categorie = [];
var newArray = [];

class Event_list extends Component {
  state = {
    Categorie: "",
    Adresse: "",
    titre: "",
    prix: "",
    pageSize: 4,
    page: 1,
  };
  // categorie = () => {
  //   this.setState({categorie:})
  // };
  componentDidMount() {
    this.props.getAllEvents();
    this.props.getAllCategorie();
    this.props.getUser();
    // localStorage.setItem('nom', this.props.authetification.nom)
  }
  page = (page, pageSize) => {
    this.setState({ page: page, pageSize: pageSize });
  };
  filter = (e) => {
    let input = e.target.value;

    this.setState({ titre: input });

    console.log(this.state.titre);
  };
  distinctDoubleCategorie = () => {
    let ArrayOfCategorie = [];
    console.log("categorie is :" + this.props.categorie);
    this.props.categorie.map((el) => ArrayOfCategorie.push(el.nom_categorie));
    newArray = new Set(ArrayOfCategorie);
    categorie = [...newArray];
  };

  render() {
    console.log(this.props.event);
    this.distinctDoubleCategorie();
    const { event } = this.props;
    // this.nomUser();
    //  const { categorie } = this.props;
    this.props.authetification &&
      console.log("non", this.props.authetification.nom);

    return (
      <div>
        <AppPage />

        {/**************************************************************Filtre   zone ***************************************/}

        <div className="pos-categorie ">
          <div>
            <Search
              placeholder="input search "
              onChange={(e) => this.filter(e)}
              onSearch={(value) => console.log(value)}
              style={{ width: 160, marginTop: 40 }}
            />
          </div>
          <div>
            <select
              style={{ width: 160, marginLeft: 10, marginTop: 40 }}
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
            <select
              style={{ width: 160, marginTop: 40 }}
              className="browser-default custom-select"
              onChange={(e) => this.setState({ prix: e.target.value })}
            >
              <option value="">Prix</option>

              <option value="5">moins 5 DT</option>
              <option value="30">moins 30 DT</option>
              <option value="50">mois 50 DT</option>
              <option value="100">mois 100 DT</option>
            </select>
          </div>

          <div>
            <select
              style={{ width: 160, marginTop: 40 }}
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

        {/* *********************************************** zonne Event******************************************** */}

        <h2 className="bienveneu-h2">
          {" "}
          Événements <span className="titre-speciale">Sur kids Party</span>
        </h2>
        {/*Card Event */}
        <div className="pos_card">
          {event
            .filter((el) =>
              this.state.Categorie === ""
                ? el
                : el.nom_categorie === this.state.Categorie
            )
            .filter((el) =>
              this.state.Adresse === ""
                ? el
                : el.Adresse.includes(this.state.Adresse)
            )
            .filter((el) =>
              this.state.titre === "" ? el : el.titre.includes(this.state.titre)
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

            // .slice(event.length - 6, event.length)
            .map((el, i) => (
              <div>
                <Link to={"/detail/" + el._id}>
                  <Card
                    className="overflow"
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <img
                        className="img"
                        alt="example"
                        src={"http://localhost:8080/" + el.affiche}
                      />
                    }
                  >
                    <div className="text">
                      <span> title: </span> {el.titre} <br></br>{" "}
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

                    <Link to={"/detail/" + el._id}>
                      {" "}
                      <a>
                        <span style={{ color: "black" }}>
                          {" "}
                          <MDBIcon className="detai_icon" icon="search-plus" />
                        </span>
                      </a>
                    </Link>
                  </Card>
                  ,
                </Link>
              </div>
            ))}
        </div>
        {/**************************************Pagination********************************* */}
        <center>
          <Pagination
            defaultCurrent={1}
            pageSize={4}
            total={this.props.event.length}
            onChange={this.page}
          />
        </center>

        <div className="div-vide"></div>
      </div>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(Event_list);

{
  /* 

                  <MDBCol>
                    <div className="pos-card-map">
                      <MDBCard className="card">
                        <MDBCardImage
                          className="img-fluid"
                          src={"http://localhost:8080/" + el.affiche}
                        />
                        <MDBCardBody>
                          <MDBCardTitle>{el.titre}</MDBCardTitle>
                          <MDBCardText>
                            <div className="rating">
                              {/*rating  */
}
{
  /* {[...Array(5)].map((star, i) => {
                                const ratingValue = i + 1;
                                return (
                                  <label>
                                    <input
                                      type="radio"
                                      name="rating"
                                      value={el.notes}
                                    />{" "}
                                    <FaStar
                                      className="star"
                                      color={
                                        ratingValue <= el.notes
                                          ? "#ffc107"
                                          : "#e4e5e9"
                                      }
                                      size={20}
                                      onMouseEnter={(e) =>
                                        this.setState({ hover: ratingValue })
                                      }
                                      onMouseLeave={(e) =>
                                        this.setState({ hover: null })
                                      }
                                      //onClick={() => this.sendNote(this.state.rating)}
                                    />
                                  </label>
                                );
                              })}
                            </div>
                          </MDBCardText>
                          <MDBBtn>
                            {" "}
                            <Link to={"/detail/" + el._id}>
                              {" "}
                              <a>
                                <span style={{ color: "white" }}>
                                  {" "}
                                  EN SAvoir PLUS
                                </span>
                              </a>
                            </Link>
                          </MDBBtn>
                        </MDBCardBody>
                      </MDBCard>

                      {/*ici card*/
}
{
  /* </div>
                  </MDBCol>
                </div>
                {/*end of cards events*/
}
{
  /* </MDBCol>
            ))} */
}
{
  /* </div> */
} /*
<div class="grid">
<figure class="effect-lily">
  <img src={"http://localhost:8080/" + el.affiche} />
  <figcaption>
    <div>
      <h2 className="color-text">{el.titre}</h2>
      <p>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={el.notes}
              />{" "}
              <FaStar
                className="star"
                color={
                  ratingValue <= el.notes
                    ? "#ffc107"
                    : "#e4e5e9"
                }
                size={20}
                onMouseEnter={(e) =>
                  this.setState({ hover: ratingValue })
                }
                onMouseLeave={(e) =>
                  this.setState({ hover: null })
                }
                //onClick={() => this.sendNote(this.state.rating)}
              />
            </label>
          );
        })}
      </p>
    </div>
  </figcaption>
</figure>
</div>*/

/*annimatio,n*/
