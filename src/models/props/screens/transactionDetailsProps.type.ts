import { RouteProp } from '@react-navigation/native';
import {TransactionDetail} from '../../../navigator/screenName';
import {LookupStackParamList} from '../../navigator/stacksParamList.type';
import {IStackNavigationScreenProps} from '../navigator/stackNavigationScreenProps.type';

type TransactionDetailScreenRouteProps = RouteProp<LookupStackParamList, typeof TransactionDetail>;

export interface ITransactionDetailsProps extends IStackNavigationScreenProps {
    route: TransactionDetailScreenRouteProps;
}
