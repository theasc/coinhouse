import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import {ILookupProps} from '../../models/props/screens/lookupProps.type';
import {IRootState} from '../../models/redux/rootState.type';
import {lookupTransactions, updateSearchTransactions} from '../../redux/transations/transactions.actions';
import LookupScreen from './lookup.component';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateSearch: (searchValue: string) => dispatch(updateSearchTransactions(searchValue)),
    searchTransaction: (address: string) => dispatch(lookupTransactions(address))
});

const mapStateToProps = (state: IRootState, ownProps: ILookupProps): ILookupProps => ({
    ...ownProps,
    transactionValue: state.transactions.search,
    transactions: state.transactions.transactions,
    error: state.transactions.error,
    loading: state.transactions.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(LookupScreen);
