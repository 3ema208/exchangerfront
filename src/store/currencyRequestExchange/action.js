import axios from 'axios'

export const SUCCESS_GET_PROPOSAL = "SUCCESS_GET_PROPOSAL"
export const FAIL_GET_PROPOSAL = "FAIL_GET_PROPOSAL"
export const CHANGE_CURRENT_PROPOSAL = 'CHANGE_CURRENT_PROPOSAL'
export const UPDATE_PROPOSAL = 'UPDATE_PROPOSAL'

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
export const deactiveProposalSuccess = (data) => {
    return {
        type: UPDATE_PROPOSAL,
        payload: data
    }
}

export const deactiveProposal = (id) => {
    return dispatch => {
        axios.patch(`/proposal/${id}/`, { active: false })
        .then(res => {
            console.log(res)
            if (res.status === 200) {
                dispatch(deactiveProposalSuccess(res.data))
                dispatch(getProposal())
            }
        })
        .catch(err => {
            console.log(err.response)
        })
    }
}

export const interestingProposal = (id, user) => {
    return dispatch => {
        axios.post(`/proposal/${id}/interesting/`, {user: user})
        .then(res=>{
            if (res.status === 201){
                return 
            }
        })
        .catch(err=>{
            alert(err.response)
        })
    }   
}