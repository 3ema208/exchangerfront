import { AUTH_SUCCESS_LOGIN, AUTH_LOGOUT } from './action'


const defaultState = {
    auth_data: null,
    first_name: "",
    hash: "",
    id: null,
    last_name: "",
    photo_url: '',
    username: "",
};


function getDefaultState(){
    let user = localStorage.getItem('user')
    if (user === null) {
        return defaultState
    }
    let user_json = JSON.parse(user)

    return user_json
}


export default (state = getDefaultState(), action) => {
    switch (action.type) {
        case AUTH_SUCCESS_LOGIN:
            state = action.payload
            localStorage.setItem('user', JSON.stringify(state))
            return state
        case AUTH_LOGOUT:
            state = defaultState
            localStorage.clear()
            return state
        default:
            return state
    }
}