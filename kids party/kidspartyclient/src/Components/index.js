import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../logo.png";
import Event_list from './evenement/event_list';
import GererEvenement from './evenement/Gerrer_evenements'
import { Nav, NavItem, NavLink, Spinner } from "reactstrap";
import LogIn from "./authentification/LogIn";
import Register from "./Users/Register";
import Users from "./Users/users_professionnel";
import Detail from "./evenement/Detail_Event"
import { getUser, logout } from "../Action/AuthentificationAction"
import {
    getEventsFromApi,

} from "../Action/EventAction";
import { MDBBtn } from 'mdbreact'

import "./acceuil.css";

class Index extends Component {
    componentDidMount() {

        this.props.getUser();
    }

    render() {
        this.props.authetification && console.log(this.props.authetification.role)
        // const role = this.props.authetification && this.props.authetification.role
        if (this.props.authetification) {
            console.log("index", this.props.authetification && this.props.authetification.role)
        }
        const role = this.props.authetification && this.props.authetification.role


        return (

            < div >
                <Router>

                    <div >
                        <div >


                            {/*    link router  */}
                            <Nav className="menus" >
                                < NavItem className="menu_NavItem">
                                    <img src={logo} className="img-lg" />
                                </NavItem>
                                <NavItem className="menu_NavItem">
                                    <Link>
                                        <Link to="/" >
                                            <NavLink className="menu_NavItem">Acceuil</NavLink>
                                        </Link>
                                    </Link>
                                </NavItem>
                                {/* <NavItem className="menu_NavItem">
                                    <Link>
                                        {{ role } === "Admin" ?
                                            <Link to="/users">
                                                <NavLink className="menu_NavItem"></NavLink>
                                            </Link> : <Link to="/users">
                                                <NavLink className="menu_NavItem">Utlisateurs</NavLink>
                                            </Link>}
                                    </Link>
                                </NavItem> */}
                                <NavItem className="menu_NavItem">
                                    <Link>
                                        <Link to="/Gerer_evenement">
                                            <NavLink className="menu_NavItem">Mes evenements </NavLink>
                                        </Link>
                                    </Link>
                                </NavItem>



                                {/* <NavItem className="menu_NavItem" >
                                    {this.props.authetification ? <Link to="/connexion" className="menu_NavItem">
                                        <NavLink  ><Link>Log out </Link></NavLink>
                                    </Link> : <NavLink > <Link>connexion</Link></NavLink>}


                                </NavItem> */}
                                {/* <NavItem className="menu_NavItem" >
                                    {this.props.authetification ? <Link to="/connexion" className="menu_NavItem ">
                                        <NavLink > </NavLink>
                                    </Link> : <NavLink > <Link>Conexion</Link></NavLink>}

                                </NavItem> */}
                                <NavItem className="menu_NavItem" >
                                    {role === "admin" ?


                                        <NavLink > <Link to="/users"> Utlisateurs</Link>  </NavLink>
                                        :
                                        <NavItem className="menu_NavItem" >       </NavItem>
                                    }

                                </NavItem>
                                <NavItem  >
                                    {this.props.authetification ?
                                        <NavLink onClick={() => this.props.logout()}> Log out</NavLink>
                                        :
                                        <NavItem className="pos_btn_menu">   <Link className="btn-color" to="/inscription">   <MDBBtn >Inscription</MDBBtn></Link>
                                            <Link className="btn-color" to="/connexion">    <LogIn /></Link > </NavItem>}

                                </NavItem>

                            </Nav>
                        </div>





                        {/* routing  menu principal */}
                        <div >
                            <Switch >

                                <Route exact path="/">

                                    <Event_list />

                                </Route>

                                <Route exact path="/users">

                                    <Users />

                                </Route>

                                <Route exact path="/connexion">


                                    <LogIn />

                                </Route>
                                <Route exact path="/Gerer_evenement">
                                    <GererEvenement />

                                </Route>


                                <Route exact path="/inscription">

                                    <Register />

                                </Route>
                                {this.props.event.map((el) => (
                                    <Route exact path={"/detail/" + el._id}>
                                        <Detail el={el} />
                                    </Route>
                                ))}


                            </Switch>
                        </div>
                    </div>



                </Router >
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
    /*modal get token with exct information*/
    getUser: () => dispatch(getUser()),
    logout: () => dispatch(logout())
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);