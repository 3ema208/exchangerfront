import {combineReducers} from 'redux'

import authReducers from './auth/redusers'

export default combineReducers({
    auth: authReducers
})