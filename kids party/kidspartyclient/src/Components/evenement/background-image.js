import React from "react";

import {
  MDBNavbar,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
} from "mdbreact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
} from "react-router-dom";
import "./background-image.css";
import poule from "../../boule.jpg";

class AppPage extends React.Component {
  state = {
    collapsed: false,
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s">
                    <h1 className="h1-responsive font-weight-bold mt-sm-5 color-text1">
                      Kids Party
                    </h1>
                    <hr className="hr-light" />
                    <h6 className="mb-4 color-text1">
                      Kids party est un annuaire des evenements qui vise les
                      enfants .
                    </h6>
                    <Link to="/inscription">
                      <button className="btn btn-outline btn-md btn-rounded btn-navbar waves-effect waves-light btn_menu ">
                        Inscription
                      </button>
                    </Link>{" "}
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5">
                  {/* <MDBAnimation type="fadeInRight" delay=".3s">
                    <img src={poule} alt="" className="img-fluid" />
                  </MDBAnimation> */}
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default AppPage;
