import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
import { connect } from "react-redux";
import { modifEventFromApi, getEventsFromApi } from "../Action/EventAction";
var notesfinal = 0;
class StartRating extends Component {
  state = {
    rating: null,
    hover: null,
  };

  sendNote = (e, el) => {
    console.log("zz", Number(e));

    console.log("le nombre de notes de base ", Number(el));
    /*  console.log(
      "les nombre de personne de base ",
      Number(this.props.el.nb_per_note)
    );*/
    let moy1 = Number(this.props.el.notes) * Number(this.props.el.nb_per_note);
    console.log("moy1 apres calcul", moy1);
    let moy2 = Number(moy1) + Number(e);
    console.log("moy2", moy2);
    let nbt = Number(this.props.el.nb_per_note) + 1;
    console.log("nbt", nbt);
    notesfinal = Number(moy2) / Number(nbt);

    console.log("notesfinal", notesfinal);
    this.props.Modifierevent({
      id: this.props.el._id,
      titre: this.props.el.titre,
      Date_Debut: this.props.el.Date_Debut,
      Date_fin: this.props.el.Date_fin,
      Adresse: this.props.el.Adresse,
      description: this.props.el.description,
      notes: notesfinal,
      nb_per_note: this.props.el.nb_per_note + 1,
      prix: this.props.el.prix,
      nombre_de_place: this.props.el.nombre_de_place,
      nombre_de_participant: this.props.el.nombre_de_participant,
      affiche: this.props.el.affiche,
      nom_categorie: this.props.el.nom_categorie,
      // nom_organzateur: this.state.nom_organzateur,
    });
    //window.location.reload();
  };
  componentDidMount() {
    this.props.getAllEvents();
  }
  render() {
    /// console.log("sds", this.props.el.notes);
    return (
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={(e) => {
                  this.setState({ rating: e.target.value });
                  this.sendNote(e.target.value);
                }}
              />{" "}
              <FaStar
                className="star"
                color={
                  ratingValue <= (this.state.hover || this.state.rating)
                    ? "#ffc107"
                    : "#e4e5e9"
                }
                size={20}
                onMouseEnter={(e) => this.setState({ hover: ratingValue })}
                onMouseLeave={(e) => this.setState({ hover: null })}
                onClick={() =>
                  this.sendNote(this.state.rating, this.props.notes)
                }
              />
            </label>
          );
        })}
        <p>the rating is {this.state.rating}.</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.event,
  //authetification: state.authetification,
});

const mapDispatchToProps = (dispatch) => ({
  Modifierevent: (el) => dispatch(modifEventFromApi(el)),
  getAllEvents: () => dispatch(getEventsFromApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartRating);
