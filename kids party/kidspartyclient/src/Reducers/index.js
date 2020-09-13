import { combineReducers } from "redux";
import EventReducer from "./EventReducer";
import UserReducer from "./UserReducer";
import CategorieReducer from "./CategorieReducer";
import CommentaireReducer from "./CommentaireReducer";
import authetificationReducer from "./authetificationReducer";
import RservationReducer from "./RservationReducer";

const allReducers = combineReducers({
  event: EventReducer,

  user: UserReducer,
  categorie: CategorieReducer,
  commentaire: CommentaireReducer,
  authetification: authetificationReducer,
  rservation: RservationReducer,
});

export default allReducers;
