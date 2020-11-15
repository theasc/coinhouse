import TransactionTypes from "./transactions.types";
import {AnyAction} from "redux";
import {ITransactionReducerType} from "../../models/redux/transactions/transactionReducer.type";

const INITIAL_STATE: ITransactionReducerType = {
    search: undefined,
    transactions: undefined,
    error: undefined,
};

const TransactionReducer = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case TransactionTypes.UPDATE_SEARCH:
            return {
                ...state,
                search: action.payload,
            }
        case TransactionTypes.SEARCH_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                transactions: action.payload,
                error: undefined,
            }
        case TransactionTypes.SEARCH_TRANSACTIONS_FAILURE:
            return {
                ...state,
                error: action.payload,
                transactions: undefined,
            }
        case TransactionTypes.LOOKUP:
            return state;
        default:
            return state;
    }
}

export default TransactionReducer;
