import {
    ADD_CATEGORIE,
    DELETE_CATEGORIE,
    GET_CATEGORIE,
    MODIF_CATEGORIE
} from "../Action/Types";
const initialState = [];
export default function UserReducer(state = initialState, action) {
    if (action.type === GET_CATEGORIE) {
        return action.payload;
    }
    if (action.type === ADD_CATEGORIE) {
        return [action.payload, ...state];
    }
    if (action.type === MODIF_CATEGORIE) {
        return [action.payload, ...state];
    }
    if (action.type === DELETE_CATEGORIE) {
        return state.filter((event) => event.id !== action.payload);
    }

    return state;
}
