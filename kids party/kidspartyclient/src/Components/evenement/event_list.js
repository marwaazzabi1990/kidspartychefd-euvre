import React, { Component } from "react";
import { connect } from "react-redux";
import './event_list.css';
import {
    getEventsFromApi,

} from "../../Action/EventAction.js";
import {
    getCategorieFromApi
} from "../../Action/CategorieAction.js";
import {
    getUser

} from "../../Action/AuthentificationAction"
import { Carousel, InputGroup, FormControl, Form } from 'react-bootstrap';
import { MDBRow, MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import ModalDetail from "./Detail_Event";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { FaSearch, FaUsers } from 'react-icons/fa';
var categorie = [];
var newArray = [];


class Event_list extends Component {
    state = {
        Categorie: "",
        Adresse: "",
        titre: "",

    }
    componentDidMount() {
        this.props.getAllEvents();
        this.props.getAllCategorie();
        this.props.getUser();

    }
    filter = (e) => {

        let input = e.target.value;

        this.setState({ titre: input });


        console.log(this.state.titre);
    };
    distinctDoubleCategorie = () => {
        let ArrayOfCategorie = [];
        console.log("categorie is :" + this.props.categorie)
        this.props.categorie.map((el) => ArrayOfCategorie.push(el.nom_categorie));
        newArray = new Set(ArrayOfCategorie);
        categorie = [...newArray];
    };


    render() {
        this.distinctDoubleCategorie();
        const { event } = this.props;
        //  const { categorie } = this.props;
        this.props.authetification&&console.log(this.props.authetification.role)

        return (
            <div>
                <div>
                    {/*  crrousel zone */}
                    <Carousel className="carrousel_style">
                        {event.slice(event.length - 10, event.length).map((el, i) => (<Carousel.Item>
                            <img
                                className="image-slider"
                                src={"http://localhost:8080/" + el.affiche}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>))}


                    </Carousel>
                    {/*Filtre   zone */}

                </div>


                <div className="flexselect">


                    <div>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1" ><FaSearch /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <input onChange={(e) => this.filter(e)}
                                placeholder="Rechercher  "
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>


                    </div>
                    <div >


                        <select onChange={(e) =>
                            this.setState({ Adresse: (e.target.value) })
                        }  >



                            <option value="">Indiquez votre destination</option>

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
                            onChange={(e) =>
                                this.setState({ Categorie: (e.target.value) })
                            }
                            name="pets"
                            id="Quantity-select"
                        >
                            <option value="">Categorie</option>
                            {categorie.map((el) => (
                                <option value={el}>{el}</option>
                            ))}
                        </select>
                    </div>
                </div>


                {/*Card Event */}


                < div className="pos_card" >


                    {
                        event
                            .filter((elcategorie) =>
                                this.state.Categorie === "" ? elcategorie : elcategorie.nom_categorie === this.state.Categorie
                            ).filter((eladresse) =>
                                this.state.Adresse === "" ? eladresse : eladresse.Adresse === this.state.Adresse

                            ).filter((eltitre) =>
                                this.state.titre === "" ? eltitre : eltitre.titre.includes(this.state.titre)
                            )
                            .map((el, i) => (
                                <MDBCol >
                                    <MDBCard className="card-style">
                                        <MDBCardImage className="image_card" src={"http://localhost:8080/" + el.affiche}
                                            waves />
                                        <MDBCardBody>
                                            <MDBCardTitle>{el.titre}</MDBCardTitle>
                                            <MDBCardText>{el.Adresse}</MDBCardText>
                                            <MDBCardText>  {el.nom_categorie}</MDBCardText>

                                            <MDBCardText>{el.nombre_de_participant} <FaUsers /></MDBCardText>
                                            <Link to={"/detail/" + el._id}>
                                                {" "}
                                                <button className="btn-card-detail">
                                                    Detail <i class="fas fa-info-circle"></i>
                                                </button>
                                            </Link>
                                        </MDBCardBody>

                                    </MDBCard>

                                </MDBCol>

                            ))
                    }</div >

            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    event: state.event,
    categorie: state.categorie,
    authetification: state.authetification.user

});

const mapDispatchToProps = (dispatch) => ({
    getAllEvents: () => dispatch(getEventsFromApi()),
    getAllCategorie: () => dispatch(getCategorieFromApi()),
    getUser: () => dispatch(getUser())

});
export default connect(mapStateToProps, mapDispatchToProps)(Event_list);