import { ADD_USER, DELETE_USER, GET_USER, MODIF_USER } from "./Types";
import Axios from "axios";
import Swal from "sweetalert2";
function AcceptUser() {
  Swal.fire({
    text: "vous etes bien enregistrer",
    icon: "success",
    confirmButtonText: "Fermer",
    confirmButtonColor: "#008000",
    animation: true,
  });
}
function refuseUser() {
  Swal.fire({
    text: "verifier vous donnees",
    icon: "ok",
    confirmButtonText: "Fermer",
    confirmButtonColor: "#DD6B55",
    animation: true,
  });
}

// Get user conecte from Api to Store************************/
export const getAlluser = (payload) => ({
  type: GET_USER,
  payload,
});
export function getUsersFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:8080/user/getallusers").then((res) => {
      console.log(res.data);
      dispatch(getAlluser(res.data));
    });
}
/***************************** add  User******************************** */
export const AddUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export function addUserFromApi(element) {
  return (dispatch) =>
    Axios.post(`http://localhost:8080/user/adduser`, element).then((res) => {
      dispatch(AddUser(res.data));
      console.log(res.data);
      if (res.data.msg == "accepter") {
        AcceptUser();
        window.location.pathname = "/log";
      } else {
        refuseUser();
      }
      // console.log(res.data);
      //   window.location.reload(false);
    });
}

/*************************************modif user****************************************/
export const ModifierUser = (payload) => ({
  type: MODIF_USER,
  payload,
});
export function modifUserFromApi(data) {
  console.log(data);
  let id = data.id;
  let a = data.nom;
  /*let b = data.username;*/
  let c = data.email;
  let d = data.password;
  let e = data.role;
  return (dispatch) =>
    Axios.put(`http://localhost:8080/user/updatusers/${id}`, {
      nom: a,

      /* username: b,*/
      email: c,
      password: d,
      role: e,
    }).then((res) => {
      dispatch(ModifierUser(res.data));
      window.location.reload();
    });
}
/*********************************delette USER****************************** */

export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload,
});
export function deleteUserToApi(id) {
  return (dispatch) =>
    Axios.delete(`http://localhost:8080/user/deletuser/${id}`).then((res) => {
      dispatch(deleteUser(res.data));
      window.location.reload(false);
    });
}
