import {combineReducers} from 'redux'

import authReducers from './auth/redusers'
import currencyExchangeReducers from './currencyRequestExchange/reducers'
import addProposalReducers from './addProposal/reducers'

export default combineReducers({
    auth: authReducers,
    proposal: currencyExchangeReducers,
    addProposal: addProposalReducers,
})