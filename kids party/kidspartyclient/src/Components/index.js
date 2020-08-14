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
import Detail from "./evenement/Detail_Event";
import {
    getUser

} from "../Action/AuthentificationAction"
import {
    getEventsFromApi,

} from "../Action/EventAction";

import "./acceuil.css";

class Index extends Component {
    componentDidMount() {

        this.props.getUser();
    }

    render() {
        this.props.authetification && console.log(this.props.authetification.role)
        return (

            < div >
                <Router>

                    <div >
                        <div >


                            {/*    link router  */}
                            <Nav className="menus" >
                                < NavItem>
                                    <img src={logo} className="img-lg" />
                                </NavItem>
                                <NavItem>
                                    <Link>
                                        <Link to="/">
                                            <NavLink >Les evenments</NavLink>
                                        </Link>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link>
                                        {this.props.authetification && this.props.authetification.role === "Admin" ? <Link to="/users">
                                            <NavLink >Utlisateurs</NavLink>
                                        </Link> : ""}
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link>
                                        <Link to="/Gerer_evenement">
                                            <NavLink >Gerer mes evenements </NavLink>
                                        </Link>
                                    </Link>
                                </NavItem>



                                <NavItem >
                                    {this.props.authetification ? <Link to="/connexion">
                                        <NavLink >Log out</NavLink>
                                    </Link> : <NavLink > <Link>connexion</Link></NavLink>}
                                </NavItem>
                                <NavItem >
                                    {this.props.authetification ? <Link to="/inscription">
                                        <NavLink ></NavLink>
                                    </Link> : <NavLink > <Link>Inscription</Link></NavLink>}
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


                    <div className="footer">
                        <p>
                            Copyright &copy; Simplon Tunis, Made with{" "}
                            <i class="fas fa-heart"></i>
                        </p>
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
    getUser: () => dispatch(getUser())

});
export default connect(mapStateToProps, mapDispatchToProps)(Index);