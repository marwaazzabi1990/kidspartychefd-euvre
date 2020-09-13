import {
  ADD_RSERVATION,
  DELETE_RSERVATION,
  GET_RESERVATION,
  MODIF_RSERVATION,
} from "./Types";
import Axios from "axios";

// Get all Product from Api to Store
export const getAllrservation = (payload) => ({
  type: GET_RESERVATION,
  payload,
});
export function getRservationFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:8080/categorie/getallcategories").then(
      (res) => {
        console.log(res.data);
        dispatch(getAllrservation(res.data));
      }
    );
}
/* add  categorie*/
export const AddRservation = (payload) => ({
  type: ADD_RSERVATION,
  payload,
});

export function addRservationInApi(element) {
  console.log(element);
  return (dispatch) =>
    Axios.post(`http://localhost:8080/reservation/addrservation`, element).then(
      (res) => {
        dispatch(AddRservation(res.data));
        // console.log(res.data);
        window.location.reload(false);
      }
    );
}

/* delete rservation*/
export const deleteRservation = (payload) => ({
  type: DELETE_RSERVATION,
  payload,
});
export function deleteRservationToApi(id) {
  return (dispatch) =>
    Axios.delete(`http://localhost:8080/categorie/deletecategorie/${id}`).then(
      (res) => {
        dispatch(deleteRservation(res.data));
        window.location.reload(false);
      }
    );
}

/* moifier reservation*/
export const ModifierRservation = (payload) => ({
  type: MODIF_RSERVATION,
  payload,
});
export function ModifRservationFromApi(data) {
  console.log("hhh", data);
  let id = data.id;
  let idEvent = data.idEvent;
  let titreEvent = data.titreEvent;
  let IdUser = data.IdUser;
  let status = data.status;
  let show = data.show;

  return (dispatch) =>
    Axios.put(`http://localhost:8080/reservation/updatrservation/${id}`, {
      id: id,
      idEvent: idEvent,
      titreEvent: titreEvent,
      IdUser: IdUser,
      status: status,
      show: show,
    }).then((res) => {
      dispatch(ModifierRservation(res.data));
      // window.location.reload();
    });
}
