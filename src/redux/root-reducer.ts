import { combineReducers } from "redux";
import TransactionReducer from "./transations/transactions.reducer";


const rootReducer = combineReducers({
    transactions: TransactionReducer,
});

export default rootReducer;
