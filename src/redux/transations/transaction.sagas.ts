import {all, call, put, takeLatest} from 'redux-saga/effects';
import {ITransaction} from '../../models/transactions/transaction.type';
import {getTransactionWithAddress} from '../../services/transaction.services';
import {searchTransactionsFailure, searchTransactionsSuccess} from './transactions.actions';
import TransactionTypes from './transactions.types';

export function* lookupTransactions({payload}: { type: typeof TransactionTypes.LOOKUP; payload: string; }) {
    try {
        const response = yield call(getTransactionWithAddress, payload);
        const transactions: [ITransaction] = response.result;
        yield put(searchTransactionsSuccess(transactions));
    } catch (e) {
        yield put(searchTransactionsFailure(e));
    }
}

export function* onLookupTransactions() {
    yield takeLatest(TransactionTypes.LOOKUP, lookupTransactions);
}

export function* transactionSagas() {
    yield all([
       call(onLookupTransactions)
    ]);
}
