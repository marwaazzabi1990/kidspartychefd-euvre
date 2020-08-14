import { combineReducers } from "redux";
import EventReducer from "./EventReducer";
import UserReducer from "./UserReducer";
import CategorieReducer from "./CategorieReducer";
import CommentaireReducer from "./CommentaireReducer";
import authetificationReducer from "./authetificationReducer";



const allReducers = combineReducers({
    event: EventReducer,

    user: UserReducer,
    categorie: CategorieReducer,
    commentaire: CommentaireReducer,
    authetification: authetificationReducer


});

export default allReducers;