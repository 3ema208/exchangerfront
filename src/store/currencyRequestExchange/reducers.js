import {SUCCESS_GET_PROPOSAL, FAIL_GET_PROPOSAL, CHANGE_CURRENT_PROPOSAL, UPDATE_PROPOSAL} from './action'

const defaultState = {
    count: 0,
    needRefresh: false,
    allProposal: [],
    currentProposal: [],
    errros: false,
    isLoading: false,
}

export default (state=defaultState, action) => {
    switch (action.type){
        case SUCCESS_GET_PROPOSAL:
            return {
                ...state, 
                count: action.payload.count,
                next: action.payload.next,
                previous: action.payload.previous,
                allProposal: [...action.payload.results],
                currentProposal: [...action.payload.results],
            }
        case CHANGE_CURRENT_PROPOSAL:
            return {
                ...state,
                currentProposal: [...action.payload],
            }
        case FAIL_GET_PROPOSAL:
            return {
                ...state, errors: true,
            }
        case UPDATE_PROPOSAL:
            // TODO update 
            return {...state}
        default:
            return state
    }
}