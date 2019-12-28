import {combineReducers} from 'redux'

import authReducers from './auth/redusers'
import currencyExchangeReducers from './currencyRequestExchange/reducers'

export default combineReducers({
    auth: authReducers,
    proposal: currencyExchangeReducers,
})