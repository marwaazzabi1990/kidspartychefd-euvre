import {
  ADD_CATEGORIE,
  DELETE_CATEGORIE,
  GET_CATEGORIE,
  MODIF_CATEGORIE,
} from "./Types";
import Axios from "axios";

// Get all Product from Api to Store
export const getAllcategorie = (payload) => ({
  type: GET_CATEGORIE,
  payload,
});
export function getCategorieFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:8080/categorie/getallcategories").then(
      (res) => {
        console.log(res.data);
        dispatch(getAllcategorie(res.data));
      }
    );
}
/* add  categorie*/
export const AddCategorie = (payload) => ({
  type: ADD_CATEGORIE,
  payload,
});

export function addCategorieInApi(element) {
  console.log(element);
  return (dispatch) =>
    Axios.post(`http://localhost:8080/categorie/addcategories`, element).then(
      (res) => {
        dispatch(AddCategorie(res.data));
        // console.log(res.data);
        window.location.reload(false);
      }
    );
}

/* delete categorie*/
export const deleteCategorie = (payload) => ({
  type: DELETE_CATEGORIE,
  payload,
});
export function deleteCategorieToApi(id) {
  return (dispatch) =>
    Axios.delete(`http://localhost:8080/event/deleteevnts/${id}`).then(
      (res) => {
        dispatch(deleteCategorie(res.data));
        window.location.reload(false);
      }
    );
}
export const ModifierCategorie = (payload) => ({
  type: MODIF_CATEGORIE,
  payload,
});
export function ModifCategorieFromApi(data) {
  let id = data.id;
  let titre = data.titre;
  let description = data.description;

  return (dispatch) =>
    Axios.put(`http://localhost:8080/categorie/updatcategorie/${id}`, {
      id: id,
      titre: titre,
      Description: description,
    }).then((res) => {
      dispatch(ModifierCategorie(res.data));
      // window.location.reload();
    });
}
