import {CURRENT_CURRENCY, SELL_BUY, EXCHANGE_RATE, AMOUNT} from "./actions"


const defaultState = {
    currency: "USD",
    sellBuy: true,
    exchangeRate: undefined,
    amount: undefined
}

export default (state=defaultState, action) => {
    switch (action.type){
        case CURRENT_CURRENCY:
            return {
                ...state, currency: action.payload,
            }
        case SELL_BUY:
            return {
                ...state, sellBuy: action.payload
            }
        case EXCHANGE_RATE: 
            return {
                ...state,
                exchangeRate: action.payload
            }
        case AMOUNT:
            return {
                ...state,
                amount: action.payload
            }
        default:
            return state
    }
}