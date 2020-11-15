import {all, call, put, takeLatest} from 'redux-saga/effects';
import TransactionTypes from "./transactions.types";
import {getGasPrice, getTransactionWithAddress} from "../../services/transaction.services";
import {ITransaction} from "../../models/transactions/transaction.type";
import {searchTransactionsFailure, searchTransactionsSuccess} from "./transactions.actions";

export function* lookupTransactions({payload}: { type: typeof TransactionTypes.LOOKUP; payload: string; }){
    try{
        const response = yield call(getTransactionWithAddress, payload);
        console.log('response', response);
        const gasPrice = yield call(getGasPrice);
        console.log('GAS PRICE', gasPrice);
        const transactions: [ITransaction] = response.result;
        yield put(searchTransactionsSuccess(transactions));
    } catch (e) {
        console.log('err', e);
        yield put(searchTransactionsFailure(e));
    }
}

export function* onLookupTransactions(){
    yield takeLatest(TransactionTypes.LOOKUP, lookupTransactions);
}

export function* transactionSagas() {
    yield all([
       call(onLookupTransactions)
    ]);
}
