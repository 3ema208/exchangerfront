import axios from 'axios'
import {AUTH_CHANGE_EMAIL, AUTH_CHANGE_PASSWORD, AUTH_SUCCESS_LOGIN, AUTH_FAIL_LOGIN} from './action'

const defaultState = {
    id: localStorage.getItem('user_id'),
    username: null,
    email: '',
    password: "",
    token: getToken(),
    error: false,
};

function getToken(){
    let currDate = new Date()
    if (currDate.getDate() > localStorage.getItem('expireTime')){
        localStorage.setItem('expireTime', null)
        return null
    } else {
        return localStorage.getItem("user_token")
    }
}

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
            localStorage.setItem('user_id', action.payload[0])
            localStorage.setItem('user_token', action.payload[1])
            let exT = new Date()
            exT.setDate(exT.getDate() + 1)
            localStorage.setItem('expireTime', exT)
            axios.defaults.headers.common['Authorization'] = `Token ${action.payload[1]}`
            return {
                ...state,
                password: undefined,
                id: action.payload[0],
                token: action.payload[1],
            }
        case AUTH_FAIL_LOGIN:
            return {...state, error: true}
        default:
            return state
    }
}