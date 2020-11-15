import { connect } from 'react-redux';
import LookupScreen from "./lookup.component";
import {Dispatch} from "redux";
import {updateSearchTransactions} from "../../redux/transations/transactions.actions";
import {IRootState} from "../../models/redux/rootState.type";
import {ILookupProps} from "../../models/props/screens/lookupProps.type";

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateSearch: (searchValue: string) => dispatch(updateSearchTransactions(searchValue))
});

const mapStateToProps = (state: IRootState, ownProps: ILookupProps): ILookupProps => ({
    ...ownProps,
    transactionValue: state.transactions.search,
});

export default connect(mapStateToProps, mapDispatchToProps)(LookupScreen);
