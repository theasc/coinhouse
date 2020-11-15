import {IStackNavigationScreenProps} from "../navigator/stackNavigationScreenProps.type";
import {ITransaction} from "../../transactions/transaction.type";

export interface ILookupProps extends IStackNavigationScreenProps{
    transactionValue?: string,
    transactions?: [ITransaction],
    error?: string,
    updateSearch?: (searchValue: string) => void,
    searchTransaction?: (toSearch) => void,
}
