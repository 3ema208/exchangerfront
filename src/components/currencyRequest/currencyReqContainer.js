import React from 'react'
import { connect } from 'react-redux'
import ProposalTable from './tableProposal'
import { getProposal } from '../../store/currencyRequestExchange/action'

class CurrencyReqContainer extends React.Component {

    componentDidMount() {
        this.props.getProposal()
    }

    render() {
        return (
            <div>
                <ProposalTable
                    proposal={this.props.proposal}
                />
            </div>
        )
    }
}

const mapStateProps = store => {
    return {
        proposal: store.proposal.proposal
    }
}

const mapActions = dispatch => {
    return {
        getProposal: () => dispatch(
            getProposal()
        )
    }
}

export default connect(mapStateProps, mapActions)(CurrencyReqContainer)