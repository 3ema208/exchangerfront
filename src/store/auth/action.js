export const AUTH_SUCCESS_LOGIN = "AUTH_SUCCESS_LOGIN"
export const AUTH_LOGOUT = 'AUTH_LOGOUT'


export const successLogin = (userdata) => {
    return ({
        type: AUTH_SUCCESS_LOGIN,
        payload: userdata,
    })

}

export const successLogout = () => {
    return ({
        type: AUTH_LOGOUT
    })
}