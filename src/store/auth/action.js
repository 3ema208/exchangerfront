import axios from "axios";

export const AUTH_SUCCESS_LOGIN = "AUTH_SUCCESS_LOGIN"
export const AUTH_LOGOUT = 'AUTH_LOGOUT'


export const tryLogin = (userdata) => {
    return dispatch => {
        axios.post('auth/social/token/telegram/', userdata)
        .then(res => {dispatch(successLogin({...userdata, ...res.data}))})
        .catch(err => {console.log(err)})
    }
}

export const successLogin = (data) => {
    axios.defaults.headers.common['Authorization'] = `Token ${data.token}`
    return ({
        type: AUTH_SUCCESS_LOGIN,
        payload: data
    })
}


export const successLogout = () => {
    return ({
        type: AUTH_LOGOUT
    })
}