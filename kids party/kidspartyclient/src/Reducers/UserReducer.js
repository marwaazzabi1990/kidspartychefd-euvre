import {
    ADD_USER,
    DELETE_USER,
    GET_USER,
    MODIF_USER
} from "../Action/Types";
const initialState = [];
export default function UserReducer(state = initialState, action) {
    if (action.type === GET_USER) {
        return action.payload;
    }
    if (action.type === ADD_USER) {
        return [action.payload, ...state];
    }
    if (action.type === MODIF_USER) {
        return [action.payload, ...state];
    }
    if (action.type === DELETE_USER) {
        return state.filter((event) => event.id !== action.payload);
    }
    const initialState = {
        token: localStorage.getItem('token'),
        user: null
      };

    return state;
}
