import { AUTH_SUCCESS_LOGIN, AUTH_LOGOUT } from './action'


const defaultState = {
    id: null,
    auth_data: null,
    first_name: "",
    last_name: "",
    photo_url: '',
    username: "",
    token: null,
};


function getDefaultState(){
    let user = localStorage.getItem('user')
    if (user === null) {
        return defaultState
    }
    return JSON.parse(user)
}


export default (state = getDefaultState(), action) => {
    switch (action.type) {
        case AUTH_SUCCESS_LOGIN:
            return {...state, 
                token: action.payload.token, 
                id: action.payload.id,
                auth_date: action.payload.auth_date,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                photo_url: action.payload.photo_url,
                username: action.payload.username,
            }
        case AUTH_LOGOUT:
            state = defaultState
            localStorage.clear()
            return state
        default:
            return state
    }
}