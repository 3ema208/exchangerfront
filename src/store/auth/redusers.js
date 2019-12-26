import {AUTH_CHANGE_EMAIL, AUTH_CHANGE_PASSWORD, AUTH_TRY_LOGIN} from './action'

const defaultState = {
    email: "",
    password: "",
    token: "",
};

export default (state=defaultState, action) => {
    switch (action.type){
        case AUTH_CHANGE_EMAIL:
            return {
                ...state, 
                email: action.payload,
            }
        case AUTH_CHANGE_PASSWORD:
            return {
                ...state, 
                password: action.payload
            }
        case AUTH_TRY_LOGIN:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state
    }
}