import {RouteProp} from '@react-navigation/native';
import {LookUp} from '../../../navigator/screenName';
import {LookupStackParamList} from '../../navigator/stacksParamList.type';
import {ITransaction} from '../../transactions/transaction.type';
import {IStackNavigationScreenProps} from '../navigator/stackNavigationScreenProps.type';

type LookupScreenRouteProps = RouteProp<LookupStackParamList, typeof LookUp>;

export interface ILookupProps extends IStackNavigationScreenProps {
    route: LookupScreenRouteProps;
    transactionValue?: string;
    transactions?: [ITransaction];
    error?: string;
    updateSearch?: (searchValue: string) => void;
    searchTransaction?: (toSearch) => void;
    loading?: boolean;
}
