import { ADD_EVENT, DELETE_EVENT, GET_ALL_EVENT, MODIF_EVENT } from "../Action/Types";
const initialState = [];
export default function UserReducer(state = initialState, action) {
    if (action.type === GET_ALL_EVENT) {
        return action.payload;
    }
    if (action.type === ADD_EVENT) {
        return [action.payload, ...state];
    }
    if (action.type === MODIF_EVENT) {
        return [action.payload, ...state];
    }
    if (action.type === DELETE_EVENT) {
        return state.filter((event) => event.id !== action.payload);
    }

    return state;
}
