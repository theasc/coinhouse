import {ITransaction} from "../../transactions/transaction.type";

export interface ITransactionReducerType {
    search?: string,
    transactions?: [ITransaction],
    error?: string,
}
