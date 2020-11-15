import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import {lookupTransactions, updateSearchTransactions} from '../../redux/transations/transactions.actions';
import QRScanScreen from './qr-scan.component';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateSearch: (searchValue: string) => dispatch(updateSearchTransactions(searchValue)),
    searchTransaction: (address: string) => dispatch(lookupTransactions(address))
});

export default connect(null, mapDispatchToProps)(QRScanScreen);
