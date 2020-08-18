import React, { Component } from "react";
import { connect } from "react-redux";
class Categorie extends Component {

    render() {
        return (
            <div>
                <h1> la listes de Categorie</h1>

            </div>

        )
    }
}

const mapStateToProps = (state) => ({


});

const mapDispatchToProps = (dispatch) => ({


});
export default connect(mapStateToProps, mapDispatchToProps)(Categorie);