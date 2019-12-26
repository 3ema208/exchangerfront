import {AUTH_CHANGE_EMAIL, AUTH_CHANGE_PASSWORD} from './action'

const defaultState = {
    email: "22",
    password: "33"
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
        default:
            return state
    }
}