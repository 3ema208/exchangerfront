import axios from 'axios'
import { AUTH_CHANGE_EMAIL, AUTH_CHANGE_PASSWORD, AUTH_SUCCESS_LOGIN, AUTH_FAIL_LOGIN, AUTH_LOGOUT } from './action'

const defaultState = {
    auth_data: null,
    first_name: "",
    hash: "",
    id: null,
    last_name: "",
    photo_url: "",
    username: "",
};



export default (state = defaultState, action) => {
    switch (action.type) {
        case AUTH_CHANGE_EMAIL:
            return {
                ...state,
            }
        case AUTH_CHANGE_PASSWORD:
            return {
                ...state,
            }
        case AUTH_SUCCESS_LOGIN:
            return {
                ...state,
            }
        case AUTH_FAIL_LOGIN:
            return { ...state, error: true }
        case AUTH_LOGOUT:
            return {
                ...state,
            }
        default:
            return state
    }
}