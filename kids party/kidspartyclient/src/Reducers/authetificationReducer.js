import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    LOGIN_SUCCESS,
    // LOGIN_FAIL,
    LOGOUT
} from '../Action/Types';



const initialState = {
    token: localStorage.getItem('token'),
    user: null
};
const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            ;


        case USER_LOADED:
            return {
                ...state,
                user: payload
            };
        case LOGOUT:

            localStorage.removeItem('token')
        case LOGOUT:

            localStorage.removeItem('token')

        default:
            return state;
    }
};
export default authReducer;