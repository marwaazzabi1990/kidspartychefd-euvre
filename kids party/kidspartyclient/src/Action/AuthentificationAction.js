import axios from "axios";
import { USER_LOADED, LOGIN_SUCCESS, LOGOUT } from "../Action/Types";
import setAuthToken from "./setToken";



export function login(el) {
    return (dispatch) =>
        axios
            .post("http://localhost:8080/user/SingIn", el)
            .then(
                (res) =>
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: res.data,
                    }),
                dispatch(getUser())
            )
            .catch((err) => alert("Créez un compte"));
}
export const getUser = () => async (dispatch) => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
    try {
        const res = await axios.get(
            "http://localhost:8080/user/getuserconnecte"
        );
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
    window.location.reload();
};