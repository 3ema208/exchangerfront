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

// const defaultState = {
//     auth_data: 1578325205,
//     first_name: "Roman",
//     hash: "sad",
//     id: 292317891,
//     last_name: "Nedobytko",
//     photo_url: 'https://cdn4.telesco.pe/file/BLE9shaW-sBVLhIBgHb9xZqA8ElppDl9-XnKREUcU3aLGH9m2qs8qDtZ8bUjiF64t8RZIeCBSbRWZJ_QvnwS8f4tAL7YyDUl2EoX98JfppcnX5xl3n64BjHu-vUIpD5JKp5YI7PsrHxWSqGvKVAPccIDwqsunvdF88QuiTvutBhv_m7gbNt8GWNBc7kpza_g7p6y3F2dS4CAs0mPWqldEC7dZdAUHNOSS2CZpI_t2iSZ6Hky217vnGOq1TIdiW-BqJbzA0tagdxlBmiE6ab4lwmou7yZwvqBmKV7Uxu3DMXNTahShh-IrvJ6dZWe-QoGgYO9oqeISNEeopSqNvC7NQ.jpg',
//     username: "RomanNedobytko",
// };


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