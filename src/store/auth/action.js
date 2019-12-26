export const AUTH_CHANGE_EMAIL = "AUTH_CHANGE_EMAIL_TEXT"
export const AUTH_CHANGE_PASSWORD = "AUTH_CHANGE_PASSWORD_TEXT"


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