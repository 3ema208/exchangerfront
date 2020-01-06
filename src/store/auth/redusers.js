import { AUTH_SUCCESS_LOGIN, AUTH_LOGOUT } from './action'

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
        case AUTH_SUCCESS_LOGIN:
            state = action.payload
            return state
            
        case AUTH_LOGOUT:
            state = defaultState
            return state
        default:
            return state
    }
}