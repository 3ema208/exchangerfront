export const AUTH_CHANGE_EMAIL = "AUTH_CHANGE_EMAIL_TEXT"
export const AUTH_CHANGE_PASSWORD = "AUTH_CHANGE_PASSWORD_TEXT"
export const AUTH_TRY_LOGIN = "TRY_LOGIN"

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

export const tryLogin = (email, password) => {
    fetch('http://localhost:8181/auth/login/', ).then(responce => {console.log(responce)})

    fetch("http://localhost:8181/auth/login/", {
        mode: "no-cors",
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: {'username': '3ema208', 'passwrod': '12312333a'},
    }).then(
        responce => {
            console.log(responce)
        }
    ).catch(responce => {console.log(responce)})
    return ({type: AUTH_TRY_LOGIN, payload: ''})
}