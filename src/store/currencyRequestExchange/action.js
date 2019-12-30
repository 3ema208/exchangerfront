import axios from 'axios'

export const SUCCESS_GET_PROPOSAL = "SUCCESS_GET_PROPOSAL"
export const FAIL_GET_PROPOSAL = "FAIL_GET_PROPOSAL"
export const CHANGE_CURRENT_PROPOSAL = 'CHANGE_CURRENT_PROPOSAL'

export const success_get_proposal = (proposal) => {
    return ({
        type: SUCCESS_GET_PROPOSAL,
        payload: proposal
    })
}

export const fail_get_proposal = () => {
    return ({
        type: FAIL_GET_PROPOSAL,
    })
}


export const setCurrentProposal = (proposals) => {
    return ({
        type: CHANGE_CURRENT_PROPOSAL,
        payload: proposals
    })
}

export const getProposal = () => {
    return dispatch => {
        axios.get('/proposals/')
        .then(res => {dispatch(success_get_proposal(res.data))})
        .catch(err => {
            console.log(err.response)
        })
    }
}