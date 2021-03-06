import axios from "axios";
import { USER_LOADED, LOGIN_SUCCESS, LOGOUT } from "../Action/Types";
import setAuthToken from "./setToken";

/****************************envoyer de donnes personne demande connexion******************************* */
export function login(el) {
  return (dispatch) =>
    axios
      .post("http://localhost:8080/user/SingIn", el)
      .then((res) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
        dispatch(getUser());
        window.location.pathname = "/";
      })

      .catch((err) => alert("Créez un compte"));
}
/************************ cordonnes utlisateur conecte *************************** */
export const getUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("http://localhost:8080/user/getuserconnecte");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  window.location.assign("/");
};
