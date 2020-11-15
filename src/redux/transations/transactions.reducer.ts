import {AnyAction} from 'redux';
import {ITransactionReducerType} from '../../models/redux/transactions/transactionReducer.type';
import TransactionTypes from './transactions.types';

const INITIAL_STATE: ITransactionReducerType = {
    search: undefined,
    transactions: undefined,
    error: undefined,
    loading: undefined
};

const TransactionReducer = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case TransactionTypes.UPDATE_SEARCH:
            return {
                ...state,
                search: action.payload
            };
        case TransactionTypes.SEARCH_TRANSACTIONS_SUCCESS:
            return {
                ...state,
                transactions: action.payload,
                error: undefined,
                loading: false
            };
        case TransactionTypes.SEARCH_TRANSACTIONS_FAILURE:
            return {
                ...state,
                error: action.payload,
                transactions: undefined,
                loading: false
            };
        case TransactionTypes.SEARCH_TRANSACTIONS_LOADING:
            return {
                ...state,
                error: undefined,
                transactions: undefined,
                loading: true
            };
        default:
            return state;
    }
};

export default TransactionReducer;
