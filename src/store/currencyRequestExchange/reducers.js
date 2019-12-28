import {SUCCESS_GET_PROPOSAL, FAIL_GET_PROPOSAL} from './action'

const defaultState = {
    count: 0,
    nextPage: null,
    previous: null,
    proposal: [],
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
                proposal: [...action.payload.results]
            }
        case FAIL_GET_PROPOSAL:
            return {
                ...state, errors: true,
            }
        default:
            return state
    }
}