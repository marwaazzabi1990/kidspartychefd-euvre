import { combineReducers } from "redux";
import EventReducer from "./EventReducer";
import UserReducer from "./UserReducer";
import CategorieReducer from "./CategorieReducer";
import CommentaireReducer from "./CommentaireReducer";



const allReducers = combineReducers({
    event: EventReducer,

    user: UserReducer,
    categorie: CategorieReducer,
    commentaire: CommentaireReducer,


});

export default allReducers;