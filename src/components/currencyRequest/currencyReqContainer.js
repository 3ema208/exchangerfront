import React from 'react'
import { connect } from 'react-redux'
import ProposalTable from './tableProposal'
import { getProposal, setCurrentProposal } from '../../store/currencyRequestExchange/action'


const actionCurrency = [
    { name: "ALL", value: 'All' },
    { name: "SELL", value: true},
    { name: "BUY", value: false},
]

const currency = [
    { name: "ALL" },
    { name: "USD" },
    { name: "EURO" },
]


class CurrencyReqContainer extends React.Component {
    componentDidMount() {
        this.props.getProposal()
    }

    render() {
        return (
            <div>
                <ProposalTable
                    proposal={this.props.proposal}
                    currentPropsals={this.props.currentProposal}
                    actionCurrency = {actionCurrency}
                    currency={currency}
                    setCurrentProposal={this.props.changeCurProposal}
                />
            </div>
        )
    }
}

const mapStateProps = store => {
    console.log(store)
    return {
        proposal: store.proposal.allProposal,
        currentProposal: store.proposal.currentProposal,
    }
}

const mapActions = dispatch => {
    return {
        getProposal: () => dispatch(
            getProposal()
        ),
        changeCurProposal: (proposals)=>dispatch(
            setCurrentProposal(proposals)
        ) 
    }
}

export default connect(mapStateProps, mapActions)(CurrencyReqContainer)