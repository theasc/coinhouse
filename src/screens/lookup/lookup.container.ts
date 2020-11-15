import { connect } from 'react-redux';
import LookupScreen from "./lookup.component";
import {Dispatch} from "redux";
import {lookupTransactions, updateSearchTransactions} from "../../redux/transations/transactions.actions";
import {IRootState} from "../../models/redux/rootState.type";
import {ILookupProps} from "../../models/props/screens/lookupProps.type";

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateSearch: (searchValue: string) => dispatch(updateSearchTransactions(searchValue)),
    searchTransaction: (address: string) => dispatch(lookupTransactions(address)),
});

const mapStateToProps = (state: IRootState, ownProps: ILookupProps): ILookupProps => ({
    ...ownProps,
    transactionValue: state.transactions.search,
    transactions: state.transactions.transactions,
    error: state.transactions.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(LookupScreen);
