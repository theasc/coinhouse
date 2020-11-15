import { AnyAction } from 'redux';
import TransactionTypes from './transactions.types';

export const lookupTransactions = (transactionId: string) => ({
    type: TransactionTypes.LOOKUP,
    payload: transactionId,
});

export const updateSearchTransactions = (searchValue: string) => ({
    type: TransactionTypes.UPDATE_SEARCH,
    payload: searchValue,
});
