import {
    ADD_CATEGORIE,
    ELETE_CATEGORIE,
    GET_CATEGORIE,
    MODIF_CATEGORIE
} from "./Types";
import Axios from "axios";

// Get all Product from Api to Store
export const getAllcategorie = (payload) => ({
    type: GET_CATEGORIE,
    payload,
});
export function getCategorieFromApi() {
    return (dispatch) =>
        Axios.get("http://localhost:3001/categorie").then(
            (res) => {
                console.log(res.data)
                dispatch(getAllcategorie(res.data));
            }
        );
}