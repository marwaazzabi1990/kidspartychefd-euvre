import {
    GET_ALL_EVENT,
    ADD_EVENT,
    DELETE_EVENT,
    MODIF_EVENT,
} from "./Types";
import Axios from "axios";

// Get all Product from Api to Store
export const getAllevents = (payload) => ({
    type: GET_ALL_EVENT,
    payload,
});
export function getEventsFromApi() {
    return (dispatch) =>
        Axios.get("http://localhost:8080/event/getallevents").then(
            (res) => {

                dispatch(getAllevents(res.data));
            }
        );
}
export const ModifierEvent = (payload) => ({
    type: MODIF_EVENT,
    payload,
});
export function modifEventFromApi(data) {
    console.log(data)
    let id = data.id;
    let titre = data.nom;
    let Date_Debut = data.Date_Debut;
    let Date_fin = data.Date_fin;
    let Adresse = data.Adresse;
    let description = data.description;
    let prix = data.prix;
    let nombre_de_place = data.nombre_de_place;
    let nombre_de_participant = data.nombre_de_participant;
    let affiche = data.affiche;
    let nom_categorie = data.nom_categorie;
    let nom_organzateur = data.nom_organzateur;





    return (dispatch) =>
        Axios.put(`http://localhost:8080/event/updatevents/${id}`, {
            id: id,
            titre: titre,
            Date_Debut: Date_Debut,
            Date_fin: Date_fin,
            Adresse: Adresse,
            description: description,
            prix: prix,
            nombre_de_place: nombre_de_place,
            nombre_de_participant: nombre_de_participant,
            affiche: affiche,
            nom_categorie: nom_categorie,
            nom_organzateur: nom_organzateur
        }).then((res) => {
            dispatch(ModifierEvent(res.data));
            //window.location.reload();
        });
}
/*delette USER */

export const deleteEvent = (payload) => ({
    type: DELETE_EVENT,
    payload,
});
export function deleteEventToApi(id) {
    return (dispatch) =>
        Axios.delete(`http://localhost:8080/event/deleteevnts/${id}`).then(
            (res) => {
                dispatch(deleteEvent(res.data));
                window.location.reload(false);
            }
        );
}
/* add  Event */
export const AddEvent = (payload) => ({
    type: ADD_EVENT,
    payload,
});

export function addEventInApi(element) {
    console.log(element)
    return (dispatch) =>
        Axios.post(`http://localhost:8080/event/addevents`, element).then(
            (res) => {
                dispatch(AddEvent(res.data));
                // console.log(res.data);
                window.location.reload(false);


            }
        );
}
