import { ADD_SESSION } from "./types";
import Axios from "axios";

// Add Session
export const AddSession = (payload) => ({
    type: ADD_SESSION,
    payload,
});

export function addSessionInApi(element) {
    console.log(element);
    return (dispatch) =>
        Axios.post("http://localhost:3000/session", element).then((res) =>
            dispatch(AddSession(res.data))
        );
}