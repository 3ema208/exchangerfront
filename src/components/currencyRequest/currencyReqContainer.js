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
                    getProposal={this.props.getProposal}
                    currentPropsals={this.props.currentProposal}
                    actionCurrency = {actionCurrency}
                    isAuth={this.props.isAuth} 
                    user_id={this.props.user_id}
                    currency={currency}
                    setCurrentProposal={this.props.changeCurProposal}
                />
            </div>
        )
    }
}

const mapStateProps = store => {
    return {
        proposal: store.proposal.allProposal,
        isAuth: Boolean(store.auth.token),
        user_id: store.auth.id,
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