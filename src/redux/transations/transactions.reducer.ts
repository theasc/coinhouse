import TransactionTypes from "./transactions.types";
import {AnyAction} from "redux";
import {ITransactionReducerType} from "../../models/redux/transactions/transactionReducer.type";

const INITIAL_STATE: ITransactionReducerType = {
    search: undefined,
};

const TransactionReducer = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case TransactionTypes.UPDATE_SEARCH:
            return {
                ...state,
                search: action.payload,
            }
        case TransactionTypes.LOOKUP:
            return state;
        default:
            return state;
    }
}

export default TransactionReducer;
