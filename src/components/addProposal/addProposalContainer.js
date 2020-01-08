import React from 'react'
import { connect } from 'react-redux'

import { setCurrentCurrency, setSellBuy, setExchangeRate, setAmount, addProposal } from "../../store/addProposal/actions"
import FormAddProposal from './formAddProposal'



class AddProposal extends React.Component {
    render() {
        return (
            <div>
                <FormAddProposal
                    currency={this.props.currency}
                    sellBuy={this.props.sellBuy}
                    exchangeRate={this.props.exchangeRate}
                    amount={this.props.amount}
                    setCurrentCurrency={this.props.setCurrentCurrency}
                    setSellBuy={this.props.setSellBuy}
                    setExchangeRate={this.props.setExchangedRate}
                    setAmount={this.props.setAmount}
                    submitActionHand={this.props.submitAddProposal}
                    user={this.props.user}
                     />
            </div>
        )
    }
}

const mapStateProps = (store) => {
    return {
        currency: store.addProposal.currency,
        sellBuy: store.addProposal.sellBuy,
        exchangeRate: store.addProposal.exchangeRate,
        amount: store.addProposal.amount,
        user: store.auth
    }
}

const mapDispatch = dispatch => {
    return {
        setCurrentCurrency: (val) => dispatch(setCurrentCurrency(val)),
        setSellBuy: (val) => dispatch(setSellBuy(val)),
        setExchangedRate: (val) => dispatch(setExchangeRate(val)),
        setAmount: (val) => dispatch(setAmount(val)),
        submitAddProposal: (...val) => dispatch(addProposal(...val))
    }
}

export default connect(mapStateProps, mapDispatch)(AddProposal)