import {AUTH_CHANGE_EMAIL, AUTH_CHANGE_PASSWORD, AUTH_SUCCESS_LOGIN, AUTH_FAIL_LOGIN} from './action'

const defaultState = {
    email: "",
    password: "",
    token: null,
    error: false,
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
        case AUTH_SUCCESS_LOGIN:
            return {
                ...state,
                token: action.payload
            }
        case AUTH_FAIL_LOGIN:
            return {...state, error: true}
        default:
            return state
    }
}