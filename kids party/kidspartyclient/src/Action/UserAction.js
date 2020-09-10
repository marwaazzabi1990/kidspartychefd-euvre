import { ADD_USER, DELETE_USER, GET_USER, MODIF_USER } from "./Types";
import Axios from "axios";

// Get all Product from Api to Store
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
/* add  User */
export const AddUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export function addUserFromApi(element) {
  console.log(element);

  return (dispatch) =>
    Axios.post(`http://localhost:8080/user/adduser`, element).then((res) => {
      dispatch(AddUser(res.data));
      // console.log(res.data);
      //   window.location.reload(false);
      //window.location.pathname = "/log";
    });
}

/*modif user*/
export const ModifierUser = (payload) => ({
  type: MODIF_USER,
  payload,
});
export function modifUserFromApi(data) {
  console.log(data);
  let id = data.id;
  let a = data.nom;
  let b = data.username;
  let c = data.email;
  let d = data.password;
  let e = data.role;
  return (dispatch) =>
    Axios.put(`http://localhost:8080/user/updatusers/${id}`, {
      nom: a,

      username: b,
      email: c,
      password: d,
      role: e,
    }).then((res) => {
      dispatch(ModifierUser(res.data));
      window.location.reload();
    });
}
/*delette USER */

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
