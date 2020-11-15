import {all, call} from 'redux-saga/effects';
import {transactionSagas} from "./transations/transaction.sagas";


export default function* rootSaga() {
    yield all([
        call(transactionSagas),
    ]);
}
