import { AnyAction } from 'redux';
import TransactionTypes from './transactions.types';
import {ITransaction} from "../../models/transactions/transaction.type";

export const lookupTransactions = (transactionId: string) => ({
    type: TransactionTypes.LOOKUP,
    payload: transactionId,
});

export const updateSearchTransactions = (searchValue: string) => ({
    type: TransactionTypes.UPDATE_SEARCH,
    payload: searchValue,
});

export const searchTransactionsSuccess = (transactions: [ITransaction]) => ({
    type: TransactionTypes.SEARCH_TRANSACTIONS_SUCCESS,
    payload: transactions,
});

export const searchTransactionsFailure = (error: string) => ({
    type: TransactionTypes.SEARCH_TRANSACTIONS_FAILURE,
    payload: error,
});


