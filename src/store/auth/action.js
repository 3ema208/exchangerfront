import axios from 'axios'

export const AUTH_CHANGE_EMAIL = "AUTH_CHANGE_EMAIL_TEXT"
export const AUTH_CHANGE_PASSWORD = "AUTH_CHANGE_PASSWORD_TEXT"
export const AUTH_SUCCESS_LOGIN = "AUTH_SUCCESS_LOGIN"
export const AUTH_FAIL_LOGIN = "AUTH_FAIL_LOGIN"
export const AUTH_LOGOUT = "LOGOUT"


export const setEmailText = (email) => {
    return ({
        type: AUTH_CHANGE_EMAIL,
        payload: email
    })
}

export const setPasswordText = (password) => {
    return ({
        type: AUTH_CHANGE_PASSWORD,
        payload: password
    })
}


export const successLogin = (response) => {
    return ({
        type: AUTH_SUCCESS_LOGIN,
        payload: response,
    })

}

export const failLogin = () => {
    return ({
        type: AUTH_FAIL_LOGIN,
    })
}

export const successLogout = () => {
    return ({
        type: AUTH_LOGOUT
    })
}

export const logout = () => {
    return dispatch => {
        axios.post("/auth/logout/")
        .then(res => {
            dispatch(successLogout())
        })
        .catch(err => {
            dispatch(successLogout())
            console.log(err.response)
        })
    }
}

export const login = (username, password) => {
    return dispatch => {
        axios.post('/auth/login/', {
            "username": username, 
            "password": password
        })
        .then(res => {
            let user_id = res.data.user
            const token = res.data.key;
            dispatch(successLogin(user_id, token))
        })
        .catch(err => {
            if (err.response.status === 400){
                dispatch(failLogin())
            }
        })
    }
}