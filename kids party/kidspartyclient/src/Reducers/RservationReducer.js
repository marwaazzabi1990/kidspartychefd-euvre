import {
  ADD_RSERVATION,
  DELETE_RSERVATION,
  GET_RESERVATION,
  MODIF_RSERVATION,
} from "../Action/Types";
const initialState = [];
export default function UserReducer(state = initialState, action) {
  if (action.type === GET_RESERVATION) {
    return action.payload;
  }
  if (action.type === ADD_RSERVATION) {
    return [action.payload, ...state];
  }
  if (action.type === MODIF_RSERVATION) {
    return [action.payload, ...state];
  }
  if (action.type === DELETE_RSERVATION) {
    return state.filter((event) => event.id !== action.payload);
  }

  return state;
}
