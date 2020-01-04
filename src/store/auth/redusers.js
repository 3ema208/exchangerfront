import axios from 'axios'
import { AUTH_CHANGE_EMAIL, AUTH_CHANGE_PASSWORD, AUTH_SUCCESS_LOGIN, AUTH_FAIL_LOGIN, AUTH_LOGOUT } from './action'

const defaultState = {
    id: parseInt(localStorage.getItem('user_id')),
    username: localStorage.getItem('username') ,
    email: '',
    password: "",
    token: localStorage.getItem("user_token"),
    error: false,
};



export default (state = defaultState, action) => {
    switch (action.type) {
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
            let user = action.payload[0]
            localStorage.setItem('user_id', user.id)
            localStorage.setItem("username", user.username)
            localStorage.setItem('user_token', action.payload[1])
            axios.defaults.headers.common['Authorization'] = `Token ${action.payload[1]}`
            return {
                ...state,
                password: undefined,
                id: user.id,
                username: user.username,
                email: user.email,
                token: action.payload[1],
            }
        case AUTH_FAIL_LOGIN:
            return { ...state, error: true }
        case AUTH_LOGOUT:
            delete axios.defaults.headers.common['Authorization']
            localStorage.clear()
            return {
                ...state, 
                id: null,
                username: '',
                email: '',
                token: null,
            }
        default:
            return state
    }
}