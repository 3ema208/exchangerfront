import axios from "axios"


export const CURRENT_CURRENCY = 'CURRENT_CURRENCY'
export const SELL_BUY = "SELL_BUY"
export const EXCHANGE_RATE = "EXCHANGE_RATE"
export const AMOUNT = "AMOUNT"


export const setCurrentCurrency = (currency) => {
    return ({
        type: CURRENT_CURRENCY,
        payload: currency
    })
}

export const setSellBuy = (val) => {
    return ({
        type: SELL_BUY,
        payload: val
    })
}

export const setExchangeRate = (exchangeRate) => {
    return ({
        type: EXCHANGE_RATE,
        payload: exchangeRate
    })
}

export const setAmount = (amount) => {
    return ({
        type: AMOUNT,
        payload: amount
    })
}

export const addProposal = (currency, isSell, rate, amount, comment, user_obj) => {
    return dispatch => {
        axios.post('proposals/',
            {
                amount_currency: currency,
                amount: amount,
                isSell: isSell,
                exchange_rates: rate,
                comment: comment,
                telegram_info: user_obj,
            }
        )
        .then(
            res => {
                if (res.status === 201){
                    window.location = '/'
                }
            }
        ).catch(err=>{console.log('err', err.response)})
    }
}